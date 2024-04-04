" use client";

import type { Post } from "@/lib/type";
import { ChevronDownIcon, ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

export default function ReplyControlPanel({
  isZoomEditorTextarea,
  handleZoom,
  hiddenEditor,
  replyWhichPost,
}: {
  isZoomEditorTextarea: boolean;
  handleZoom: () => void;
  hiddenEditor: () => void;
  replyWhichPost: Post | undefined;
}) {
  return (
    <div className="flex flex-row justify-between   text-base font-light text-gray-400 ">
      <div className="flex flex-row gap-1">
        <div className=" flex flex-row gap-1">
          <img
            src={replyWhichPost?.avatar_template}
            alt="user avatar"
            className=" h-6 w-6 rounded-full"
          />
          <span className=" text-sm text-blue-300">
            {replyWhichPost?.username}
          </span>
        </div>
        <button className=" border border-solid border-gray-400 p-1 hover:bg-gray-200">
          <ArrowUturnLeftIcon className="h-4 w-4" />
        </button>
      </div>
      <div className=" flex flex-row gap-2">
        <button
          className=" border border-solid border-gray-400 p-1 hover:bg-gray-200"
          onClick={() => handleZoom()}
        >
          {!isZoomEditorTextarea ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <button
          className=" border border-solid border-gray-400 p-1 hover:bg-gray-200"
          onClick={() => hiddenEditor()}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
