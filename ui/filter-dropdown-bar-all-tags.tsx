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
    else if (pramas.slug.length === 2) {
      categoryLocationId = Number(pramas.slug[1]);
      mappingTags = mapping.category_tags_mapping.find(
        (item) => item.category_id === categoryLocationId
      )?.tags;
      return mappingTags;
    }
    // condition: path in sub-category latest topics
    else {
      subCategoryLocationId = Number(pramas.slug[2]);
      mappingTags = mapping.category_tags_mapping.find(
        (item) => item.category_id === categoryLocationId
      )?.tags;
      return mappingTags;
    }
  };

  console.log(getMappingTags())

  // searched
  const data = getMappingTags()?.filter(
    (item: any) => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  // selected
  let name: string = "tags";
  let length = pramas.slug?.length;

  if (tags && pramas.slug !== undefined) {
    const item = tags.find((tag) => tag === pramas.slug[length - 1]);
    if (item) name = item;
  }

      // href
      let herfSolt = ''
      // condition: path in "/c"
      if ( 2 <= length && length <= 3 )
        herfSolt = `c/${(pramas.slug as string[]).join("/")}`
      else if (4 <= length && length <= 5 ) {
        herfSolt = `${(pramas.slug.slice(0,length-1) as string[]).join("/")}`
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
        <div className=" bg-white absolute border-gray-200 border border-solid">
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
            <div className=" overflow-y-auto max-h-96 ">
              {tags == undefined ? 
                <Processing />
               : data === undefined ? (
                <div className={" text-sky-600 px-2 py-2 text-sm"}>no tags</div>
              ) : 
                data.map((tagName: any) => (
                  <Link
                    key={tagName}
                    href={`/tag/${herfSolt}/${tagName}`}
                    className={
                      " hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-2 py-2 text-sm"
                    }
                  >
                    <div className=" text-sm text-gray-700">{tagName}</div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
