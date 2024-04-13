"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import UserMenDropdownContent from "./user-menu-dropdown-content";
import { useRef } from "react";
import LoginButton from "./login-button";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function UserMenuDropdown() {
  const ref = useRef(null);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <LoginButton />;
  if (error) return <div>{error.message}</div>;
  if (user)
    return (
      <Menu as="div" className="relative block text-left">
        <div>
          <Menu.Button className=" flex items-center p-2 hover:scale-125 dark:text-white">
            <img
              src={user.picture!}
              alt="user avatars"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 w-80 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="w-full">
              <Menu.Item>
                <UserMenDropdownContent ref={ref} />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  else {
    return <LoginButton />;
  }
}
