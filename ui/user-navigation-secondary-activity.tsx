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
} from "@heroicons/react/16/solid";

export default function UserSecondryNavActivity() {
  return (
    <ul className=" flex w-full flex-row border-b border-solid border-gray-200">
      <li className=" flex-1 flex place-items-center px-4 py-2 border-b-2 border-solid border-orange-400 ">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ViewListIcon className=" w-5 h-5" />
          <span className=" pl-2 ">All</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ClipboardListIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Topics</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ReplyIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Notifications</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ClockIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Read</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <PencilIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Drafts</span>
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
          <BookmarkIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Bookmarks</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <CheckIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Solved</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <HeartIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Votes</span>
        </div>
      </li>
    </ul>
  );
}
