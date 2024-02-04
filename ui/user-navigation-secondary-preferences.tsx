import Link from "next/link";
import {
  ViewListIcon,
  UserIcon,
  LockClosedIcon,
  BellIcon,
  PlusIcon,
  UsersIcon,
  DesktopComputerIcon
} from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/outline";

export default function UserSecondryNavPreferences() {
  return (
    <ul className=" flex w-full flex-row border-b border-solid border-gray-200">
      <li className=" flex-1 flex place-items-center px-4 py-2 border-b-2 border-solid border-orange-400 ">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <UserIcon className=" w-5 h-5" />
          <span className=" pl-2 ">Account</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <LockClosedIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Security</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <UserIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Profile</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <MailIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Emails</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <BellIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Notifications</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <PlusIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Tracking</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <UsersIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Users</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <DesktopComputerIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Interface</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ViewListIcon className=" w-5 h-5  " />
          <span className=" pl-2 whitespace-nowrap">Nav Set</span>
        </div>
      </li>
    </ul>
  );
}
