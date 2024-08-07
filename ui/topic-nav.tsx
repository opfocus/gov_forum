import {
  LinkIcon,
  FlagIcon,
  ArrowUturnLeftIcon,
  BellIcon,
  BookmarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";

export default function TopicNav() {
  return (
    <div className=" space-y-2">
      <div className=" flex flex-row justify-start gap-2 p-2">
        <button className=" bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-200">
          <LinkIcon />
          <span>Share</span>
        </button>
        <button className=" bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-200">
          <BookmarkIcon />
          <span>Bookmark</span>
        </button>
        <button className=" bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-200">
          <FlagIcon />
          <span>Flag</span>
        </button>
        <button className=" bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-200">
          <ArrowUturnLeftIcon />
          <span>Reply</span>
        </button>
      </div>
      <div>
        <button className=" bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-200">
          <BellIcon />
          <span>Tracking</span>
          <ChevronDownIcon />
        </button>
        <span>
          You will see a count of new replies because you read this topic.
        </span>
      </div>
    </div>
  );
}
