import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export async function UserCard({ userId }: { userId: string }) {
  const supabase = createClient();

  const { data: user } = await supabase
    .from("user")
    .select("*")
    .eq("id", userId)
    .single();

  if (!user) return <></>;

  return (
    <Link
      href={`https://github.com/${user.username ?? ""}`}
      target="_blank"
      className="font-medium dark:text-neutral-50 text-neutral-900"
    >
      {user.full_name ?? user.username ?? "anonymous"}
    </Link>
  );
}
