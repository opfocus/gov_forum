"use client";

import { useContext } from "react";
import { OpenEditorContext } from "@/app/_components/open-editor-provider";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

import { PlusIcon } from "@heroicons/react/16/solid";

export default function NewTopicButton() {
  const context = useContext(OpenEditorContext);
  const { user } = useUser();

  if (!context) {
    throw new Error(
      "Editor context not work well in new-topic-button component",
    );
  }
  const { setIsOpen } = context;

  if (user)
    return (
      <button
        className=" flex items-center bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="h-6 w-6 pr-1" />
        <div className=" text-base font-medium">New Topic</div>
      </button>
    );
  return (
    <Link
      className=" flex items-center bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
      href={"/api/auth/login"}
    >
      <PlusIcon className="h-6 w-6 pr-1" />
      <div className=" text-base font-medium">New Topic</div>
    </Link>
  );
}
