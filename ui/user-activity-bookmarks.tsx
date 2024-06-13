import { BookmarkIcon } from "@heroicons/react/16/solid";

export default function UserActivityBookmarks({
  bookmarks,
}: {
  bookmarks: any[];
}) {
  if (bookmarks.length === 0)
    return (
      <main>
        <section className=" mt-8">
          <div className=" flex flex-col ">
            <div className=" font-semibold">
              You have not started any topics yet
            </div>
            <p className=" py-4 text-sm">
              Start bookmarking posts with the{" "}
              <BookmarkIcon className=" inline-block h-4 w-4" /> button and they
              will be listed here for easy reference. You can schedule a
              reminder too!
            </p>
          </div>
        </section>
      </main>
    );
  return (
    <div>[TBA]display Bookmarks here, but I don't have demo data here</div>
  );
}
