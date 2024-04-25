"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function FiterInput({searchValue, setSearchValue}: {
  searchValue: string,
  setSearchValue:any
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
      <div className=" flex flex-row items-center border border-solid border-gray-100 px-2 py-1 text-gray-600 dark:border-gray-600 dark:text-gray-100">
        <input
          autoFocus
          type="text"
          className=" grow border-none bg-inherit p-0  placeholder:text-gray-400 focus:ring-0"
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
          value={searchValue}
        />
        <MagnifyingGlassIcon className="h-5 w-5" />
      </div>
  );
}
