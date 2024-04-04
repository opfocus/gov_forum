"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TopicEditorTags({ tagSelected, setTagSelected }: any) {
  const [searchValue, setSearchValue] = useState("");
  const [searchedTags, setSearchedTags] = useState<[] | undefined>(undefined);

  useEffect(() => {
    fetch("/api/tags")
      .then((res) => res.json())
      .then((data) => setSearchedTags(data.top_tags));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const data = searchedTags?.filter(
    (item: any) => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
  );

  const handleClick = (name: string) => {
    if (tagSelected[0] === "") setTagSelected([name]);
    else {
      //   need a new array: news, not a quote
      const news = tagSelected.concat(name);
      setTagSelected(news);
    }
  };

  const chose = tagSelected[0] !== "" ? tagSelected.join(",") : "all tags";

  return (
    <Menu as="div" className="relative inline-block w-full text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-between border border-solid border-gray-400 px-2 py-1 text-sm hover:bg-gray-50">
          {chose}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56  origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <div className="flex w-full flex-row px-2 py-1 text-gray-400">
                <input
                  type="text"
                  className=" grow focus:outline-none"
                  placeholder="Search..."
                  onChange={(e) => handleChange(e)}
                  value={searchValue}
                />
                <MagnifyingGlassIcon className="h-5 w-5" />
              </div>
              <div className=" h-96 overflow-y-auto ">
                {data == undefined ? (
                  <div className="flex flex-row p-2 text-gray-700">
                    <svg
                      className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  data.map((item: any) => (
                    <Menu.Item key={item}>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-2 py-2 text-left text-sm",
                          )}
                          onClick={() => handleClick(item)}
                        >
                          <div className=" text-sm text-gray-700">{item}</div>
                        </button>
                      )}
                    </Menu.Item>
                  ))
                )}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}
