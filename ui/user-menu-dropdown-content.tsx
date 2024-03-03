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
import QuickPreview from '@/ui/user-tab-quick-preview'

const UserMenDropdownContent = forwardRef((props, ref) => {
  const [tabActive, setTabActive] = useState(0)

  useEffect(() => {
    const tabElements = document.querySelectorAll('[role="tab"]');

    const handleClick = (event: any) => {
      event.preventDefault();

      const selected = (event.currentTarget as HTMLElement).getAttribute(
        "aria-selected"
      );

      if (selected === 'false') {
        tabElements.forEach((tabElement, index) => {
          if (tabElement === event.currentTarget) {
            tabElement.setAttribute("aria-selected", "true");
            
            setTabActive(index)
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
    <div className=" flex flex-row w-full">
      {/*quick preview*/}
      <div className=" p-3 text-sm grow">
        <QuickPreview index={tabActive} />
      </div>
      {/* user menu tab */}
      <div className=" flex flex-col pt-2">
        {/* user menu tab part 1 */}
        <div className=" flex flex-col border border-solid border-gray-200">
          <Link
            role="tab"
            aria-selected="true"
            className="p-3 hover:bg-gray-100 aria-selected:bg-gray-200 cursor-not-allowed"
            href="/test7/tab1"
            title="TBA"
          >
            <BellIcon
              className=" w-5 h-5  text-gray-400" role='presentation' aria-hidden='true'
            />
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="p-3 hover:bg-gray-100 aria-selected:bg-gray-200 cursor-not-allowed"
            href="/test7/#"
            title="TBA"
          >
            <MagnifyingGlassIcon className=" w-5 h-5  text-gray-400" role='presentation' aria-hidden='true'/>
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="p-3 hover:bg-gray-100 aria-selected:bg-gray-200 cursor-not-allowed"
            href="/test7/#"
            title="TBA"
          >
            <HeartIcon className=" w-5 h-5  text-gray-400" role='presentation' aria-hidden='true'/>
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="p-3 hover:bg-gray-100 aria-selected:bg-gray-200 cursor-not-allowed"
            href="/test7/#"
            title="TBA"
          >
            <EnvelopeIcon className=" w-5 h-5  text-gray-400" role='presentation' aria-hidden='true'/>
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="p-3 hover:bg-gray-100 aria-selected:bg-gray-200 cursor-not-allowed"
            href="/test7/#"
            title="TBA"
          >
            <BookmarkIcon className=" w-5 h-5  text-gray-400" role='presentation' aria-hidden='true'/>
          </Link>
          <Link
            role="tab"
            aria-selected="false"
            className="p-3 hover:bg-gray-100 aria-selected:bg-gray-200 cursor-not-allowed" 
            href="/test7/#"
            title="TBA"
          >
            <PuzzlePieceIcon className=" w-5 h-5  text-gray-400" role='presentation' aria-hidden='true'/>
          </Link>
          {/* user menu tab part 2 */}
        </div>
        <div className=" flex flex-col border border-solid border-gray-200 ">
          <Link
            role="tab"
            aria-selected="false"
            className="p-3 hover:bg-gray-100 aria-selected:bg-gray-200 "
            href="/test7/#"
          >

              <UserIcon className=" w-5 h-5  text-gray-400" role='presentation' aria-hidden='true'/>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default UserMenDropdownContent;
