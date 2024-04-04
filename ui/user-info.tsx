"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/16/solid";
import clsx from "clsx";

export default function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full">
      <div className=" flex flex-row border-b border-solid border-gray-200">
        <Image
          src={"/user-avatar-c.png"}
          alt="user avatar"
          width={isOpen ? 144 : 48}
          height={isOpen ? 144 : 48}
          className=" mb-2 mr-4 rounded-full"
        ></Image>
        <div className=" grow text-2xl font-semibold text-black">choooose</div>
        <div>
          {!isOpen ? (
            <button
              className=" flex flex-row gap-2 bg-gray-200 px-8 py-2 text-gray-700 hover:bg-gray-400 hover:text-white"
              onClick={() => setIsOpen(true)}
            >
              <ChevronDoubleDownIcon className=" h-5 w-5" />
              <span>Expand</span>
            </button>
          ) : (
            <button
              className=" flex flex-row gap-2 bg-gray-200 px-8 py-2 text-gray-700 hover:bg-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <ChevronDoubleUpIcon className=" h-5 w-5" />
              <span>Collapse</span>
            </button>
          )}
        </div>
      </div>
      <div
        className={clsx(
          " flex flex-row gap-4 border-b border-solid border-gray-200",
          {
            hidden: !isOpen,
          },
        )}
      >
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">Joined</div>
          <div>Jun 4, '22</div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">Last Post</div>
          <div>Dec 2, '23</div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">Seen</div>
          <div>32 mins</div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">Views</div>
          <div>111</div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">Trust Level</div>
          <div>member</div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">Email</div>
          <div>wangzhsr@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
