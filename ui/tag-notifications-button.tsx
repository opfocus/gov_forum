import { BellIcon } from "@heroicons/react/solid"

export default function TagNotificationButton() {

  return(
    <button className=" flex items-center px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-white cursor-not-allowed">
    <BellIcon className="w-6 h-6" />
  </button>
  )
}