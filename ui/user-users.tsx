import {
  PlusIcon,
  EyeSlashIcon,
  BellSlashIcon,
} from "@heroicons/react/16/solid";

export default function UserUsers() {
  return (
    <main className=" md:w-1/2">
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Export your data
        </label>
        <div className=" mt-2 flex flex-row gap-2 items-center text-gray-500">
          <EyeSlashIcon className=" w-4 h-4" />
          <span>Ignored</span>
        </div>
        <p className=" text-sm text-gray-700 mt-2">
          You have no ignored users.
        </p>
        <span className=" text-xs text-gray-500 mt-2">
          Suppress all posts, messages, notifications, personal messages, and
          chat direct messages from these users.
        </span>
        <button
          className=" mt-2 px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-400
       hover:text-white 
       flex flex-row gap-1 items-center
        disabled cursor-not-allowed
       "
          title="TBA"
        >
          <PlusIcon className=" w-5 h-5" />
          Add...
        </button>
      </section>
      <section className=" mt-8">
        <div className=" flex flex-row gap-2 items-center text-gray-500">
          <BellSlashIcon className=" w-4 h-4" />
          <span>Muted</span>
        </div>
        <div
          className="px-2 py-1  border border-gray-200 border-solid
     text-gray-700 focus:border-sky-600
      flex flex-row justify-between
    "
        >
          <input
            type="text"
            name="watched-categories"
            className=" focus:outline-none"
            placeholder="[TBA]"
          />
          <PlusIcon className=" w-5 h-5" />
        </div>
        <span className=" text-xs text-gray-500 mt-2">
          Suppress all notifications, personal messages, and chat direct
          messages from these users.
        </span>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Messages</label>
        <div>
          <input type="checkbox" name="messages" value={"excerpt"} />{" "}
          <span className=" text-sm text-gray-500">
            Allow other users to send me personal messages and chat direct
            messages
          </span>
        </div>
        <div>
          <input type="checkbox" name="messages-from-special-user" value={"excerpt"} />{" "}
          <span className=" text-sm text-gray-500">
          Only allow specific users to send me personal messages or chat direct messages
          </span>
        </div>
      </section>
      <section className=" mt-8">
        <button
          className=" px-2 py-1 bg-sky-600 text-white hover:bg-sky-700 disabled cursor-not-allowed"
          title="TBA"
        >
          Save Changes
        </button>
      </section>
    </main>
  );
}
