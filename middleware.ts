import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const oauth = req.nextUrl.searchParams.get("oauth");

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
