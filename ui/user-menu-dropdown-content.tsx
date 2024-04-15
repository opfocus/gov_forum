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
import { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import QuickPreview from "@/ui/user-tab-quick-preview";

const UserMenDropdownContent = forwardRef((props, ref) => {
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    const tabElements = document.querySelectorAll('[role="tab"]');

    const handleClick = (event: any) => {
      event.preventDefault();

      const selected = (event.currentTarget as HTMLElement).getAttribute(
        "aria-selected",
      );

      if (selected === "false") {
        tabElements.forEach((tabElement, index) => {
          if (tabElement === event.currentTarget) {
            tabElement.setAttribute("aria-selected", "true");

            setTabActive(index);
          } else {
            tabElement.setAttribute("aria-selected", "false");
          }
        });
      } else {
        const href = (event.currentTarget as HTMLElement).getAttribute("href");
        window.location.href = href!;
      }
    };

    tabElements.forEach((tabElement) => {
      tabElement.addEventListener("click", handleClick);
    });

    return () => {
      tabElements.forEach((tabElement) => {
        tabElement.removeEventListener("click", handleClick);
      });
    };
  }, []);

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
          <Link
            role="tab"
            aria-selected="true"
            className="cursor-not-allowed p-3 hover:bg-slate-200 aria-selected:bg-slate-300 hover:dark:bg-slate-500 dark:aria-selected:bg-slate-400 "
            href="/test7/tab1"
            title="TBA"
          >
            <BellIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="cursor-not-allowed p-3 hover:bg-slate-200 aria-selected:bg-slate-300 hover:dark:bg-slate-500 dark:aria-selected:bg-slate-400 "
            href="/test7/#"
            title="TBA"
          >
            <MagnifyingGlassIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </Link>
          <Link
            role="tab"
            className="cursor-not-allowed p-3 hover:bg-slate-200 aria-selected:bg-slate-300 hover:dark:bg-slate-500 dark:aria-selected:bg-slate-400 "
            href="/test7/#"
            title="TBA"
          >
            <HeartIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="cursor-not-allowed p-3 hover:bg-slate-200 aria-selected:bg-slate-300 hover:dark:bg-slate-500 dark:aria-selected:bg-slate-400 "
            href="/test7/#"
            title="TBA"
          >
            <EnvelopeIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="cursor-not-allowed p-3 hover:bg-slate-200 aria-selected:bg-slate-300 hover:dark:bg-slate-500 dark:aria-selected:bg-slate-400 "
            href="/test7/#"
            title="TBA"
          >
            <BookmarkIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="cursor-not-allowed p-3 hover:bg-slate-200 aria-selected:bg-slate-300 hover:dark:bg-slate-500 dark:aria-selected:bg-slate-400 "
            href="/test7/#"
            title="TBA"
          >
            <PuzzlePieceIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </Link>
          {/* user menu tab part 2 */}
        </div>
        <div className=" flex flex-col border border-solid border-slate-100 dark:border-slate-600">
          <Link
            role="tab"
            aria-selected="false"
            className="cursor-not-allowed p-3 hover:bg-slate-200 aria-selected:bg-slate-300 hover:dark:bg-slate-500 dark:aria-selected:bg-slate-400 "
            href="/test7/#"
          >
            <UserIcon
              className=" h-5 w-5  text-slate-500 dark:text-slate-200"
              role="presentation"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
});

export default UserMenDropdownContent;
