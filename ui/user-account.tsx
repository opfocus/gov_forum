"use client";

import {
  PencilIcon,
  PlusIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";

// data for test UI
const data = {
  username: "chooose",
  user_avatar: "https://avatars.discourse-cdn.com/v4/letter/c/b3f665/288.png",
  email: "wangzhsr@gmail.com",
  name: null,
};

export default function UserAccount() {
  const [isEditUsername, setIsEditUsername] = useState(false);
  const [isEditUserAvatar, setIsEditUserAvatar] = useState(false);
  const [isEditUserEmail, setIsEditUserEmail] = useState(false);

  return (
    <main>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Username</label>
        <br />
        {isEditUsername ? (
          <div>
            <input
              id="username"
              name="username"
              type="text"
              className=" my-2 w-1/2 border-2 border-solid  border-gray-200 p-1 text-gray-700 focus:border-blue-400 focus:outline-none"
              value={data.username}
            />
            <div className=" mt-2 space-x-2 text-sm">
              <button
                className=" disabled cursor-not-allowed bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
                title="TBA"
              >
                change
              </button>
              <button
                className=" px-2 py-1 text-sky-600 hover:text-black"
                onClick={() => setIsEditUsername(false)}
              >
                cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className=" mt-2 flex flex-row items-center">
              <div className=" pr-2 text-sm">{data.username}</div>
              <button
                className=" bg-gray-200 p-2 text-gray-500 hover:bg-gray-400 hover:text-white"
                onClick={() => setIsEditUsername(true)}
              >
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <p className=" mt-2 text-xs text-gray-500">
              People can mention you as @chooose
            </p>
          </div>
        )}
      </section>
      <section className="mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Profile Picture
        </label>
        <br />
        {isEditUserAvatar ? (
          <div className=" mt-2 space-x-2 text-sm">
            <button
              className=" disabled cursor-not-allowed bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
              title="TBA"
            >
              change
            </button>
            <button
              className=" px-2 py-1 text-sky-600 hover:text-black"
              onClick={() => setIsEditUserAvatar(false)}
            >
              cancel
            </button>
          </div>
        ) : (
          <div className=" flex flex-row items-center">
            <Image
              src={data.user_avatar}
              alt="user avatar"
              width={90}
              height={90}
              className=" rounded-full pr-2"
            ></Image>
            <button
              className=" bg-gray-200 p-2 text-gray-500 hover:bg-gray-400 hover:text-white"
              onClick={() => setIsEditUserAvatar(true)}
            >
              <PencilIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Email</label>
        <br />
        {isEditUserEmail ? (
          <div>
            <input
              id="email"
              name="email"
              type="email"
              className=" my-2 w-1/2 border-2 border-solid  border-gray-200 p-1 text-gray-700 focus:border-blue-400 focus:outline-none"
              value={data.email}
            />
            <div className=" mt-2 space-x-2 text-sm">
              <button
                className=" disabled cursor-not-allowed bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
                title="TBA"
              >
                change
              </button>
              <button
                className=" px-2 py-1 text-sky-600 hover:text-black"
                onClick={() => setIsEditUserEmail(false)}
              >
                cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className=" mt-2 flex flex-row items-center">
              <div className=" pr-2 text-sm">{data.email}</div>
              <button
                className=" bg-gray-200 p-2 text-gray-500 hover:bg-gray-400 hover:text-white"
                onClick={() => setIsEditUserEmail(true)}
              >
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <p className=" font-semibold text-green-700">primary</p>
            <div className=" flex w-1/2 flex-row items-center justify-between">
              <p className=" mt-2 text-xs text-gray-500">
                Never shown to the public.
              </p>
              <button
                className=" disabled flex cursor-not-allowed flex-row items-center text-sky-600"
                title="TBA"
              >
                <PlusIcon className="inline-block h-5 w-5" />
                Add Alternate Email
              </button>
            </div>
          </div>
        )}
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          className=" my-2 w-1/2 border-2 border-solid  border-gray-200 p-1 text-gray-700 focus:border-blue-400 focus:outline-none"
        />
        <p className=" text-xs text-gray-500">Never shown to the public.</p>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Export your data
        </label>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          <CloudArrowDownIcon className=" h-5 w-5" />
          Request archive
        </button>
        <p className=" mt-2 text-xs text-gray-500">
          Never shown to the public.
        </p>
      </section>
      <section className=" mt-8">
        <button
          className=" disabled cursor-not-allowed bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
          title="TBA"
        >
          Save Changes
        </button>
      </section>
    </main>
  );
}
