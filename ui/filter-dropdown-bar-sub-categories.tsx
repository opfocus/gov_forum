"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Processing from "./processing";
import clsx from "clsx";
import { subCategories } from "@/lib/sub-categories";

export default function FilterDropdownBarSubCategories() {
  const pramas = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<any[] | undefined>(undefined);

  // Listen click event
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("subcategories-dropdown");
      if (dropdown !== null) {
        if (!dropdown.contains(event.target as Node)) setIsOpen(false);
      }
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

  // selected
  const getSelectedSubCategoryName = () => {
    let subCategoryLocation;

    if (pramas.slug !== undefined)
      if (pramas.slug.length === 3) {
        // condition: path in c/... latest topics
        subCategoryLocation = subCategories.find(
          (sub) => pramas.slug?.[2] === String(sub.id)
        );
        return subCategoryLocation?.name;
      }
      // condition: path in tag/.../tagName latest topics
      else if (pramas.slug.length === 5) {
        subCategoryLocation = subCategories.find(
          (sub) => pramas.slug?.[3] === String(sub.id)
        );
        return subCategoryLocation?.name;
      } else return "subcategories";
  };

  // sub-categories options
  const getSubCategoriesOptions = () => {
    let categorySelected:any
    let subCatogoriesOptions;

    if (pramas.slug !== undefined) {
      // condition: path in c/... latest topics
      if (pramas.slug.length <= 3) {
        categorySelected = categories?.find(
          (category: any) => pramas.slug?.[0] === category.slug
        );
        subCatogoriesOptions = subCategories.filter((sub) =>
        categorySelected?.subcategory_ids.includes(sub.id)
        );
        return subCatogoriesOptions
      }
    // condition: path in tag/.../tagName latest topics
      else if (pramas.slug.length === 5 || pramas.slug.length === 4 ) {
        categorySelected = categories?.find(
          (category: any) => pramas.slug?.[1] === category.slug
        );
        subCatogoriesOptions = subCategories.filter((sub) =>
        categorySelected?.subcategory_ids.includes(sub.id)
        );
        return subCatogoriesOptions
      }
      else 
        return undefined
    }
    else return undefined
  };

  // search input handle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  //searched
  const data = getSubCategoriesOptions()?.filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1
  );
  console.log(getSubCategoriesOptions()?.length)

  // href
  let herfPrefix:string = ''
  let herfSuffix: string = ''
  let length = pramas.slug?.length
  // condition: path in "/"
  if ( 2 <= length && length <= 3 )
    herfPrefix = `/c/${pramas.slug[0]}`
  else if (4 <= length && length <= 5 ) {
    herfPrefix = `/tag/c/${pramas.slug[1]}`
    herfSuffix = pramas.slug[length-1]
  }
  
  if ((getSubCategoriesOptions() !== undefined ) && getSubCategoriesOptions()!.length !== 0)
    return (
      <li id="subcategories-dropdown">
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
         {getSelectedSubCategoryName()}
          {isOpen ? (
            <ChevronDownIcon className=" w-4 h-4 ml-1" />
          ) : (
            <ChevronRightIcon className=" w-4 h-4 ml-1" />
          )}
        </button>
        {isOpen && (
          <div className=" absolute border-gray-200 border border-solid bg-white">
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
              <ul className=" overflow-y-auto">
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
  return null;
}
