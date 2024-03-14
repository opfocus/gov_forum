"use client";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import type { Tag } from "@/lib/type";

import {
  Square3Stack3DIcon,
  UserIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  CakeIcon,
  InboxStackIcon,
  TagIcon,
} from "@heroicons/react/16/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

// part1 menu items:
const menuItems: {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  path: string;
}[] = [
  {
    name: "Topic",
    icon: Square3Stack3DIcon,
    path: "/latest",
  },
  {
    name: "My Posts",
    icon: UserIcon,
    path: "/",
  },
  {
    name: "Users",
    icon: UserGroupIcon,
    path: "/u",
  },
  {
    name: "About",
    icon: InformationCircleIcon,
    path: "/about",
  },
  {
    name: "FAQ",
    icon: QuestionMarkCircleIcon,
    path: "/faq",
  },
  {
    name: "Groups",
    icon: UserGroupIcon,
    path: "/q",
  },
  {
    name: "Badges",
    icon: CheckBadgeIcon,
    path: "/badges",
  },
  {
    name: "Anniversaries",
    icon: CakeIcon,
    path: "/",
  },
  {
    name: "Birthdays",
    icon: CakeIcon,
    path: "/",
  },
];

export default function MenuPanel() {
  const [categories, setCategories] = useState<any[]>();
  const [tags, setTags] = useState<Tag[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resC = await fetch("/api/categories");
        const CData = await resC.json();
        const resT = await fetch('/api/tags')
        const tData = await resT.json();

        setTags(tData)
        setCategories(CData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-80  origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1 px-2">
          <div className=" overflow-y-auto h-96 space-y-6">
            <ul className=" grid grid-cols-2 gap-1 mt-2">
              {menuItems.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      href={item.path}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-500",
                        `block px-2 py-1 text-sm ${(item.path === '/') && "cursor-not-allowed"}`
                      )}
                      title={(item.path === '/')? "TBA" : ''}
                    >
                      <div className=" flex flex-row gap-2 items-center">
                        <item.icon className=" w-4- h-4" />
                        <div>{item.name}</div>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </ul>
            <details>
              <summary className=" text-gray-500 px-2 py-1 border-b border-solid border-gray-200">
                Categorries
              </summary>
              <ul className=" grid grid-cols-2 gap-1 mt-2">
                {categories?.map((category: any) => (
                  <Menu.Item key={category.id}>
                    {({ active }) => (
                      <Link
                        href={`/c/${category.slug}/${category.id}`}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-500",
                          "block px-2 py-1 text-sm"
                        )}
                      >
                        <div className=" flex flex-row items-center">
                          <div>
                            <div
                              className=" inline-block"
                              style={{
                                background: `#${category.color}`,
                                width: "12px",
                                height: "12px",
                              }}
                            ></div>
                          </div>
                          <span className=" pl-1 inline-block truncate">
                            {category.name}
                          </span>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </ul>
            </details>
            <details>
              <summary className=" text-gray-500 px-2 py-1 border-b border-solid border-gray-200">
                Tags
              </summary>
              <ul className=" grid grid-cols-2 gap-1 mt-2">
                {tags?.map((tag: any) => (
                  <Menu.Item key={tag.index}>
                    {({ active }) => (
                      <Link
                        href={`/tag/${tag.name}`}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-500",
                          "block px-2 py-1 text-sm"
                        )}
                      >
                        <div className=" flex flex-row items-center">
                          <TagIcon className=" w-4 h-4" />
                          <span>
                            {tag.name}
                          </span>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </ul>
            </details>
            <details>
              <summary className=" text-gray-500 px-2 py-1 border-b border-solid border-gray-200">
                Messages
              </summary>
              <ul className=" grid grid-cols-2 gap-1 mt-2">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-500",
                          "block px-2 py-1 text-sm cursor-not-allowed"
                        )}
                        title="TBA"
                      >
                        <div className=" flex flex-row items-center">
                          <InboxStackIcon className="w-4 h-4" />
                          <span>
                            Inbox
                          </span>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>

              </ul>
            </details>
          </div>
        </div>
      </Menu.Items>
    </Transition>
  );
}
