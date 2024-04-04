"use client";
import {
  UserIcon,
  ListBulletIcon,
  UserPlusIcon,
  PencilIcon,
  CogIcon,
  LockOpenIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";

export default function UserMenuButtonProfile() {
  return (
    <ul>
      <li className=" px-2 py-3 hover:bg-gray-100">
        <Link
          href={"/u/me/summary"}
          className="flex flex-row items-center justify-start"
          title="Test link, not a real one"
        >
          <UserIcon className=" h-4 w-4 text-gray-500 " />
          <span className=" pl-2 text-sm">Summary</span>
        </Link>
      </li>
      <li className=" px-2 py-3 hover:bg-gray-100">
        <Link
          href={"/u/me/activity"}
          className="flex flex-row items-center justify-start"
          title="Test link, not a real one"
        >
          <ListBulletIcon className=" h-4 w-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Active</span>
        </Link>
      </li>
      <li className=" px-2 py-3 hover:bg-gray-100">
        <Link
          href={"/u/me/invites"}
          className="flex flex-row items-center justify-start"
          title="Test link, not a real one"
        >
          <UserPlusIcon className=" h-4 w-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Invites</span>
        </Link>
      </li>
      <li className=" px-2 py-3 hover:bg-gray-100">
        <Link
          href={"/u/me/activity/drafts"}
          className="flex flex-row items-center justify-start"
          title="Test link, not a real one"
        >
          <PencilIcon className=" h-4 w-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Drafts</span>
        </Link>
      </li>
      <li className=" px-2 py-3 hover:bg-gray-100">
        <Link
          href={"/u/me/preferencesd"}
          className="flex flex-row items-center justify-start"
          title="Test link, not a real one"
        >
          <CogIcon className=" h-4 w-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Perferences</span>
        </Link>
      </li>
      <li className=" px-2 py-3 hover:bg-gray-100">
        <Link
          href={"#"}
          className="disabled flex cursor-not-allowed flex-row items-center justify-start"
          title="TBA"
        >
          <LockOpenIcon className=" h-4 w-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Pause notification</span>
        </Link>
      </li>
      <li className=" px-2 py-3 hover:bg-gray-100">
        <Link className=" flex flex-row items-center" href={"/api/auth/logout"}>
          <ArrowRightStartOnRectangleIcon className=" h-4 w-4 text-gray-400   " />
          <span className=" pl-2 text-sm">Log Out</span>
        </Link>
      </li>
    </ul>
  );
}
