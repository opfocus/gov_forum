import {
  ComputerDesktopIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PlusIcon,
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/16/solid";

export default function UserSecurity() {
  return (
    <main className=" md:w-1/2">
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Export your data
        </label>
        <button
          className=" mt-2 px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-400
         hover:text-white 
         flex flex-row gap-1 items-center
          disabled cursor-not-allowed
         "
          title="TBA"
        >
          <EnvelopeIcon className=" w-5 h-5" />
          Request archive
        </button>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Password</label>
        <p className=" text-xs text-gray-500 mt-2">
          Passkeys are password replacements that validate your identity
          biometrically (e.g. touch, faceID) or via a device PIN/password.
        </p>
        <button
          className=" mt-2 px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-400
         hover:text-white 
         flex flex-row gap-1 items-center
          disabled cursor-not-allowed
         "
          title="TBA"
        >
          <PlusIcon className=" w-5 h-5" />
          Add Passkey
        </button>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Two-Factor Authentication
        </label>
        <button
          className=" mt-2 px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-400
         hover:text-white 
         flex flex-row gap-1 items-center
          disabled cursor-not-allowed
         "
          title="TBA"
        >
          <LockClosedIcon className=" w-5 h-5" />
          Manage Two-Factor Authentication
        </button>
        <p className=" text-xs text-gray-500 mt-2">
          Never shown to the public.
        </p>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Recently Used Devices
        </label>
        <p className=" text-xs text-gray-500 mt-2">
          This is a list of devices that have recently logged into your account.
        </p>
        <div className=" mt-2 py-2 flex flex-row gap-2 border-t border-solid border-gray-200">
          <ComputerDesktopIcon className=" w-12 h-12 text-gray-400" />
          <div>
            <div>
              <span className=" font-semibold">Windows Computer </span>-
              <span className=" text-gray-700">
                {" "}
                Quarry Bay, Eastern, Hong Kong
              </span>
            </div>
            <div>
              <span className=" text-gray-400">Google Chrome </span>|
              <span className=" text-green-700"> active now</span>
            </div>
          </div>
        </div>
        <div className=" flex flex-row justify-between mt-2">
          <button className="flex flex-row gap-1 items-center text-sky-600 disabled cursor-not-allowed"
          title="TBA">
            <ChevronDownIcon className=" w-4 h-4" />
            <span className=" text-sm">Show all(3)</span>
          </button>
          <button className="flex flex-row gap-1 items-center text-sky-600 disabled cursor-not-allowed"
          title="TBA">
            <ArrowRightStartOnRectangleIcon className="w-4 h-4" />
            <span className=" text-sm">Log out all</span>
          </button>
        </div>
      </section>
    </main>
  );
}
