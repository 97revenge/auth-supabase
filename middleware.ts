import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const oauth = req.nextUrl.searchParams.get("oauth");

  const prisma = new PrismaClient();

  const instance = await prisma.user.findUnique({
    where: {
      clientGoogle: oauth as string,
    },
  });

  if (oauth) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(
      new URL(`/auth?error=${"voce precisa autenticacao para usar "}`, req.url)
    );
  }
}

export const config = {
  matcher: "/feed/:path*",
};
