"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon} from "@heroicons/react/16/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TopicEditorCategories({categorySelected, setCategorySelected}: any) {
  const [searchValue, setSearchValue] = useState("");
  const [searchedCategories, setSearchedCategories] = useState<[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/categories');
        const categories = await response.json();
        setSearchedCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const data = searchedCategories?.filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1
  );


  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-between  px-2 py-1 border border-solid border-gray-400 text-sm hover:bg-gray-50">
          <span>{categorySelected? categorySelected.name : "all categories"}</span>
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
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56  origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:w-96">
            <div className="py-1">
              <div className="w-full flex flex-row px-2 py-1 text-gray-400">
                <input
                  type="text"
                  className=" focus:outline-none grow"
                  placeholder="Search..."
                  onChange={(e) => handleChange(e)}
                  value={searchValue}
                />
                <MagnifyingGlassIcon className="w-5 h-5" />
              </div>
              <div className=" overflow-y-auto h-52 ">
                {data === undefined ? (
                  <div className="flex flex-row p-2 text-gray-700">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
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
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </div>
                ) : (
                  data.map((item: any) => (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full text-left px-2 py-2 text-sm"
                          )}
                          onClick = {()=> setCategorySelected({id: item.id, name:item.name})}
                        >
                          <div className="w-full flex flex-col gap-1">
                            <div className=" text-sm text-gray-700">
                              {item.name}
                            </div>
                            <div className=" text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
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
