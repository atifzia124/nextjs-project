import { NextResponse } from "next/server";

export function middleware(request) {
  //   return Response.json({
  //     msg: "hello",
  //   });
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*"],
};
