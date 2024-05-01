"use client";

import { baseUrl } from "@/app/sitemap";
import { Button } from "@/components/ui/button/button.component";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export function SignInWithGithubBtn({
  redirectAfterSignIn = baseUrl,
}: {
  redirectAfterSignIn?: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  async function signIn() {
    try {
      setLoading(true);

      const supabase = createClient();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${baseUrl}/auth/confirm?next=${redirectAfterSignIn}`,
        },
      });

      if (error) throw new Error(error.message);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  }
  return (
    <Button onClick={signIn} loading={loading}>
      log in
    </Button>
  );
}
