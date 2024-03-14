import { BellIcon } from "@heroicons/react/16/solid";

export default function UserPreferencesNotifications() {
  return (
    <main className=" w-1/2">
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Notifications
        </label>
        <p className=" text-sm text-gray-500 mt-2">Notify when liked</p>
        <select
          name="notify-liked"
          id="notify-liked"
          className="px-2 py-1 mt-2 block focus:outline-none border border-gray-200 border-solid
       text-gray-700 focus:border-sky-600
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
          className=" mt-2 px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-400
         hover:text-white 
         flex flex-row gap-1 items-center
          disabled cursor-not-allowed
         "
          title="TBA"
        >
          <BellIcon className=" w-5 h-5" />
          Enable Notifications
        </button>
        <p className=" text-xs text-gray-500 mt-1">
          Note: You have to change this setting on every browser you use. All
          notifications will be disabled if you pause notifications from user
          menu, regardless of this setting.
        </p>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Activity Summary</label>
        <div>
          <input type="checkbox" name="email-me-summary" value={"excerpt"} />
            {" "}
            <span className=" text-sm text-gray-500">Enable custom notification schedule</span>
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
