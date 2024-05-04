"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useEditorOpen } from "@/app/context/open-editor-provider";
import { Button } from "@/ui/custom-compoment";

export default function NewTopicButton() {
  const [_, setOpen] = useEditorOpen();
  const { user } = useUser();
  const router = useRouter();

  return (
    <Button
      handleEvent={
        user ? () => setOpen(true) : () => router.push("/api/auth/login")
      }
    >
      <div className="flex items-center gap-1 ">
        <PlusIcon className="h-6 w-6 shrink-0" />
        <span className=" text-base font-medium">New Topic</span>
      </div>
    </Button>
  );
}
