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
          width={ isOpen? 144: 48}
          height={isOpen? 144: 48}
          className=" mr-4 mb-2 rounded-full"
        ></Image>
        <div className=" text-2xl font-semibold text-black grow">choooose</div>
        <div>
          {!isOpen ? (
            <button className=" px-8 py-2 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-white flex flex-row gap-2"
              onClick={() => setIsOpen(true)}
            >
              <ChevronDoubleDownIcon  className=" w-5 h-5"/>
              <span>Expand</span>
            </button>
          ) : (
            <button className=" px-8 py-2 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-white flex flex-row gap-2"
              onClick={()=>setIsOpen(false)}
            >
              <ChevronDoubleUpIcon  className=" w-5 h-5"/>
              <span>Collapse</span>
            </button>
          )}
        </div>
      </div>
      <div className={clsx(' border-b border-solid border-gray-200 flex-row flex gap-4',{
        'hidden': !isOpen,
      })}
      >
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">
          Joined
          </div>
          <div>
          Jun 4, '22
          </div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">
          Last Post
          </div>
          <div>
          Dec 2, '23
          </div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">
          Seen
          </div>
          <div>
          32 mins
          </div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">
          Views
          </div>
          <div>
          111
          </div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">
          Trust Level
          </div>
          <div>
          member
          </div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-gray-400">
          Email
          </div>
          <div>
          wangzhsr@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
