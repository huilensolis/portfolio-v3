"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function newComment(formData: FormData) {
  const comment = formData.get("comment");

  try {
    if (!comment) throw new Error("no comment received");

    if (typeof comment !== "string") throw new Error("invalid type");

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("no session found");

    const { error } = await supabase
      .from("comment")
      .insert({ text: comment, user_id: user.id });

    if (error) throw new Error("error creating comment");

    revalidatePath("/guestbook", "page");
  } catch (error) {
    return NextResponse.error();
  }
}
