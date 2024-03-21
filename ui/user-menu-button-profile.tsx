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
      <li className=" hover:bg-gray-100 px-2 py-3">
        <Link
          href={"/u/me/summary"}
          className="flex flex-row justify-start items-center"
          title="Test link, not a real one"
        >
          <UserIcon className=" w-4 h-4 text-gray-500 " />
          <span className=" pl-2 text-sm">Summary</span>
        </Link>
      </li>
      <li className=" hover:bg-gray-100 px-2 py-3">
        <Link
          href={"/u/me/activity"}
          className="flex flex-row justify-start items-center"
          title="Test link, not a real one"
        >
          <ListBulletIcon className=" w-4 h-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Active</span>
        </Link>
      </li>
      <li className=" hover:bg-gray-100 px-2 py-3">
        <Link
          href={"/u/me/invites"}
          className="flex flex-row justify-start items-center"
          title="Test link, not a real one"
        >
          <UserPlusIcon className=" w-4 h-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Invites</span>
        </Link>
      </li>
      <li className=" hover:bg-gray-100 px-2 py-3">
        <Link
          href={"/u/me/activity/drafts"}
          className="flex flex-row justify-start items-center"
          title="Test link, not a real one"
        >
          <PencilIcon className=" w-4 h-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Drafts</span>
        </Link>
      </li>
      <li className=" hover:bg-gray-100 px-2 py-3">
        <Link
          href={"/u/me/preferencesd"}
          className="flex flex-row justify-start items-center"
          title="Test link, not a real one"
        >
          <CogIcon className=" w-4 h-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Perferences</span>
        </Link>
      </li>
      <li className=" hover:bg-gray-100 px-2 py-3">
        <Link
          href={"#"}
          className="flex flex-row justify-start items-center cursor-not-allowed disabled"
          title="TBA"
        >
          <LockOpenIcon className=" w-4 h-4 text-gray-500   " />
          <span className=" pl-2 text-sm">Pause notification</span>
        </Link>
      </li>
      <li className=" hover:bg-gray-100 px-2 py-3">
        <Link className=" flex flex-row items-center" href={"/api/auth/logout"}>
          <ArrowRightStartOnRectangleIcon className=" w-4 h-4 text-gray-400   " />
          <span className=" pl-2 text-sm">Log Out</span>
        </Link>
      </li>
    </ul>
  );
}
