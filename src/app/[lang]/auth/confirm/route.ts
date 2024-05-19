import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { baseUrl } from "@/app/sitemap";

export async function GET(request: NextRequest) {
  const reqUrl = new URL(request.url);

  try {
    const code = reqUrl.searchParams.get("code");
    const next = reqUrl.searchParams.get("next") || "";

    if (!code) {
      console.log("no code found in request");
      return;
    }

    const supabase = createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) throw new Error("error exchanging code for session");

    return NextResponse.redirect(`${baseUrl}/${next}`);
  } catch (error) {
    return NextResponse.redirect(baseUrl);
  }
}
