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
    <article className="flex gap-2 items-start justify-centr">
      <img
        src={user.avatar_url || ""}
        className="h-8 w-8 rounded-full"
        alt={user.full_name || user.username || " "}
      />
      <span className="dark:text-neutral-50">{user.full_name ?? ""}</span>
    </article>
  );
}
