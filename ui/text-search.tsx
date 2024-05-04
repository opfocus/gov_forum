"use client";
import { Fragment, useState } from "react";
import { useFormState } from "react-dom";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { searchPosts } from "@/utils/actions";
import type { Post } from "@/lib/type";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function TextSearch({
  style,
}: {
  style: {
    button: string;
    icon: string;
  };
}) {
  return (
    <Menu as="div" className="inline-block ">
      <Menu.Button className={style.button}>
        <MagnifyingGlassIcon className={style.icon} />
      </Menu.Button>
      <TextSearchDropdown />
    </Menu>
  );
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

//
let initialState = "";

function TextSearchDropdown() {
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
      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right bg-white p-4 shadow-lg dark:bg-gray-700 md:w-96">
        <form action={formAction}>
          <div className=" flex w-full flex-row items-center border border-solid border-gray-200 px-1 text-gray-400 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
            <input
              type="text"
              className=" grow border-none focus:outline-none focus:ring-0 dark:bg-gray-700 dark:placeholder:text-gray-300"
              placeholder="Search..."
              onChange={(e) => handleChange(e)}
              value={searchValue}
              name="keyworlds"
            />
            <Link href={"/search"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="rgb(2 132 199)"  fill="rgb(2 132 199)"
                className="h-5 w-5"
              >
                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              </svg>
            </Link>
          </div>
          {searchValue && (
            <button
              type="submit"
              className=" flex flex-row items-center gap-1 px-2 py-1 hover:bg-yellow-100 hover:dark:bg-yellow-600"
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
                      active ? "bg-gray-100 dark:bg-gray-600 " : "",
                      "block p-2 text-sm",
                    )}
                  >
                    <div
                      className=" text-sm"
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
