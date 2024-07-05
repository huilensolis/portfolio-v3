import { NextResponse, type NextRequest } from "next/server";
import { SUPPORTED_LANGS } from "./utils/consts";
import { headers } from "next/headers";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const defaultLangUrl = request.nextUrl.clone();
  defaultLangUrl.pathname = `/${SUPPORTED_LANGS[0]}${pathname}`;

  const hasPathNameLang = SUPPORTED_LANGS.some((lang) =>
    pathname.startsWith(`/${lang}`),
  );

  if (!hasPathNameLang) {
    const acceptedLangs = headers().get("Accept-Language");

    if (!acceptedLangs) {
      return NextResponse.redirect(defaultLangUrl);
    }

    const acceptedLanguageIsOnLangList = acceptedLangs
      .split(",")
      .find((headersLang) =>
        SUPPORTED_LANGS.find((supportedLang) => supportedLang === headersLang),
      );

    if (!acceptedLanguageIsOnLangList)
      return NextResponse.redirect(defaultLangUrl);

    const urlWithAcceptedLang = request.nextUrl.clone();
    urlWithAcceptedLang.pathname = `/${acceptedLanguageIsOnLangList}${pathname}`;

    return NextResponse.redirect(urlWithAcceptedLang);
  }

  // if the path contains a lang, we proceed
  return;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
