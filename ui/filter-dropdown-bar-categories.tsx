"use client";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Processing from "./processing";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterDropdownBarCategories() {
  const pramas = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [searchedCategories, setSearchedCategories] = useState<[] | undefined>(
    undefined
  );
  const [categories, setCategories] = useState<any>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/categories`);
        const categories = await response.json();

        setCategories(categories);
        setSearchedCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const data = searchedCategories?.filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1
  );

  let name: string = "all calegories";

  if (categories && pramas !== undefined) {
    const [item] = categories.filter(
      (category: any) => category.id === Number(pramas.id)
    );
    if (item) name = item.name;
  }

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-between  px-2 py-1 border border-solid border-gray-400 text-sm hover:bg-gray-50">
          <span>{name}</span>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56  origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:w-96">
            <div className="py-1">
              <div className="w-full flex flex-row px-2 py-1 text-gray-400">
                <input
                  type="text"
                  className=" focus:outline-none grow"
                  placeholder="Search..."
                  onChange={(e) => handleChange(e)}
                  value={searchValue}
                />
                <SearchIcon className="w-5 h-5" />
              </div>
              <div className=" overflow-y-auto h-96 ">
                {data === undefined ? (
                  <Processing />
                ) : (
                  data.map((item: any) => (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <Link
                          href={`/c/${item.slug}/${item.id}`}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-2 py-2 text-sm"
                          )}
                        >
                          <div className="w-full flex flex-col gap-1">
                            <div className=" text-sm text-gray-700">
                              {item.name}
                            </div>
                            <div className=" text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  ))
                )}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}
