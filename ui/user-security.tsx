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
        <label className=" text-xl font-bold text-gray-500">Password</label>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          <EnvelopeIcon className=" h-5 w-5" />
          Send Password Reset Email
        </button>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Passkeys</label>
        <p className=" mt-2 text-xs text-gray-500">
          Passkeys are password replacements that validate your identity
          biometrically (e.g. touch, faceID) or via a device PIN/password.
        </p>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          <PlusIcon className=" h-5 w-5" />
          Add Passkey
        </button>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Two-Factor Authentication
        </label>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          <LockClosedIcon className=" h-5 w-5" />
          Manage Two-Factor Authentication
        </button>
        <p className=" mt-2 text-xs text-gray-500">
          Never shown to the public.
        </p>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Recently Used Devices
        </label>
        <p className=" mt-2 text-xs text-gray-500">
          This is a list of devices that have recently logged into your account.
        </p>
        <div className=" mt-2 flex flex-row gap-2 border-t border-solid border-gray-200 py-2">
          <ComputerDesktopIcon className=" h-12 w-12 text-gray-400" />
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
        <div className=" mt-2 flex flex-row justify-between">
          <button
            className="disabled flex cursor-not-allowed flex-row items-center gap-1 text-sky-600"
            title="TBA"
          >
            <ChevronDownIcon className=" h-4 w-4" />
            <span className=" text-sm">Show all(3)</span>
          </button>
          <button
            className="disabled flex cursor-not-allowed flex-row items-center gap-1 text-sky-600"
            title="TBA"
          >
            <ArrowRightStartOnRectangleIcon className="h-4 w-4" />
            <span className=" text-sm">Log out all</span>
          </button>
        </div>
      </section>
    </main>
  );
}
