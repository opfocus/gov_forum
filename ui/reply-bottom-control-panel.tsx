"use client";

import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

export default function ReplyBottomControlPanel({
  handleReply,
  createable,
}: {
  handleReply: () => void,
  createable: boolean
}) {
  return (
    <div>
      {createable ? 
        <button
          className="px-2 py-1 flex flex-row gap-1 bg-blue-400 text-white hover:bg-blue-500"
          onClick={() => handleReply()}
        >
          <ArrowUturnLeftIcon className=" w-6 h-6" />
          Reply
        </button>
       : 
        <button
          disabled = {true}
          className="px-2 py-1 flex flex-row gap-1 bg-blue-400 text-white hover:bg-blue-500 cursor-not-allowed"
          onClick={() => handleReply()}
        >
          <ArrowUturnLeftIcon className=" w-6 h-6" />
          Reply
        </button>
      }
    </div>
  );
}
