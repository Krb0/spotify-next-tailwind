import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // token is the JWT token and exists if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  // proceed if it's an api request
  if (pathname.includes("/api/auth")) {
    return NextResponse.next();
  }

  // if token doesn't exist must redirect to login page
  // else if token exists and trying to accest another route, redirect to home
  if (!token && pathname !== "/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  } else if (token && pathname !== "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}
