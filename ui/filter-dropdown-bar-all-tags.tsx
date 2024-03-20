"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import type { Tag } from "@/lib/type";
import Processing from "./processing";
import clsx from "clsx";

export default function FilterDropdownBarAllTags() {
  const pramas = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchedTags, setSearchedTags] = useState<[] | undefined>(undefined);
  const [tags, setTags] = useState<Tag[] | undefined>(undefined);


    // Listen click event
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const dropdown = document.getElementById("tag-dropdown");
        if (!dropdown!.contains(event.target as Node)) 
          setIsOpen(false);
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  // fetch data
  useEffect(() => {
    fetch("/api/tags")
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
        setSearchedTags(data);
      });
  }, []);

  // search input handle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // searched
  const data = searchedTags?.filter(
    (item: any) =>
      item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  // selected
  let name: string = "tags";

  if (tags && pramas.name !== undefined) {
    const [item] = tags.filter((tag) => tag.name === pramas.name);
    if (item) name = item.name;
  }

  return (
    <li id="tag-dropdown">
      <button
        className={clsx(
          "relative flex flex-row items-center justify-between px-2 py-1 border-solid  text-sm",
          {
            "border-sky-600 border": isOpen,
            "border-gray-400 border": !isOpen,
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
        {isOpen ? (
          <ChevronDownIcon className=" w-4 h-4 ml-1" />
        ) : (
          <ChevronRightIcon className=" w-4 h-4 ml-1" />
        )}
      </button>
      {isOpen && (
        <div className=" absolute border-gray-200 border border-solid">
          <div className="py-1 w-[218px]">
            <div className="w-full flex flex-row px-2 py-1 text-gray-700 border-gray-100 border-solid border">
              <input
                type="text"
                className=" focus:outline-none grow"
                placeholder="Search..."
                onChange={(e) => handleChange(e)}
                value={searchValue}
              />
              <MagnifyingGlassIcon className="w-5 h-5" />
            </div>
            <div className=" overflow-y-auto h-96 ">
              {data == undefined ? (
                <Processing />
              ) : (
                data.map((item: any) => (
                  <Link
                    key={item.slug}
                    href={`/tag/${item.name}`}
                    className={
                      " bg-white hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-2 py-2 text-sm"
                    }
                  >
                    <div className=" text-sm text-gray-700">{item.name}</div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
