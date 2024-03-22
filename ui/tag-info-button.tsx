import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function TagInfoButton() {
  return (
    <button className=" px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-white cursor-not-allowed">
      <InformationCircleIcon className="w-5 h-5" />
    </button>
  );
}
