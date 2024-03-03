import {
  UserIcon,
  ListBulletIcon,
  UserPlusIcon,
  CogIcon,
  SunIcon,
  EnvelopeIcon,
} from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/16/solid";

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
          <ListBulletIcon className=" w-6 h-6   " />
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
          <EnvelopeIcon className=" w-6 h-6   " />
          <span className=" pl-2 text-base">Messages</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center p-4 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center hover:text-orange-400">
          <UserPlusIcon className=" w-6 h-6   " />
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
