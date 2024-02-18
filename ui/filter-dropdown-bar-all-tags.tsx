'use client'

import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import type { Tag } from '@/lib/type';
import { useParams } from 'next/navigation';
import Processing from './processing';

import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterDropdownBarAllTags() {
  const pramas = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [searchedTags, setSearchedTags] = useState<[] | undefined>(undefined);
  const [tags, setTags] = useState<Tag[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/tags');
        const tags = await response.json();
        setSearchedTags(tags);
        setTags(tags)
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const data = searchedTags?.filter(
    (item: any) =>
      item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  let name: string = "all tags"
  
    if (tags && pramas.name !== undefined) {
      const [item] = tags.filter((tag) => 
        tag.name === pramas.name
      )
      if (item)
        name = item.name
    };

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-between px-2 py-1 border border-solid border-gray-400 text-sm hover:bg-gray-50"
        >
        {name}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
          <div className="w-full flex flex-row px-2 py-1 text-gray-400">
            <input
              type="text"
              className=" focus:outline-none grow"
              placeholder="Search..."
              onChange={(e) => handleChange(e)}
              value={searchValue}
            />
            <SearchIcon className="w-5 h-5" />
          </div>
          <div className=" overflow-y-auto h-96 ">
            {data == undefined ? 
              <Processing />
            : (
              
              data.map((item: any) => (
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
              ))
            )}
          </div>
        </div>
      </Menu.Items>
    </Transition>
      </div>
    </Menu>
  )
}
