"use client";

import { Button } from "@/components/ui/button/button.component";
import { useFormStatus } from "react-dom";

export function DeleteCommentBtn() {
  const { pending } = useFormStatus();
  return (
    <Button variant="default" size="sm" type="submit" loading={pending}>
      Delete
    </Button>
  );
}
