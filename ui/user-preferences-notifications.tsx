import { BellIcon } from "@heroicons/react/16/solid";

export default function UserPreferencesNotifications() {
  return (
    <main className=" w-1/2">
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Notifications
        </label>
        <p className=" mt-2 text-sm text-gray-500">Notify when liked</p>
        <select
          name="notify-liked"
          id="notify-liked"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
       focus:border-sky-600 focus:outline-none
      "
        >
          <option value="Always">Always</option>
          <option value="First time a post is liked and daily">
            First time a post is liked and daily
          </option>
          <option value="First time a post is liked">
            First time a post is liked
          </option>

          <option value="Never">Never</option>
        </select>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Live Notifications
        </label>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          <BellIcon className=" h-5 w-5" />
          Enable Notifications
        </button>
        <p className=" mt-1 text-xs text-gray-500">
          Note: You have to change this setting on every browser you use. All
          notifications will be disabled if you pause notifications from user
          menu, regardless of this setting.
        </p>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Activity Summary
        </label>
        <div>
          <input type="checkbox" name="email-me-summary" value={"excerpt"} />{" "}
          <span className=" text-sm text-gray-500">
            Enable custom notification schedule
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
