"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Processing from "./processing";
import clsx from "clsx";

export default function FilterDropdownBarCategories() {
  const pramas = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<any>(undefined);

  // Listen click event
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("categories-dropdown");
      if (!dropdown!.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // fetch data
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // search input handle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  //searched
  const data = categories?.filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1
  );

  // selected

  const getSelectedCategory= () => {
    // condition: path in "/"
    if (pramas.slug === undefined) return undefined;
    // condition: path in c/... latest topics
    else if (pramas.slug.length <= 4) {
      const item = categories?.find(
        (category: any) => category.slug === pramas.slug[0]
      );
      return item;
    }
    // condition: path in tag/.../tagName latest topics
    else {
      const item = categories?.find(
        (category: any) => category.slug === pramas.slug[1]
      );
      return item;
    }
  };

  // href
  let herfPrefix: string = "";
  let herfSuffix: string = "";
  let length = pramas.slug?.length;
  // condition: path in "/"
  if ((3 <= length && length <= 4) || length === undefined) {
    herfPrefix = `/c`;
    herfSuffix = "latest";
  } else if (2 == length || (length <= 6 && length >= 5)) {
    herfPrefix = `/tag/c`;
    herfSuffix = (pramas.slug as string[]).slice(-2,).join('/')
  }

  return (
    <li id="categories-dropdown">
      <button
        className={clsx(
          "relative flex flex-row items-center justify-between px-2 py-1 border-solid  text-sm whitespace-nowrap",
          {
            "border-sky-600 border": isOpen,
            "border-gray-400 border": !isOpen,
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {getSelectedCategory() === undefined ? (
          "categories"
        ) : (
          <div className="flex flex-row gap-1 items-center">
            <div
              className=" w-2 h-2"
              style={{ backgroundColor: `#${getSelectedCategory().color}` }}
            ></div>
            <div className=" text-sm text-gray-700">
              {getSelectedCategory().name}
            </div>
          </div>
        )}
        {isOpen ? (
          <ChevronDownIcon className=" w-4 h-4 ml-1" />
        ) : (
          <ChevronRightIcon className=" w-4 h-4 ml-1" />
        )}
      </button>
      {isOpen && (
        <div className=" z-10 absolute border-gray-200 border border-solid bg-white">
          <div className="py-1 max-w-[598px]">
            <div className=" w-full flex flex-row px-2 py-1 text-gray-700 border-gray-100 border-solid border">
              <input
                type="text"
                className=" focus:outline-none grow"
                placeholder="Search..."
                onChange={(e) => handleChange(e)}
                value={searchValue}
              />
              <MagnifyingGlassIcon className="w-5 h-5" />
            </div>
            <ul className=" overflow-y-auto h-96 ">
              {data === undefined ? (
                <Processing />
              ) : (
                data.map((item: any) => (
                  <li key={item.slug}>
                    <Link
                      href={`${herfPrefix}/${item.slug}/${item.id}/${herfSuffix}`}
                      className={
                        " bg-white hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-2 py-2 text-sm"
                      }
                    >
                      <div className="w-full flex flex-row gap-1 items-center">
                        <div
                          className=" w-2 h-2"
                          style={{ backgroundColor: `#${item.color}` }}
                        ></div>
                        <div className=" text-sm text-gray-700">
                          {item.name}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}
