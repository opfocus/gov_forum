"use client";

import { PencilIcon, PlusIcon, CloudArrowDownIcon } from "@heroicons/react/16/solid";
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
              className=" p-1 w-1/2 my-2 text-gray-700  border-2 border-gray-200 border-solid focus:outline-none focus:border-blue-400"
              value={data.username}
            />
            <div className=" text-sm mt-2 space-x-2">
              <button
                className=" px-2 py-1 bg-sky-600 text-white hover:bg-sky-700 disabled cursor-not-allowed"
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
            <div className=" flex flex-row mt-2 items-center">
              <div className=" text-sm pr-2">{data.username}</div>
              <button
                className=" bg-gray-200 p-2 text-gray-500 hover:bg-gray-400 hover:text-white"
                onClick={() => setIsEditUsername(true)}
              >
                <PencilIcon className="w-4 h-4" />
              </button>
            </div>
            <p className=" text-xs text-gray-500 mt-2">
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
          <div className=" text-sm mt-2 space-x-2">
            <button
              className=" px-2 py-1 bg-sky-600 text-white hover:bg-sky-700 disabled cursor-not-allowed"
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
              <PencilIcon className="w-4 h-4" />
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
              className=" p-1 w-1/2 my-2 text-gray-700  border-2 border-gray-200 border-solid focus:outline-none focus:border-blue-400"
              value={data.email}
            />
            <div className=" text-sm mt-2 space-x-2">
              <button
                className=" px-2 py-1 bg-sky-600 text-white hover:bg-sky-700 disabled cursor-not-allowed"
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
            <div className=" flex flex-row mt-2 items-center">
              <div className=" text-sm pr-2">{data.email}</div>
              <button
                className=" bg-gray-200 p-2 text-gray-500 hover:bg-gray-400 hover:text-white"
                onClick={() => setIsEditUserEmail(true)}
              >
                <PencilIcon className="w-4 h-4" />
              </button>
            </div>
            <p className=" text-green-700 font-semibold">primary</p>
            <div className=" w-1/2 flex flex-row items-center justify-between">
              <p className=" text-xs text-gray-500 mt-2">
                Never shown to the public.
              </p>
              <button
                className=" flex flex-row items-center text-sky-600 disabled cursor-not-allowed"
                title="TBA"
              >
                <PlusIcon className="w-5 h-5 inline-block" />
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
          className=" p-1 w-1/2 my-2 text-gray-700  border-2 border-gray-200 border-solid focus:outline-none focus:border-blue-400"
        />
        <p className=" text-xs text-gray-500">Never shown to the public.</p>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Export your data
        </label>
        <button className=" mt-2 px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-400
         hover:text-white 
         flex flex-row gap-1 items-center
          disabled cursor-not-allowed
         "
        title="TBA"
         >
          <CloudArrowDownIcon className=" w-5 h-5" />
          Request archive
        </button>
        <p className=" text-xs text-gray-500 mt-2">Never shown to the public.</p>
      </section>
        <section className=" mt-8">
        <button
                className=" px-2 py-1 bg-sky-600 text-white hover:bg-sky-700 disabled cursor-not-allowed"
                title="TBA"
              >
                Save Changes
              </button>
        </section>
    </main>
  );
}
