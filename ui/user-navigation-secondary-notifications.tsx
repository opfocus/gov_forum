import Link from "next/link";
import {
  ClipboardListIcon,
  ViewListIcon,
  ReplyIcon,
  ClockIcon,
  PencilIcon,
  HeartIcon,
  BookmarkIcon,
  CheckIcon,
  TagIcon,
} from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/16/solid";

export default function UserSecondryNavNotifications() {
  return (
    <ul className=" flex w-full flex-row border-b border-solid border-gray-200">
      <li className=" flex-1 flex place-items-center px-4 py-2 border-b-2 border-solid border-orange-400 ">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <BellIcon className=" w-5 h-5" />
          <span className=" pl-2 ">All</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ReplyIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Responses</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <HeartIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Likes</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <TagIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Mentions</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <PencilIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Edit</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <CheckIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Dismiss All</span>
        </div>
      </li>
    </ul>
  );
}
