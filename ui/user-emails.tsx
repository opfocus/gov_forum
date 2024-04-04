export default function UserEmails() {
  return (
    <main className=" w-1/2">
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Password</label>
        <p className=" mt-2 text-sm text-gray-500">
          Email me when I am sent a personal message
        </p>
        <select
          name="sent-personal"
          id="sent-personal"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
        >
          <option value="always">always</option>
          <option value="only-when-away">only wen away</option>
          <option value="never">never</option>
        </select>

        <p className=" mt-2 text-sm text-gray-500">
          Email me when I am quoted, replied to, my @username is mentioned, or
          when there is new activity in my watched categories, tags or topics
        </p>
        <select
          name="reply-personal"
          id="reply-personal"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
        >
          <option value="always">always</option>
          <option value="only-when-away">only wen away</option>
          <option value="never">never</option>
        </select>
        <p className=" mt-1 text-xs text-gray-500">
          We'll only email you if we haven't seen you in the last 10 minutes.
        </p>

        <p className=" mt-2 text-sm text-gray-500">
          Include previous replies at the bottom of emails
        </p>
        <select
          name="reply-previous"
          id="reply-previous"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
        >
          <option value="always">always</option>
          <option value="only-when-away">only wen away</option>
          <option value="never">never</option>
        </select>
        <input
          type="checkbox"
          name="excerpt"
          value={"excerpt"}
          className=" mt-2"
        />
        <span className=" text-sm text-gray-500">
          {" "}
          Include an excerpt of replied to post in emails
        </span>
        <div className=" mt-2">
          <h3>Policies</h3>
          <p className=" mt-2 text-sm text-gray-500">
            Email me when a policy needs my review
          </p>
          <select
            name="email-me"
            id="email-me"
            className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
          >
            <option value="always">always</option>
            <option value="only-when-away">only wen away</option>
            <option value="never">never</option>
          </select>
        </div>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Activity Summary
        </label>
        <div className=" mt-2  flex flex-row items-start gap-1">
          <input type="checkbox" name="email-me-summary" value={"excerpt"} />
          <div className=" text-sm text-gray-500">
            {" "}
            When I don’t visit here, send me an email summary of popular topics
            and replies
          </div>
        </div>
        <select
          name="email-me"
          id="email-me"
          className="mt-2 block border border-solid border-gray-200 px-2 py-1 text-gray-700
         focus:border-sky-600 focus:outline-none
        "
        >
          <option value="always">always</option>
          <option value="only-when-away">only wen away</option>
          <option value="never">never</option>
        </select>
        <div className=" mt-2  flex flex-row items-start gap-1">
          <input
            type="checkbox"
            name="email-me-summary-new-users"
            value={"excerpt"}
          />
          <div className=" text-sm text-gray-500">
            {" "}
            Include content from new users in summary emails
          </div>
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
