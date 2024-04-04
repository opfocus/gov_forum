export default function UserInterface() {
  return (
    <main className=" md:w-1/2">
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Email</label>
        <div className=" mt-2 flex flex-row gap-4">
          <div>
            <span className="text-sm text-gray-500">Regular</span>
            <select
              name="theme"
              id="theme"
              className="block border border-solid border-gray-200 px-2 py-1 text-sm text-gray-700
         focus:border-sky-600 focus:outline-none
        "
            >
              <option value="Theme default">Theme default</option>
            </select>
          </div>
          <div>
            <span className="text-sm text-gray-500">Dark mode</span>
            <select
              name="dark-mode"
              id="dark-mode"
              className="block border border-solid border-gray-200 px-2 py-1 text-sm text-gray-700
         focus:border-sky-600 focus:outline-none
        "
            >
              <option value="Same as regular">Same as regular</option>
            </select>
          </div>
        </div>

        <p className=" text-xs text-gray-500">
          Email me when I am sent a personal message
        </p>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Text Size</label>
        <select
          name="text-size"
          id="text-size"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
        >
          <option value="Normal">Normal</option>
        </select>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Other</label>
        <ul>
          <li className=" mt-2">
            <input
              type="checkbox"
              name="open-all"
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Include content from new users in summary emails
            </span>
          </li>
          <li className=" mt-2">
            <input
              type="checkbox"
              name="enable-quote"
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Enable quote reply for highlighted text
            </span>
          </li>
          <li className=" mt-2">
            <input
              type="checkbox"
              name="enable-defer"
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Enable defer to mark topics unread
            </span>
          </li>
          <li className=" mt-2">
            <input
              type="checkbox"
              name="automatically-unpin"
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Automatically unpin topics when I reach the bottom.
            </span>
          </li>
          <li className=" mt-2">
            <input
              type="checkbox"
              name="hide-profile"
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Hide my public profile and presence features
            </span>
          </li>
          <li className=" mt-2">
            <input
              type="checkbox"
              name="show-counts "
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Show counts on browser icon
            </span>
          </li>
        </ul>
        <p className=" mt-2 text-sm text-gray-500">
          Background page title displays count of:
        </p>
        <select
          name="count-of"
          id="count-of"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
        >
          <option value="New notifications">New notifications</option>
        </select>
        <p className=" mt-2 text-sm text-gray-500">
          After a bookmark reminder notification is sent:
        </p>
        <select
          name="after-bookmark"
          id="after-bookmark"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
        >
          <option value="Keep bookmark and clear reminder">
            Keep bookmark and clear reminder
          </option>
        </select>
        <div className=" mt-2">
          <input
            type="checkbox"
            name="skip-new"
            value={"excerpt"}
            className=" inline-block"
          />
          <span className=" text-sm text-gray-500">
            {" "}
            Skip new user onboarding tips and badges
          </span>
        </div>
        <button
          className=" disabled mt-2 cursor-not-allowed bg-gray-200 px-2 py-1
       text-gray-700 
        hover:bg-gray-400 hover:text-white
       "
          title="TBA"
        >
          Show user tips again
        </button>
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
