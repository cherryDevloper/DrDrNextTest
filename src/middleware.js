import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Redirect "/" to "/drugs"
  if (url.pathname === "/") {
    url.pathname = "/drugs";
    return NextResponse.redirect(url);
  }
  //testing something ...
  // if (url.pathname === "/medicine" && url.searchParams.get("page") === "1") {
  //   url.searchParams.delete("page");
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/medicine"],
};
