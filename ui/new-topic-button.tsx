"use client";

import { useContext } from "react";
import { OpenEditorContext } from "@/app/components/open-editor-provider";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

import { PlusIcon } from "@heroicons/react/solid";

export default function NewTopicButton() {
  const context = useContext(OpenEditorContext);
  const {user} = useUser()

  if (!context) {
    throw new Error("Editor context not work well in new-topic-button component")
    }
  const {setIsOpen} = context

  if (user)
  return (
    
    <button className=" flex items-center px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-white"
      onClick={() => setIsOpen(true)}
    >
      <PlusIcon className="pr-1 w-6 h-6" />
      <div className=" text-base font-medium">New Topic</div>
    </button>
  )
  return (
    <Link className=" flex items-center px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-white"
    href={"/api/auth/login"}
  >
    <PlusIcon className="pr-1 w-6 h-6" />
    <div className=" text-base font-medium">New Topic</div>
  </Link>
  )
}
