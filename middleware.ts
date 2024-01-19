import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/auth", req.url));
}

export const config = {
  matcher: "/feed/:path*",
};
