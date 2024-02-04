"use client";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import type { Tag } from "@/lib/type";
import { tags } from "@/lib/tags-demo";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TextSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedtags, setSearchedtags] = useState<Tag[]>(tags);

  // useEffect(() => {
  //   const callback = async () => {
  //     if (Array.isArray(tags)) {
  //       setSearchedtags(tags);
  //     }
  //   };
  //   callback();
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  //test

  const data = searchedtags?.filter(
    (item: Tag) =>
      item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );
  //test print times
  
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
        <div className="py-1 px-2">
          <div className="w-full flex flex-row px-2 py-1 text-gray-400 border-2 border-blue-300 border-solid">
            <input
              type="text"
              className=" focus:outline-none grow"
              placeholder="Search..."
              onChange={(e) => handleChange(e)}
              value={searchValue}
            />
            <Link href={'#'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
            </Link>
          </div>
          <div className=" overflow-y-auto h-96 ">
            {data.map((item) => (
              <Menu.Item key={item.index}>
                {({ active }) => (
                  <Link
                    href={`/tag/${item.name}`}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-2 py-2 text-sm"
                    )}
                  >
                    <div className=" text-sm text-gray-700">{item.name}</div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </div>
      </Menu.Items>
    </Transition>
  );
}
