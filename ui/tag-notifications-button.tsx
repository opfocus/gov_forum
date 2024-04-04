"use client";

import {
  BellAlertIcon,
  BellIcon,
  BellSlashIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

export default function TagNotificationButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className=" h-full bg-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-400 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
        title="show notification buttons"
      >
        <BellIcon className="h-5 w-5" />
      </button>
      {isOpen && (
        <section className=" absolute right-0 mt-2 w-full  bg-white shadow-md sm:w-96">
          <ul title="[TBA]">
            <li className=" flex flex-row p-2 hover:bg-gray-100">
              <div className=" pr-1">
                <BellAlertIcon className=" h-5 w-5 text-sky-600" />
              </div>
              <div className=" flex flex-col">
                <div className=" font-semibold text-gray-700">Watching</div>
                <div className=" text-xs text-gray-400">
                  You will automatically watch all topics with this tag. You
                  will be notified of all new posts and topics, plus the count
                  of unread and new posts will also appear next to the topic.
                  synonyms.
                </div>
              </div>
            </li>
            <li className=" flex flex-row p-2 hover:bg-gray-100">
              <div className=" pr-1">
                <BellIcon className=" h-5 w-5 text-sky-600" />
              </div>
              <div className=" flex flex-col">
                <div className=" font-semibold text-gray-700">Tracking</div>
                <div className=" text-xs text-gray-400">
                  You will automatically track all topics with this tag. A count
                  of unread and new posts will appear next to the topic.
                </div>
              </div>
            </li>
            <li className=" flex flex-row p-2 hover:bg-gray-100">
              <div className=" pr-1">
                <BellIcon className=" h-5 w-5 text-gray-500" />
              </div>
              <div className=" flex flex-col">
                <div className=" font-semibold text-gray-700">
                  Wathcing First Post
                </div>
                <div className=" text-xs text-gray-400">
                  You will be notified of new topics in this tag but not replies
                  to the topics.
                </div>
              </div>
            </li>
            <li className=" flex flex-row p-2 hover:bg-gray-100">
              <div className=" pr-1">
                <BellIcon className=" h-5 w-5 text-gray-500" />
              </div>
              <div className=" flex flex-col">
                <div className=" font-semibold text-gray-700">Normal</div>
                <div className=" text-xs text-gray-400">
                  You will be notified if someone mentions your @name or replies
                  to your post.
                </div>
              </div>
            </li>
            <li className=" flex flex-row p-2 hover:bg-gray-100">
              <div className=" pr-1">
                <BellSlashIcon className=" h-5 w-5 text-gray-500" />
              </div>
              <div className=" flex flex-col">
                <div className=" font-semibold text-gray-700">Muted</div>
                <div className=" text-xs text-gray-400">
                  You will not be notified of anything about new topics with
                  this tag, and they will not appear on your unread tab.
                </div>
              </div>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}
