import { createClient } from "@/utils/supabase/server";

export async function UserCard({ userId }: { userId: string }) {
  const supabase = createClient();

  const { data: user } = await supabase
    .from("user")
    .select("*")
    .eq("id", userId)
    .single();

  if (!user) return <></>;

  return (
    <span className="dark:text-neutral-50 text-neutral-900">
      {user.full_name ?? ""}
    </span>
  );
}
