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
    function handleClickOutside(event: any) {
      const details = document.getElementById("subcategories-dropdown");
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
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // selected subcategory
  const getSelectedSubCategory = () => {
    let subCategoryLocation;

    if (pramas.slug !== undefined)
      if (pramas.slug.length === 4) {
        // condition: path in c/... latest topics
        subCategoryLocation = subCategories.find(
          (sub) => pramas.slug?.[2] === String(sub.id),
        );
        return subCategoryLocation;
      }
      // condition: path in tag/.../tagName latest topics
      else if (pramas.slug.length === 6) {
        subCategoryLocation = subCategories.find(
          (sub) => pramas.slug?.[3] === String(sub.id),
        );
        return subCategoryLocation;
      } else return undefined;
  };

  // sub-categories options
  const getSubCategoriesOptions = () => {
    let categorySelected: any;
    let subCatogoriesOptions;

    if (pramas.slug !== undefined) {
      // condition: path in c/... latest topics
      if (pramas.slug.length <= 4) {
        categorySelected = categories?.find(
          (category: any) => pramas.slug?.[0] === category.slug,
        );
        subCatogoriesOptions = subCategories.filter((sub) =>
          categorySelected?.subcategory_ids.includes(sub.id),
        );
        return subCatogoriesOptions;
      }
      // condition: path in tag/.../tagName latest topics
      else if (pramas.slug.length === 5 || pramas.slug.length === 6) {
        categorySelected = categories?.find(
          (category: any) => pramas.slug?.[1] === category.slug,
        );
        subCatogoriesOptions = subCategories.filter((sub) =>
          categorySelected?.subcategory_ids.includes(sub.id),
        );
        return subCatogoriesOptions;
      } else return undefined;
    } else return undefined;
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
        .indexOf(searchValue.toLowerCase()) !== -1,
  );
  // console.log(getSubCategoriesOptions()?.length)

  // href
  let herfPrefix: string = "";
  let herfSuffix: string = "";
  let length = pramas.slug?.length;
  // condition: path in "/"
  if (3 <= length && length <= 4) {
    herfPrefix = `/c/${pramas.slug[0]}`;
    herfSuffix = "latest";
  } else if (5 <= length && length <= 6) {
    herfPrefix = `/tag/c/${pramas.slug[1]}`;
    herfSuffix = (pramas.slug as string[]).slice(-2).join("/");
  }

  if (
    getSubCategoriesOptions() !== undefined &&
    getSubCategoriesOptions()!.length !== 0
  )
    return (
      <li>
        <details id="subcategories-dropdown" className=" group select-none">
          <summary className=" list-none">
            <div
              className="relative flex cursor-pointer flex-row items-center justify-between gap-1
          border  border-solid border-black-300 px-2 py-1 text-sm text-gray-600 
          group-open:border-sky-600 group-open:ring-1 group-open:ring-sky-600 
          dark:border-black-400 dark:text-gray-100"
            >
              {getSelectedSubCategory() === undefined ? (
                "subcategories"
              ) : (
                <div className="flex flex-row items-center gap-1">
                  <div
                    className=" h-2 w-2"
                    style={{
                      backgroundColor: `#${getSelectedSubCategory()!.color}`,
                    }}
                  ></div>
                  <div>{getSelectedSubCategory()!.name}</div>
                </div>
              )}
              <ChevronDownIcon className=" hidden h-4 w-4 group-open:block" />
              <ChevronRightIcon className=" block h-4 w-4 group-open:hidden" />
            </div>
          </summary>
          <div className=" absolute z-10 mt-2 max-w-xl bg-white shadow dark:bg-gray-700 dark:shadow-black-800">
            <div className=" flex flex-row items-center border border-solid border-black-100 text-gray-600 dark:border-black-600 dark:text-gray-100">
              <input
                autoFocus
                type="text"
                className=" grow border-none bg-inherit placeholder:text-gray-400 focus:outline-none focus:ring-0"
                placeholder="Search..."
                onChange={(e) => handleChange(e)}
                value={searchValue}
              />
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <ul className=" scrollbar max-h-96 overflow-y-auto">
              {data === undefined ? (
                <Processing />
              ) : (
                data.map((item: any) => (
                  <li key={item.slug}>
                    <Link
                      href={`${herfPrefix}/${item.slug}/${item.id}/${herfSuffix}`}
                      className="block px-2 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                    >
                      <div className="flex w-full flex-row items-center gap-1">
                        <div
                          className=" h-2 w-2"
                          style={{ backgroundColor: `#${item.color}` }}
                        ></div>
                        <div className=" text-sm">
                          {item.name}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </details>
      </li>
    );
  return null;
}
