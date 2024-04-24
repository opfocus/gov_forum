"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useEditorOpen } from "@/app/context/open-editor-provider";

export default function NewTopicButton() {
  const [_, setOpen] = useEditorOpen()
  const { user } = useUser();
  const router = useRouter()

  return (
    <button
      className=" flex items-center gap-1 bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
      onClick={user? () => setOpen(true) : () => router.push("/api/auth/login")}
    >
      <PlusIcon className="h-6 w-6 shrink-0" />
      <div className=" text-base font-medium">New Topic</div>
    </button>
  );
}


