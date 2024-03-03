import {
  ArrowUturnLeftIcon,
  ArrowRightIcon,
  ExclamationCircleIcon,
  PlusCircleIcon,
  ArchiveBoxIcon,
  EnvelopeIcon,

} from "@heroicons/react/16/solid";

export default function UserSecondryNavMessages() {
  return (
    <ul className=" flex w-full flex-row border-b border-solid border-gray-200">
      <li className=" flex-1 flex place-items-center px-4 py-2 border-b-2 border-solid border-orange-400 ">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ArrowRightIcon className=" w-5 h-5" />
          <span className=" pl-2 ">Inbox</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <EnvelopeIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Latest</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ArrowUturnLeftIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">sent</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ExclamationCircleIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">New</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <PlusCircleIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Unread</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <ArchiveBoxIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">Archive</span>
        </div>
      </li>
      <li className=" flex-1 flex place-items-center px-4 py-2 hover:border-b-2 hover:border-solid hover:border-orange-400">
        <div className="flex flex-row justify-start items-center text-sm hover:text-orange-400">
          <EnvelopeIcon className=" w-5 h-5  " />
          <span className=" pl-2 ">New</span>
        </div>
      </li>
    </ul>
  );
}
