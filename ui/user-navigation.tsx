import Link from "next/link";
import {
  UserIcon,
  ViewListIcon,
  UserAddIcon,
  CogIcon,
  SunIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";

export default function UserNav() {
  return (
    <ul className=" flex w-full flex-row border-b border-solid border-gray-200">
      <li className=" flex-1 flex place-items-center p-4 border-b-2 border-solid border-orange-400 ">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <UserIcon className=" w-6 h-6 " />
          <span className=" pl-2 text-base">Summary</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center p-4 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <ViewListIcon className=" w-6 h-6   " />
          <span className=" pl-2 text-base">Active</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center p-4 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <BellIcon className=" w-6 h-6   " />
          <span className=" pl-2 text-base">Notifications</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center p-4 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <MailIcon className=" w-6 h-6   " />
          <span className=" pl-2 text-base">Messages</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center p-4 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <UserAddIcon className=" w-6 h-6   " />
          <span className=" pl-2 text-base">Invites</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center p-4 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <SunIcon className=" w-6 h-6   " />
          <span className=" pl-2 text-base">Badges</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center p-4 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <CogIcon className=" w-6 h-6   " />
          <span className=" pl-2 text-base">Preferences</span>
        </div>
      </li>
    </ul>
  );
}
