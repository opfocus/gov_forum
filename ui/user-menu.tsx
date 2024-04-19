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

function UserMenDropdown({setIsOpen}: {
  setIsOpen: (isOpen:boolean)=>void
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
      router.push("/");
      setIsOpen(false)
    }
  };

  return (
    <div className=" flex w-full flex-row">
      {/*quick preview*/}
      <div className=" grow border border-solid  border-slate-100 p-2 text-sm dark:border-slate-600">
        <QuickPreview index={tabActive} />
      </div>
      {/* user menu tab */}
      <div className=" flex flex-col pt-2">
        {/* user menu tab part 1 */}
        <div className=" flex flex-col border border-solid border-slate-200 dark:border-slate-600">
          <button
            id="0"
            className={clsx(
              "cursor-not-allowed p-3",
              {
                " bg-slate-300 dark:bg-slate-400": isSelected[0],
                " hover:bg-slate-200 dark:hover:bg-slate-400": !isSelected[0]
              },
            )}
            onClick={(event) => handleClick(event)}
            title="TBA"
          >
            <BellIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="1"
            className={clsx(
              "cursor-not-allowed p-3",
              {
                " bg-slate-300 dark:bg-slate-400": isSelected[1],
                " hover:bg-slate-200 dark:hover:bg-slate-400": !isSelected[1]
              },
            )}
            onClick={(event) => handleClick(event)}
            title="TBA"
          >
            <MagnifyingGlassIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="2"
            role="tab"
            className={clsx(
              "cursor-not-allowed p-3",
              {
                " bg-slate-300 dark:bg-slate-400": isSelected[2],
                " hover:bg-slate-200 dark:hover:bg-slate-400": !isSelected[2]
              },
            )}
            onClick={(event) => handleClick(event)}
            title="TBA"
          >
            <HeartIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="3"
            className={clsx(
              "cursor-not-allowed p-3",
              {
                " bg-slate-300 dark:bg-slate-400": isSelected[3],
                " hover:bg-slate-200 dark:hover:bg-slate-400": !isSelected[3]
              },
            )}
            onClick={(event) => handleClick(event)}
            title="TBA"
          >
            <EnvelopeIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="4"
            className={clsx(
              "cursor-not-allowed p-3",
              {
                " bg-slate-300 dark:bg-slate-400": isSelected[4],
                " hover:bg-slate-200 dark:hover:bg-slate-400": !isSelected[4]
              },
            )}
            onClick={(event) => handleClick(event)}
            title="TBA"
          >
            <BookmarkIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button
            id="5"
            className={clsx(
              "cursor-not-allowed p-3",
              {
                " bg-slate-300 dark:bg-slate-400": isSelected[5],
                " hover:bg-slate-200 dark:hover:bg-slate-400": !isSelected[5]
              },
            )}
            onClick={(event) => handleClick(event)}
            title="TBA"
          >
            <PuzzlePieceIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          {/* user menu tab part 2 */}
        </div>
        <div className=" flex flex-col border border-solid border-slate-100 dark:border-slate-600">
          <button
            id="6"
            className={clsx(
              "cursor-not-allowed p-3",
              {
                " bg-slate-300 dark:bg-slate-400": isSelected[6],
                " hover:bg-slate-200 dark:hover:bg-slate-400": !isSelected[6]
              },
            )}
            onClick={(event) => handleClick(event)}
          >
            <UserIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UserMenu({ avantar }: { avantar: any }) {
  const [isOpen, setIsopen] = useState(false)

    // Listen click event
    useEffect(() => {
      function handleClickOutside(event: any) {
        const userMenu = document.getElementById("user-menu");
        const targetElement = event.target;
  
        if (userMenu && !userMenu.contains(targetElement)) {
          setIsopen(false)
        }
      }
  
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

  return (
    <div id="user-menu">
      <button className=" flex items-center p-2 hover:scale-125"
        onClick={()=>setIsopen(!isOpen)}
      >
        <img
          src={avantar}
          alt="user avatars"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>
      {isOpen?
      <div className="absolute right-0 z-10 w-full border border-solid border-gray-100 bg-white shadow-lg dark:border-slate-600 dark:bg-slate-700 md:w-80">
        <div>
          <UserMenDropdown setIsOpen={setIsopen}/>
        </div>
      </div>
      :
      null
      }
    </div>
  );
}
