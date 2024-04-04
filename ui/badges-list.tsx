import { CakeIcon, StarIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

// only for test
export default function BadgesList({
  userBadges,
  badges,
}: {
  userBadges: any[];
  badges: any[];
}) {
  return (
    <main>
      <section className=" mt-8">
        <p className=" my-4">
          {userBadges.filter((item) => item.is_favorite === true).length}/2
          badges marked as favorite
        </p>
        <div className=" grid grid-cols-2 gap-4 lg:grid-cols-3">
          {userBadges.map((item, index) => (
            <div
              key={index}
              className=" relative flex flex-row gap-4 bg-gray-100 p-6"
            >
              <div>
                <CakeIcon className=" h-14 w-14 text-gray-400" />
              </div>
              <div>
                <div className=" font-semibold">
                  {badges.find((badge) => badge.id === item.badge_id).name}
                </div>
                <div
                  className=" text-sm text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: badges.find((badge) => badge.id === item.badge_id)
                      .description,
                  }}
                ></div>
              </div>
              <div className=" absolute bottom-0 right-0 bg-gray-200 p-2 hover:bg-gray-400">
                <StarIcon
                  className={clsx(" h-4 w-4", {
                    "text-gray-700": item.is_favorite,
                    "text-white": !item.is_favorite,
                  })}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
