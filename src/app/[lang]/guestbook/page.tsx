import { SignInWithGithubBtn } from "@/components/feature/sign-in-with-github-btn";
import { createClient } from "@/utils/supabase/server";
import { LogOutBtn } from "@/components/feature/log-out/log-out.component";
import { TextInput } from "@/components/ui/text-input";
import { newComment } from "./actions/new-comment";
import { UserCard } from "@/components/feature/user-card";
import { deleteComment } from "./actions/delete-comment";
import { DeleteCommentBtn } from "./delete-btn";
import { CreateCommentBtn } from "./create-btn";
import { Suspense } from "react";
import { Loader } from "lucide-react";

export default async function GuestbookPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: comments } = await supabase.from("comment").select("*");

  const userComment = comments?.find((comment) => comment.user_id === user?.id);

  return (
    <div className="flex flex-col">
      <main className="w-full h-full border-y border-l dark:border-neutral-900 border-gray-200 grid grid-cols-10 grid-rows-4 relative">
        {Array(10 * 4)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`h-24 w-full border-r dark:border-neutral-900 border-gray-200`}
            ></div>
          ))}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <h1 className="max-w-[60rem] text-4xl sm:text-6xl text-neutral-800 dark:text-neutral-50 font-medium w-full text-center text-balance">
            Guestbook
          </h1>
        </div>
      </main>
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <div className="border border-gray-200 dark:border-neutral-900 p-4">
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
          <div className="flex items-center gap-4">
            <h2 className="font-medium dark:text-neutral-200 text-neutral-900">
              Sign my Guestbook
            </h2>
            <SignInWithGithubBtn redirectAfterSignIn="/en/guestbook" />
          </div>
        )}
      </div>
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <ul className="w-full flex flex-col border-t border-gray-200 dark:border-neutral-900">
        {comments &&
          comments?.length > 0 &&
          comments.map((comment) => (
            <li
              key={comment.id}
              className={`flex flex-col sm:grid ${comment.user_id === user?.id ? "grid-cols-[150px_1fr_100px]" : "grid-cols-[150px_1fr]"} p-4 border-b border-x border-gray-200 dark:border-neutral-900`}
            >
              <Suspense
                fallback={
                  <Loader className="animate-spin duration-150 w-5 h-5" />
                }
              >
                <UserCard userId={comment.user_id} />
              </Suspense>
              <p className="text-pretty">&quot;{comment.text}&quot;</p>
              {comment.user_id === user?.id && (
                <form action={deleteComment} className="sm:mt-5">
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
