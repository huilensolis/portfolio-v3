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
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-semibold text-orange-600">Guestbook</h1>
      <div className="mb-5">
        {user ? (
          <div>
            <div className="flex items-center gap-2">
              {user.user_metadata.user_name ?? user.email}
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
          <div className="flex items-center gap-2">
            <p>Comment on the Guestbook</p>
            <SignInWithGithubBtn redirectAfterSignIn={"/guestbook"} />
          </div>
        )}
      </div>
      <ul className="flex flex-col gap-2">
        {comments &&
          comments?.length > 0 &&
          comments.map((comment) => (
            <li key={comment.id} className="flex gap-2 items-center">
              <UserCard userId={comment.user_id} /> - &quot;{comment.text}&quot;
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
