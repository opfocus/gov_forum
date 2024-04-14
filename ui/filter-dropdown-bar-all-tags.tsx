"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Processing from "./processing";
import { mapping } from "@/lib/mapping_for_test";

export default function FilterDropdownBarAllTags() {
  const pramas = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState<string[] | undefined>(undefined);

  // Listen click event
  useEffect(() => {
    function handleClickOutside(event: any) {
      const details = document.getElementById("tag-dropdown");
      const targetElement = event.target;

      if (details && !details.contains(targetElement)) {
        details!.removeAttribute("open");
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // fetch data
  useEffect(() => {
    fetch("/api/tags")
      .then((res) => res.json())
      .then((data) => {
        setTags(data.top_tags);
      });
  }, []);

  // search input handle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // get mapping tags
  const getMappingTags = () => {
    let mappingTags;
    let categoryLocationId: number;
    let subCategoryLocationId: number;

    // condition: path in "/"
    if (pramas.slug === undefined) return tags;
    // condition: path in tag name
    else if (pramas.slug.length === 1) return tags;
    // condition: path in category latest topics
    else if (pramas.slug.length === 3) {
      categoryLocationId = Number(pramas.slug[1]);
      mappingTags = mapping.category_tags_mapping.find(
        (item) => item.category_id === categoryLocationId,
      )?.tags;
      return mappingTags;
    }
    // condition: path in sub-category latest topics
    else {
      subCategoryLocationId = Number(pramas.slug[2]);
      mappingTags = mapping.category_tags_mapping.find(
        (item) => item.category_id === categoryLocationId,
      )?.tags;
      return mappingTags;
    }
  };

  // console.log(getMappingTags())

  // searched
  const data = getMappingTags()?.filter(
    (item: any) => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
  );

  // selected
  let name: string = "tags";
  let length = pramas.slug?.length;

  if (tags && pramas.slug !== undefined) {
    const item = tags.find((tag) => tag === pramas.slug[length - 2]);
    if (item) name = item;
  }

  // href
  let herfSolt = "";
  // condition: path in "/c/..."
  if (3 <= length && length <= 4)
    herfSolt = `c/${(pramas.slug.slice(0, length - 1) as string[]).join("/")}`;
  else if (4 <= length && length <= 5) {
    herfSolt = `${(pramas.slug.slice(0, length - 1) as string[]).join("/")}`;
  }

  return (
    <details id="tag-dropdown" className=" group select-none">
      <summary className=" list-none">
        <div
          className="relative flex cursor-pointer flex-row items-center justify-between gap-1
          border  border-solid border-slate-300 px-2 py-1 text-sm text-slate-600 
          group-open:border-sky-600 group-open:ring-1 group-open:ring-sky-600 
          dark:border-slate-400 dark:text-slate-100"
        >
          {name}
          <ChevronDownIcon className=" hidden h-4 w-4 group-open:block" />
          <ChevronRightIcon className=" block h-4 w-4 group-open:hidden" />
        </div>
      </summary>
      <div className=" absolute z-10 mt-2 max-w-xs bg-white shadow dark:bg-slate-700 dark:shadow-slate-800">
        <div className=" flex flex-row items-center border border-solid border-slate-100 text-slate-600 dark:border-slate-600 dark:text-slate-100">
          <input
            autoFocus
            type="text"
            className="border-none bg-inherit placeholder:text-slate-400 focus:outline-none focus:ring-0"
            placeholder="Search..."
            onChange={(e) => handleChange(e)}
            value={searchValue}
          />
          <MagnifyingGlassIcon className="h-5 w-5 shrink-0" />
        </div>
        <ul className=" scrollbar max-h-96 overflow-y-auto">
          {tags == undefined ? (
            <Processing />
          ) : data === undefined ? (
            <li className={" px-2 py-2 text-sm text-sky-600"}>no tags</li>
          ) : (
            data.map((tagName: any) => (
              <li key={tagName}>
                <Link
                  href={`/tag/${herfSolt}/${tagName}/latest`}
                  className="block px-2 py-2 text-gray-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-600"
                >
                  <div className=" text-sm">{tagName}</div>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </details>
  );
}
