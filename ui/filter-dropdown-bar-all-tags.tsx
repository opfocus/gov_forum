"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Processing from "./processing";
import clsx from "clsx";
import { mapping } from "@/lib/mapping_for_test";

export default function FilterDropdownBarAllTags() {
  const pramas = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState<string[] | undefined>(undefined);

  // Listen click event
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("tag-dropdown");
      if (!dropdown!.contains(event.target as Node)) setIsOpen(false);
    };

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
    <li id="tag-dropdown">
      <button
        className={clsx(
          "relative flex flex-row items-center justify-between whitespace-nowrap border-solid px-2 py-1 text-sm",
          {
            "border border-sky-600": isOpen,
            "border border-gray-400": !isOpen,
          },
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
        {isOpen ? (
          <ChevronDownIcon className=" ml-1 h-4 w-4" />
        ) : (
          <ChevronRightIcon className=" ml-1 h-4 w-4" />
        )}
      </button>
      {isOpen && (
        <div className=" absolute z-10 border border-solid border-gray-200 bg-white">
          <div className="w-[218px] py-1">
            <div className="flex w-full flex-row border border-solid border-gray-100 px-2 py-1 text-gray-700">
              <input
                type="text"
                className=" grow focus:outline-none"
                placeholder="Search..."
                onChange={(e) => handleChange(e)}
                value={searchValue}
              />
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <div className=" max-h-96 overflow-y-auto ">
              {tags == undefined ? (
                <Processing />
              ) : data === undefined ? (
                <div className={" px-2 py-2 text-sm text-sky-600"}>no tags</div>
              ) : (
                data.map((tagName: any) => (
                  <Link
                    key={tagName}
                    href={`/tag/${herfSolt}/${tagName}/latest`}
                    className={
                      " block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }
                  >
                    <div className=" text-sm text-gray-700">{tagName}</div>
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
