"use client";

import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

export default function ReplyBottomControlPanel({
  handleReply,
  createable,
}: {
  handleReply: () => void;
  createable: boolean;
}) {
  return (
    <div>
      {createable ? (
        <button
          className="flex flex-row gap-1 bg-blue-400 px-2 py-1 text-white hover:bg-blue-500"
          onClick={() => handleReply()}
        >
          <ArrowUturnLeftIcon className=" h-6 w-6" />
          Reply
        </button>
      ) : (
        <button
          disabled={true}
          className="flex cursor-not-allowed flex-row gap-1 bg-blue-400 px-2 py-1 text-white hover:bg-blue-500"
          onClick={() => handleReply()}
        >
          <ArrowUturnLeftIcon className=" h-6 w-6" />
          Reply
        </button>
      )}
    </div>
  );
}
