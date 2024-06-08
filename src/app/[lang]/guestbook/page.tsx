import { SignInWithGithubBtn } from "@/components/feature/sign-in-with-github-btn";
import { createClient } from "@/utils/supabase/server";
import { LogOutBtn } from "@/components/feature/log-out/log-out.component";
import { TextInput } from "@/components/ui/text-input";
import { newComment } from "./actions/new-comment";
import { UserCard } from "@/components/feature/user-card";
import { deleteComment } from "./actions/delete-comment";
import { DeleteCommentBtn } from "./delete-btn";
import { CreateCommentBtn } from "./create-btn";

export default async function GuestbookPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: comments } = await supabase.from("comment").select("*");

  const userComment = comments?.find((comment) => comment.user_id === user?.id);

  return (
    <div className="flex flex-col gap-16">
      <h1 className="dark:text-neutral-50 text-neutral-900 text-2xl">
        Guestbook
      </h1>
      <div className="mb-5">
        {user ? (
          <div>
            <div className="flex items-center gap-2">
              you are logged in as: {user.user_metadata.user_name ?? user.email}
              <LogOutBtn />
            </div>
            {!userComment && (
              <form action={newComment} className="flex gap-2 items-end">
                <fieldset className="flex flex-col">
                  <label htmlFor="comment">New Comment</label>
                  <TextInput
                    className="md:w-[600px] w-full"
                    id="comment"
                    name="comment"
                  />
                </fieldset>
                <CreateCommentBtn />
              </form>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 justify-between">
            <h2 className="dark:text-neutral-200 text-neutral-900">
              Sign my Guestbook
            </h2>
            <SignInWithGithubBtn redirectAfterSignIn={"/guestbook"} />
          </div>
        )}
      </div>
      <ul className="w-full flex flex-col gap-6">
        {comments &&
          comments?.length > 0 &&
          comments.map((comment) => (
            <li key={comment.id} className="flex gap-4 items-center">
              <div className="sm:grid sm:grid-cols-[2fr_11fr] flex flex-col">
                <div>
                  <UserCard userId={comment.user_id} />:
                </div>
                <p className="text-pretty">&quot;{comment.text}&quot;</p>
              </div>
              {comment.user_id === user?.id && (
                <form action={deleteComment}>
                  <input
                    hidden
                    defaultValue={comment.id}
                    name="comment_id"
                    id="comment_id"
                  />
                  <DeleteCommentBtn />
                </form>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
