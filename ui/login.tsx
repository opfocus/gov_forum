"use client";

import { LockOpenIcon, UserIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div
      id="login"
      className=" relative flex h-80 flex-col  gap-8 overflow-y-auto bg-white sm:max-w-xl md:h-auto md:max-w-3xl md:flex-row shadow-md" 
    >
      <div className=" space-y-8 p-12">
        <div className=" flex flex-col">
          <div className=" flex flex-row gap-2">
            <h1 className=" whitespace-nowrap font-semibold text-black">
              [TBA]Welcome back
            </h1>
            <Image
              src={"https://emoji.discourse-cdn.com/twitter/wave/6.png"}
              alt="waving-hand"
              width={35}
              height={35}
              className=" shrink-0"
            ></Image>
          </div>
          <p className=" whitespace-nowrap  text-gray-700">
            Log in to your account
          </p>
        </div>
        <form action="" className=" space-y-6">
          <div className="flex flex-col">
            <div className=" relative">
              <input
                type="email"
                className="
                  peer
                  mb-1
                  w-full
                  appearance-none
                  border border-solid
                border-gray-200
                  p-3
                  text-sm 
                  leading-none
                  text-gray-700 
                  focus:border-sky-600
                  focus:outline-none"
                name="email-or-username"
                id="email-or-username"
                placeholder=" "
                autoFocus
              />
              <label
                htmlFor="email-or-username"
                className=" 
                absolute 
                left-3  
                top-0 
                origin-[0] 
                -translate-y-3
                scale-75 transform  
                bg-white 
                px-1  
                text-base 
              text-gray-400 duration-150
                peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100
                peer-focus:-translate-y-3 peer-focus:scale-75"
              >
                Email/Username
              </label>
            </div>
            <p className=" text-xs text-sky-600">
              Skip the password; email me a login link
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" relative">
              <input
                type="password"
                className=" peer mb-1 w-full appearance-none
                border border-solid border-gray-200 
                 p-3
                text-sm leading-none text-gray-700
                  focus:border-sky-600 focus:outline-none"
                name="password"
                id="password"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className=" absolute left-3  top-0 origin-[0] -translate-y-3
              scale-75 transform  bg-white px-1 text-base 
               text-gray-400 duration-150
               peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100
               peer-focus:-translate-y-3 peer-focus:scale-75"
              >
                Password
              </label>
            </div>
            <p className=" text-xs text-sky-600">I forgot my password</p>
          </div>
        </form>
        <div className=" flex flex-row gap-2">
          <button className=" flex cursor-not-allowed flex-row items-center bg-sky-600 px-2 py-1 text-white hover:bg-sky-700">
            <LockOpenIcon className=" h-5 w-5" />
            <span className=" whitespace-nowrap pl-2">Log in</span>
          </button>
          <button className=" cursor-not-allowed whitespace-nowrap px-2 py-1 text-sky-600 hover:text-sky-700">
            Create your account
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-sky-600 p-12">
        <button className=" flex cursor-not-allowed flex-row items-center bg-white px-2  py-1 text-sm text-gray-700 hover:bg-gray-200">
          <UserIcon className=" h-5 w-5" />
          <span className=" whitespace-nowrap pl-2 ">
            Log in with a passkey
          </span>
        </button>
      </div>
      <button
        onClick={() => router.back()}
        className=" absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700 md:hidden"
      >
        <XMarkIcon className=" h-8 w-8" />
      </button>
    </div>
  );
}
