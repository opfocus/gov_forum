"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Processing from "./processing";

export default function FilterDropdownBarCategories() {
  const pramas = useParams();
  // const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<any>(undefined);

  // Listen click event
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const dropdown = document.getElementById("categories-dropdown");
  //     if (!dropdown!.contains(event.target as Node)) setIsOpen(false);
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

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
        .indexOf(searchValue.toLowerCase()) !== -1,
  );

  // selected

  const getSelectedCategory = () => {
    // condition: path in "/"
    if (pramas.slug === undefined) return undefined;
    // condition: path in c/... latest topics
    else if (pramas.slug.length <= 4) {
      const item = categories?.find(
        (category: any) => category.slug === pramas.slug[0],
      );
      return item;
    }
    // condition: path in tag/.../tagName latest topics
    else {
      const item = categories?.find(
        (category: any) => category.slug === pramas.slug[1],
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
    herfSuffix = (pramas.slug as string[]).slice(-2).join("/");
  }

  return (
    <details id="categories-dropdown" className=" group select-none">
      <summary className=" list-none">
        <div className="relative flex cursor-pointer flex-row items-center justify-between gap-1 border  border-solid px-2 py-1 text-sm group-open:border-sky-600 group-open:ring-1 group-open:ring-sky-600">
          {getSelectedCategory() === undefined ? (
            "categories"
          ) : (
            <div className="flex flex-row items-center gap-1">
              <div
                className=" h-2 w-2"
                style={{ backgroundColor: `#${getSelectedCategory().color}` }}
              ></div>
              <div className=" text-sm text-slate-700">
                {getSelectedCategory().name}
              </div>
            </div>
          )}
          <ChevronDownIcon className=" hidden h-4 w-4 group-open:block" />
          <ChevronRightIcon className=" block h-4 w-4 group-open:hidden" />
        </div>
      </summary>
      <div className=" absolute z-10 mt-2 max-w-xl bg-white shadow dark:bg-slate-700 dark:shadow-slate-800">
        <div className=" flex flex-row items-center border border-solid border-slate-100 text-slate-600 dark:border-slate-600 dark:text-slate-100">
          <input
            autoFocus
            type="text"
            className=" grow border-none bg-inherit placeholder:text-slate-400 focus:outline-none focus:ring-0"
            placeholder="Search..."
            onChange={(e) => handleChange(e)}
            value={searchValue}
          />
          <MagnifyingGlassIcon className="h-5 w-5" />
        </div>
        <ul className=" scrollbar h-96 overflow-y-auto">
          {data === undefined ? (
            <Processing />
          ) : (
            data.map((item: any) => (
              <li key={item.slug}>
                <Link
                  href={`${herfPrefix}/${item.slug}/${item.id}/${herfSuffix}`}
                  className={
                    "block px-2 py-2 text-gray-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-600"
                  }
                >
                  <div className="flex w-full flex-row items-center gap-1">
                    <div
                      className=" h-2 w-2"
                      style={{ backgroundColor: `#${item.color}` }}
                    ></div>
                    <div className=" text-sm">{item.name}</div>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </details>
  );
}
