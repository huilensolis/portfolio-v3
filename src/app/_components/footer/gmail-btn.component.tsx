"use client";

export function GmailBtn({ gmail }: { gmail: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(gmail);
      }}
      className="hover:cursor-copy focus:outline-none"
    >
      {gmail}
    </button>
  );
}
