"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function deleteComment(formData: FormData) {
  const commentId = formData.get("comment_id");

  try {
    if (!commentId) throw new Error("no comment id received");

    const supabase = createClient();

    const { error } = await supabase
      .from("comment")
      .delete()
      .eq("id", commentId);

    if (error) throw new Error("error deleting comment");

    revalidatePath("/guestbook", "page");
  } catch (error) {
    console.log({ error });
    return NextResponse.error();
  }
}
