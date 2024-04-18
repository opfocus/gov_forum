"use client";

import { useContext } from "react";
import { OpenEditorContext } from "@/app/_components/open-editor-provider";
import { useUser } from "@auth0/nextjs-auth0/client";

import { PlusIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function NewTopicButton() {
  const context = useContext(OpenEditorContext);
  const { user } = useUser();
  const router = useRouter()

  if (!context) {
    throw new Error(
      "Editor context not work well in new-topic-button component",
    );
  }
  const { setIsOpen } = context;

  return (
    <button
      className=" flex items-center gap-1 bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
      onClick={user? () => setIsOpen(true) : () => router.push("/api/auth/login")}
    >
      <PlusIcon className="h-6 w-6 shrink-0" />
      <div className=" text-base font-medium">New Topic</div>
    </button>
  );
}


