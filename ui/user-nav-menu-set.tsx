

export default function UserNavMenuSet() {
  return (
    <main className=" md:w-1/2">
    <section className=" mt-8">
    <label className=" text-xl font-bold text-gray-500">Navigation</label>
    <p className=" text-sm text-gray-500">
    When a topic list in the navigation menu has new or unread items…
    </p>
    <div>
    <input
              type="checkbox"
              name="link-filte"
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Link to the filtered list
            </span>
    </div>
    <div>
    <input
              type="checkbox"
              name="show-new-item-count"
              value={"excerpt"}
              className=" inline-block"
            />
            <span className=" text-sm text-gray-500">
              {" "}
              Show a count of the new items
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
  )
}