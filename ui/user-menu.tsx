"use client";

import {
  BellIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  EnvelopeIcon,
  BookmarkIcon,
  PuzzlePieceIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import QuickPreview from "@/ui/user-tab-quick-preview";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function UserMenu({ avantar }: { avantar: any }) {
  const [isOpen, setIsopen] = useState(false);

  // Listen click event
  useEffect(() => {
    function handleClickOutside(event: any) {
      const userMenu = document.getElementById("user-menu");
      const targetElement = event.target;

      if (userMenu && !userMenu.contains(targetElement)) {
        setIsopen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="user-menu">
      <button
        className=" flex items-center p-2 hover:scale-125"
        onClick={() => setIsopen(!isOpen)}
      >
        <img
          src={avantar}
          alt="user avatars"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>
      {isOpen ? (
        <div className="absolute right-0 z-10 w-full border border-solid border-gray-100 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-700 md:w-80">
          <div>
            <UserMenDropdown setIsOpen={setIsopen} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function UserMenDropdown({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const router = useRouter();
  const [tabActive, setTabActive] = useState(0);
  const [isSelected, setIsSelected] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const userMenuItems: Record<string, string> = {
    0: "/u/chooose/notifications",
    1: "/u/chooose/notifications/responses",
    2: "/u/chooose/notifications/likes-received",
    3: "/u/chooose/messages",
    4: "/u/chooose/activity/bookmarks",
    5: "/",
    6: "/u/chooose/summary"
  };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const id = (event.currentTarget as HTMLElement).id;
    if (tabActive !== Number(id)) {
      setTabActive(Number(id));
      setIsSelected(
        isSelected.map((_, index) => {
          if (index === Number(id)) return true;
          else return false;
        }),
      );
    } else {
      const test = userMenuItems[id]
      router.push(test as __next_route_internal_types__.RouteImpl<string> , {scroll: false});
      setIsOpen(false);
    }
  };

  return (
    <div className=" flex w-full flex-row">
      {/*quick preview*/}
      <div className=" grow border border-solid  border-gray-100 p-2 text-sm dark:border-gray-600">
        <QuickPreview index={tabActive} />
      </div>
      {/* user menu tab */}
      <div className=" flex flex-col pt-2">
        {/* user menu tab part 1 */}
        <div className=" flex flex-col border border-solid border-gray-200 dark:border-gray-600">
          <button
            id="0"
            className={clsx(" p-3", {
              " bg-gray-300 dark:bg-gray-400": isSelected[0],
              " hover:bg-gray-200 dark:hover:bg-gray-400": !isSelected[0],
            })}
            onClick={(event) => handleClick(event)}
          >
            <BellIcon
              className=" h-5 w-5  text-gray-500 dark:text-gray-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="1"
            className={clsx(" p-3", {
              " bg-gray-300 dark:bg-gray-400": isSelected[1],
              " hover:bg-gray-200 dark:hover:bg-gray-400": !isSelected[1],
            })}
            onClick={(event) => handleClick(event)}
          >
            <MagnifyingGlassIcon
              className=" h-5 w-5  text-gray-500 dark:text-gray-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="2"
            role="tab"
            className={clsx(" p-3", {
              " bg-gray-300 dark:bg-gray-400": isSelected[2],
              " hover:bg-gray-200 dark:hover:bg-gray-400": !isSelected[2],
            })}
            onClick={(event) => handleClick(event)}
          >
            <HeartIcon
              className=" h-5 w-5  text-gray-500 dark:text-gray-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="3"
            className={clsx(" p-3", {
              " bg-gray-300 dark:bg-gray-400": isSelected[3],
              " hover:bg-gray-200 dark:hover:bg-gray-400": !isSelected[3],
            })}
            onClick={(event) => handleClick(event)}
          >
            <EnvelopeIcon
              className=" h-5 w-5  text-gray-500 dark:text-gray-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="4"
            className={clsx(" p-3", {
              " bg-gray-300 dark:bg-gray-400": isSelected[4],
              " hover:bg-gray-200 dark:hover:bg-gray-400": !isSelected[4],
            })}
            onClick={(event) => handleClick(event)}
          >
            <BookmarkIcon
              className=" h-5 w-5  text-gray-500 dark:text-gray-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="5"
            className={clsx(" p-3", {
              " bg-gray-300 dark:bg-gray-400": isSelected[5],
              " hover:bg-gray-200 dark:hover:bg-gray-400": !isSelected[5],
            })}
            onClick={(event) => handleClick(event)}
          >
            <PuzzlePieceIcon
              className=" h-5 w-5  text-gray-500 dark:text-gray-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          {/* user menu tab part 2 */}
        </div>
        <div className=" flex flex-col border border-solid border-gray-100 dark:border-gray-600">
          <button
            id="6"
            className={clsx(" p-3", {
              " bg-gray-300 dark:bg-gray-400": isSelected[6],
              " hover:bg-gray-200 dark:hover:bg-gray-400": !isSelected[6],
            })}
            onClick={(event) => handleClick(event)}
          >
            <UserIcon
              className=" h-5 w-5  text-gray-500 dark:text-gray-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}


