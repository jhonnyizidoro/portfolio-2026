import { NextRequest, NextResponse } from "next/server";

const LANGUAGES = ["en", "pt-br"];
const DEFAULT_LANGUAGE = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const detectedLanguage = LANGUAGES.find(
    (language) =>
      pathname.startsWith(`/${language}/`) || pathname === `/${language}`,
  );

  if (!detectedLanguage) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LANGUAGE}${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api|.*\\..*).*)"],
};
