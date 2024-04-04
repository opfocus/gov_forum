import { BellIcon, PlusIcon } from "@heroicons/react/16/solid";

export default function UserTracking() {
  return (
    <main>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Topics</label>
        <p className=" mt-2 text-sm text-gray-500">Consider topics new when</p>
        <select
          name="topics-new-when"
          id="topics-new-when"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
     focus:border-sky-600 focus:outline-none
    "
        >
          <option value="I haven't viewed them yet">
            I haven't viewed them yet
          </option>
          <option value="created in the last day">
            created in the last day
          </option>
          <option value="created in the last 2 days">
            created in the last 2 days
          </option>
          <option value="created in the last week">
            created in the last week
          </option>
          <option value="created in the last 2 weeks">
            created in the last 2 weeks
          </option>
          <option value="created since I was here last">
            created since I was here last
          </option>
        </select>
        <p className=" mt-2 text-sm text-gray-500">
          Automatically track topics I enter
        </p>
        <select
          name="track-when-enter"
          id="track-when-enter"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
     focus:border-sky-600 focus:outline-none
    "
        >
          <option value="never">never</option>
          <option value="immediately">immediately</option>
          <option value="after 30 seconds">after 30 seconds</option>

          <option value="after 1 minute">after 1 minute</option>
          <option value="after 2 minute">after 2 minute</option>
          <option value="after 3 minute">after 3 minute</option>
          <option value="after 4 minute">after 4 minute</option>
          <option value="after 5 minute">after 5 minute</option>
          <option value="after 10 minute">after 10 minute</option>
        </select>
        <p className=" mt-2 text-sm text-gray-500">
          When I post in a topic, set that topic to
        </p>
        <select
          name="after-post-track-this-topic"
          id="after-post-track-this-topic"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
     focus:border-sky-600 focus:outline-none
    "
        >
          <option value="Watching">Watching</option>
          <option value="Tracking">Tracking</option>
          <option value="Normal">Normal</option>
        </select>
      </section>
      <div className=" grid grid-cols-2 gap-4">
        <section className=" mt-8 flex flex-col justify-start gap-3">
          <label className=" text-xl font-bold text-gray-500">Categories</label>
          <div className=" flex flex-row items-center gap-1">
            <BellIcon className=" h-4 w-4 text-sky-600" />
            <div className=" mt-2 text-sm text-gray-500">Watched</div>
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
        </section>
        <section className=" mt-8 flex flex-col justify-start gap-3">
          <label className=" text-xl font-bold text-gray-500">Tags</label>
          <div className=" flex flex-row items-center gap-1">
            <BellIcon className=" h-4 w-4 text-sky-600" />
            <div className=" mt-2 text-sm text-gray-500">Watched</div>
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
        </section>
      </div>

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
