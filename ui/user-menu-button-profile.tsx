'use client'
import { UserIcon, ViewListIcon, UserAddIcon, PencilIcon,CogIcon, LockOpenIcon, LogoutIcon} from "@heroicons/react/solid"
import LogoutButton from "./logout-button"
import Link from "next/link"

export default function UserMenuButtonProfile () {

  return (
    <ul>
      <li key={1} className=" hover:bg-gray-200 p-2">
        <Link href = {'#'} className="flex flex-row justify-start items-center cursor-not-allowed"
         title="TBA">
          <UserIcon className=" w-5 h-5 text-gray-400 "/>
          <span className=" pl-2 text-base">Summary</span>
        </Link>
      </li>
      <li key={2} className=" hover:bg-gray-200 p-2">
        <Link href = {'#'} className="flex flex-row justify-start items-center cursor-not-allowed"
         title="TBA">
          <ViewListIcon className=" w-5 h-5 text-gray-400   "/>
          <span className=" pl-2 text-base">Active</span>
        </Link>
      </li>
      <li key={3} className=" hover:bg-gray-200 p-2">
        <Link href = {'#'} className="flex flex-row justify-start items-center cursor-not-allowed"
         title="TBA">
          <UserAddIcon className=" w-5 h-5 text-gray-400   "/>
          <span className=" pl-2 text-base">Invites</span>
        </Link>
      </li>
      <li key={4} className=" hover:bg-gray-200 p-2">
        <Link href = {'#'} className="flex flex-row justify-start items-center cursor-not-allowed"
         title="TBA">
          <PencilIcon className=" w-5 h-5 text-gray-400   "/>
          <span className=" pl-2 text-base">Drafts</span>
        </Link>
      </li>
      <li key={5} className=" hover:bg-gray-200 p-2">
        <Link href = {'#'} className="flex flex-row justify-start items-center cursor-not-allowed"
         title="TBA">
          <CogIcon className=" w-5 h-5 text-gray-400   "/>
          <span className=" pl-2 text-base">Perferences</span>
        </Link>
      </li>
      <li key={6} className=" hover:bg-gray-200 p-2">
        <Link href = {'#'} className="flex flex-row justify-start items-center cursor-not-allowed"
         title="TBA">
          <LockOpenIcon className=" w-5 h-5 text-gray-400   "/>
          <span className=" pl-2 text-base">Pause notification</span>
        </Link>
      </li>
      <li key={7} className=" hover:bg-gray-200 p-2">
        <LogoutButton />
      </li>

    </ul>
  )
}