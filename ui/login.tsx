import { LockOpenIcon, UserIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Login() {
  return (
    <div className=" mt-8 max-w-4xl flex flex-row gap-8 bg-white">
      <div className=" p-12 overflow-auto">
        <div className=" grid grid-cols-2 items-center">
          <h1 className=" font-semibold whitespace-nowrap">Welcome back</h1>
          <Image
            src={"https://emoji.discourse-cdn.com/twitter/wave/6.png"}
            alt="waving-hand"
            width={35}
            height={35}
            className=" pl-2"
          ></Image>
          <p className=" text-gray-700  whitespace-nowrap">
            Log in to your account
          </p>
        </div>
        <form action="" className=" pt-11 pb-8">
          <div className=" mb-6 flex flex-col">
            <div className=" relative">
              <input
                type="email"
                className="
                  p-3
                  mb-1
                  text-sm
                  leading-none
                  border border-solid
                border-gray-200
                  appearance-none
                  focus:outline-none 
                focus:border-sky-600
                  w-full peer"
                name="email-or-username"
                id="email-or-username"
                placeholder=" "
                autoFocus
              />  
              <label
                htmlFor="email-or-username"
                className=" px-1 absolute  text-base text-gray-400 bg-white
              duration-150 transform  scale-75 -translate-y-3  origin-[0] 
               left-3 top-0
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3
               peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Email/Username
              </label>
            </div>
            <p className=" text-xs text-sky-600">
              Skip the password; email me a login link
            </p>
          </div>
          <div className=" mb-6 flex flex-col">
            <div className=" relative">
              <input
                type="password"
                className=" p-3 mb-1 text-sm leading-none
                border border-solid border-gray-200 
                 appearance-none
                focus:outline-none focus:border-sky-600
                  w-full peer"
                name="password"
                id="password"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className=" px-1 absolute  text-base text-gray-400 bg-white
              duration-150 transform  scale-75 -translate-y-3 origin-[0] 
               left-3 top-0
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3
               peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Password
              </label>
            </div>
            <p className=" text-xs text-sky-600">I forgot my password</p>
          </div>
        </form>
        <div className=" flex flex-row gap-2">
          <button className=" flex flex-row items-center text-white px-2 py-1 bg-sky-600 hover:bg-sky-700">
            <LockOpenIcon className=" w-5 h-5" />
            <span className=" pl-2 whitespace-nowrap">Log in</span>
          </button>
          <button className=" px-2 py-1 text-sky-600 hover:text-sky-700 whitespace-nowrap">
            Create your account
          </button>
        </div>
      </div>
      <div className=" bg-sky-600 p-12 flex justify-center items-center">
        <button className=" px-2 py-1 bg-white flex flex-row items-center  hover:bg-gray-200">
          <UserIcon className=" w-5 h-5" />
          <span className=" text-sm pl-2 whitespace-nowrap">
            Log in with a passkey
          </span>
        </button>
      </div>
    </div>
  );
}
