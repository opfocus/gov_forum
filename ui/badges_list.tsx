import { CakeIcon, StarIcon } from "@heroicons/react/16/solid";

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
        <p className=" my-4">0/2 badges marked as favorite</p>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4">
          {userBadges.map((item, index) => (
            <div key={index} className=" relative p-6 flex flex-row gap-4 bg-gray-100">
              <div>
              <CakeIcon className=" w-14 h-14 text-gray-400" />
              </div>
              <div>
                <div className=" font-semibold">
                  {badges.find((badge) => badge.id === item.badge_id).name}
                </div>
                <div
                  className=" text-gray-700 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: badges.find((badge) => badge.id === item.badge_id)
                      .description,
                  }}
                >
                </div>
              </div>
              <div className=" absolute bottom-0 right-0 p-2 bg-gray-200">
                <StarIcon className=" w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
