"use client";
import { Fragment, useState } from "react";
import { useFormState } from "react-dom";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { searchPosts } from "@/utils/actions";
import type { Post } from "@/lib/type";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

let initialState = "";

export default function TextSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [state, formAction] = useFormState(searchPosts, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-96  origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <form action={formAction} className="px-2 py-1">
          <div className="flex w-full flex-row border-2 border-solid border-blue-300 px-2 py-1 text-gray-400">
            <input
              type="text"
              className=" grow focus:outline-none"
              placeholder="Search..."
              onChange={(e) => handleChange(e)}
              value={searchValue}
              name="keyworlds"
            />
            <Link href={"/search"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              </svg>
            </Link>
          </div>
          {searchValue && (
            <button
              type="submit"
              className=" flex flex-row items-center gap-1 px-2 py-1"
            >
              <MagnifyingGlassIcon className=" h-4 w-4" />
              <span>{searchValue}</span>
              <span className=" text-sm text-gray-400">
                in all topics and posts
              </span>
            </button>
          )}
        </form>
        {state && (
          <div className=" h-96 overflow-y-auto ">
            {JSON.parse(state).map((post: Post) => (
              <Menu.Item key={post.id}>
                {({ active }) => (
                  <Link
                    href={`/t/${post.topic_slug}/${post.topic_id}`}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-2 text-sm",
                    )}
                  >
                    <div
                      className=" text-sm text-gray-700"
                      dangerouslySetInnerHTML={{ __html: post.cooked }}
                    ></div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        )}
      </Menu.Items>
    </Transition>
  );
}
