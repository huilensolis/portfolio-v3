import { SignInWithGithubBtn } from "@/components/feature/sign-in-with-github-btn";
import { createClient } from "@/utils/supabase/server";
import { LogOutBtn } from "@/components/feature/log-out/log-out.component";

export default async function GuestbookPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      {user ? (
        <div>
          <LogOutBtn />
          <form>
            <fieldset className="flex flex-col">
              <label>New Comment</label>

              <input type="text" />
            </fieldset>
          </form>
        </div>
      ) : (
        <SignInWithGithubBtn redirectAfterSignIn={"/guestbook"} />
      )}
      <ul></ul>
    </div>
  );
}
