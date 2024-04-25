"use client";

import React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import FiterInput from "./filter-Input";

export default function FilterDropdownContent({
  element,
  searchValue,
  setSearchValue,
  children,
  elementId,
}: {
  element: React.ReactNode;
  searchValue: string;
  setSearchValue: any;
  children: React.ReactNode;
  elementId:string
}) {
  return (
    <details id={elementId} className=" group select-none">
      <summary className=" list-none">
        <div className="relative flex cursor-pointer flex-row items-center justify-between gap-1 border  border-solid border-gray-300 px-2 py-1 text-sm text-gray-600 group-open:border-sky-600 group-open:ring-1 group-open:ring-sky-600 dark:border-gray-400 dark:text-gray-100">
          {element}
          <ChevronDownIcon className=" hidden h-4 w-4 group-open:block" />
          <ChevronRightIcon className=" block h-4 w-4 group-open:hidden" />
        </div>
      </summary>
      <div className=" absolute z-10 mt-2 max-w-xl bg-white shadow dark:bg-gray-700 dark:shadow-gray-800">
        <FiterInput searchValue={searchValue} setSearchValue={setSearchValue} />
        <ul className=" scrollbar max-h-96 overflow-y-auto">{children}</ul>
      </div>
    </details>
  );
}
