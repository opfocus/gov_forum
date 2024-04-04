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
        <div className=" mt-2 flex flex-row items-center gap-2 text-gray-500">
          <EyeSlashIcon className=" h-4 w-4" />
          <span>Ignored</span>
        </div>
        <p className=" mt-2 text-sm text-gray-700">
          You have no ignored users.
        </p>
        <span className=" mt-2 text-xs text-gray-500">
          Suppress all posts, messages, notifications, personal messages, and
          chat direct messages from these users.
        </span>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
       gap-1 
       bg-gray-200 px-2 py-1 text-gray-700
        hover:bg-gray-400 hover:text-white
       "
          title="TBA"
        >
          <PlusIcon className=" h-5 w-5" />
          Add...
        </button>
      </section>
      <section className=" mt-8">
        <div className=" flex flex-row items-center gap-2 text-gray-500">
          <BellSlashIcon className=" h-4 w-4" />
          <span>Muted</span>
        </div>
        <div
          className="flex flex-row  justify-between border border-solid
     border-gray-200 px-2
      py-1 text-gray-700 focus:border-sky-600
    "
        >
          <input
            type="text"
            name="watched-categories"
            className=" focus:outline-none"
            placeholder="[TBA]"
          />
          <PlusIcon className=" h-5 w-5" />
        </div>
        <span className=" mt-2 text-xs text-gray-500">
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
          <input
            type="checkbox"
            name="messages-from-special-user"
            value={"excerpt"}
          />{" "}
          <span className=" text-sm text-gray-500">
            Only allow specific users to send me personal messages or chat
            direct messages
          </span>
        </div>
      </section>
      <section className=" mt-8">
        <button
          className=" disabled cursor-not-allowed bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
          title="TBA"
        >
          Save Changes
        </button>
      </section>
    </main>
  );
}
