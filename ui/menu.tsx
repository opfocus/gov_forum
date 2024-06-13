"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
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
import { Route } from "next";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Menu1({
  style,
}: {
  style: {
    button: string;
    icon: string;
  };
}) {
  return (
    <Menu as="div" className="inline-block ">
      <Menu.Button className={style.button}>
        <Bars3Icon className={style.icon} />
      </Menu.Button>
      <MenuDropdown />
    </Menu>
  );
}

//////////////
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function MenuDropdown() {
  const [categories, setCategories] = useState<any[]>();
  const [tags, setTags] = useState<Tag[] | undefined>(undefined);
  const {user} = useUser()

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
      path: `/u/${user?.name}/activity/drafts`,
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
      path: "/g",
    },
    {
      name: "Badges",
      icon: CheckBadgeIcon,
      path: "/badges",
    },
    {
      name: "Anniversaries",
      icon: CakeIcon,
      path: "/cakeday/anniversaries/today",
    },
    {
      name: "Birthdays",
      icon: CakeIcon,
      path: "/cakeday/birthdays/today",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resC = await fetch("/api/categories");
        const CData = await resC.json();
        const resT = await fetch("/api/tags");
        const tData = await resT.json();

        setTags(tData.tags);
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
      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right  bg-white p-4 shadow-lg dark:bg-gray-700 md:w-96">
        <div className="h-96 space-y-6 overflow-y-scroll px-2 py-1 text-gray-500 dark:text-gray-200">
          <ul className="grid grid-cols-2 gap-1">
            {menuItems.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    href={item.path as Route}
                    className={classNames(
                      active ? "bg-gray-100 dark:bg-gray-600 " : "",
                      `block p-2 text-sm ${item.path === "/" && "cursor-not-allowed"}`,
                    )}
                    title={item.path === "/" ? "TBA" : ""}
                  >
                    <div className=" flex flex-row items-center gap-2">
                      <item.icon className=" w-4- h-4" />
                      <div>{item.name}</div>
                    </div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </ul>
          <details>
            <summary className=" broder-gray-100 border-b border-solid px-2 py-1 dark:border-gray-600">
              Categorries
            </summary>
            <ul className=" mt-2 grid grid-cols-2 gap-1">
              {categories?.map((category: any) => (
                <Menu.Item key={category.id}>
                  {({ active }) => (
                    <Link
                      href={`/c/${category.slug}/${category.id}`}
                      className={classNames(
                        active ? "bg-gray-100 dark:bg-gray-600 " : "",
                        "block p-2 text-sm",
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
                        <span className=" inline-block truncate pl-1">
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
            <summary className=" broder-gray-100 border-b border-solid px-2 py-1 dark:border-gray-600">
              Tags
            </summary>
            <ul className=" mt-2 grid grid-cols-2 gap-1">
              {tags?.map((tag: any) => (
                <Menu.Item key={tag}>
                  {({ active }) => (
                    <Link
                      href={`/tag/${tag}`}
                      className={classNames(
                        active ? "bg-gray-100 dark:bg-gray-600 " : "",
                        "block p-2 text-sm",
                      )}
                    >
                      <div className=" flex flex-row items-center">
                        <TagIcon className=" h-4 w-4" />
                        <span>{tag}</span>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </ul>
          </details>
          <details>
            <summary className=" broder-gray-100 border-b border-solid px-2 py-1 dark:border-gray-600">
              Messages
            </summary>
            <ul className=" mt-2 grid grid-cols-2 gap-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={"/u/chooose/messages"}
                    className={classNames(
                      active ? "bg-gray-100 dark:bg-gray-600 " : "",
                      "block cursor-not-allowed p-2 text-sm",
                    )}
                    title="TBA"
                  >
                    <div className=" flex flex-row items-center">
                      <InboxStackIcon className="h-4 w-4" />
                      <span>Inbox</span>
                    </div>
                  </Link>
                )}
              </Menu.Item>
            </ul>
          </details>
        </div>
      </Menu.Items>
    </Transition>
  );
}
