import { HeartIcon, UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function UserSummary({ data }: any) {
  return (
    <main>
      <section className=" flex flex-col gap-3 justify-between mt-8">
        <div className=" text-lg font-semibold text-gray-700">STATS</div>
        <ul className=" flex flex-row flex-wrap gap-4">
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.days_visited}</div>
            <div className=" text-sm text-gray-400">days visited</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.time_read}</div>
            <div className=" text-sm text-gray-400">read time</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.recent_time_read}</div>
            <div className=" text-sm text-gray-400">recent read time</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.topics_entered}</div>
            <div className=" text-sm text-gray-400">topic viewed</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.posts_read_count}</div>
            <div className=" text-sm text-gray-400">posts read</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.likes_given}</div>
            <div className=" text-sm flex flex-row items-center self-center">
              <HeartIcon className=" w-5 h-5 text-red-400" />
              <span className=" text-gray-400">given</span>
            </div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.likes_received}</div>
            <div className=" text-sm flex flex-row items-center self-center">
              <HeartIcon className=" w-5 h-5 text-red-400" />
              <span className=" text-gray-400"> received</span>
            </div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.topic_count}</div>
            <div className=" text-sm text-gray-400">topic created</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.post_count}</div>
            <div className=" text-sm text-gray-400">posts created</div>
          </li>
        </ul>
        <div>sshshsh</div>
        <div>heheh</div>
      </section>
      <div className=" grid grid-cols-2 gap-4">
        <section className=" flex flex-col gap-3 justify-start mt-8">
          <div className=" text-lg font-semibold text-gray-700">
            TOP REPLIES
          </div>
          <ul className=" space-y-4">
            {data.replies.map((item: any) => (
              <li
                key={item.post_number}
                className=" border-l border-gray-400 border-solid px-2 py-2 flex flex-col gap-1"
              >
                <div className=" flex flex-row gap-2 text-gray-400 text-sm">
                  {new Date(item.created_at).toLocaleString("default", {
                    month: "short",
                  })}{" "}
                  {""} {new Date(item.created_at).getFullYear()}
                  <div className=" flex flex-row items-center">
                    <HeartIcon className=" w-5 h-5 text-red-400" />
                    <span>{item.like_count}</span>
                  </div>
                  {/* only test ui here */}
                </div>
                <Link href={String(item.topic_id)}>{item.topic_id}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className=" flex flex-col gap-3 justify-start mt-8">
          <div className=" text-lg font-semibold text-gray-700">TOP TOPICS</div>
          {data.topic_ids.length === 0 ? (
            <div className=" text-gary-700">No topics yet.</div>
          ) : (
            <ul className=" space-y-4">
              {data.topic_ids.map((item: any) => (
                // test UI here
                <li>.....</li>
              ))}
            </ul>
          )}
        </section>
        <section className=" flex flex-col gap-3 justify-start mt-8">
          <div className=" text-lg font-semibold text-gray-700">TOP LINKS</div>
          {data.links.length === 0 ? (
            <div className=" text-gray-700">No links yet.</div>
          ) : (
            <ul className=" space-y-4">
              {data.links.map((item: any) => (
                // test UI here
                <li>.....</li>
              ))}
            </ul>
          )}
        </section>
        <section className=" flex flex-col gap-3 justify-start mt-8">
          <div className=" text-lg font-semibold text-gray-700">
            MOST REPLIED TO
          </div>
          {data.most_replied_to_users.length === 0 ? (
            <div className=" text-gray-700">No replies yet.</div>
          ) : (
            <ul className=" space-y-4">
              {data.most_replied_to_users.map((item: any) => (
                // test UI here
                <li>.....</li>
              ))}
            </ul>
          )}
        </section>
        <section className=" flex flex-col gap-3 justify-start mt-8">
          <div className=" text-lg font-semibold text-gray-700">
            MOST LIKED BY
          </div>
          {data.most_liked_by_users.length === 0 ? (
            <div className=" text-gray-700">No replies yet.</div>
          ) : (
            <ul className=" space-y-4">
              {data.most_liked_by_users.map((item: any) => (
                <li
                  key={item.id}
                  className=" pl-4 border-l border-solid border-gray-200 flex flex-row gap-2"
                >
                  <div className=" flex flex-row">
                    <img
                      src={item.avatar_template}
                      alt="user avatar"
                      className=" w-12 h-12"
                    />
                    <div className=" pl-4 flex flex-col">
                      <div className=" text-sm font-semibold">
                        {item.username}
                      </div>
                      <div className=" text-sm text-gray-700">{item.name}</div>
                      <div className=" flex flex-row gap-1 items-center text-sm">
                        <HeartIcon className=" w-5 h-5 text-red-400" />
                        {item.count}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className=" flex flex-col gap-3 justify-start mt-8">
          <div className=" text-lg font-semibold text-gray-700">MOST LIKED</div>
          {data.most_liked_users.length === 0 ? (
            <div className=" text-gray-700">No replies yet.</div>
          ) : (
            <ul className=" space-y-4">
              {data.most_liked_users.map((item: any) => (
                // test UI here
                <li
                  key={item.id}
                  className=" pl-4 border-l border-solid border-gray-200 flex flex-row gap-2"
                >
                  <div className=" flex flex-row">
                    <img
                      src={item.avatar_template}
                      alt="user avatar"
                      className=" w-12 h-12"
                    />
                    <div className=" pl-4 flex flex-col">
                      <div className=" text-sm font-semibold">
                        {item.username}
                      </div>
                      <div className=" text-sm text-gray-700">{item.name}</div>
                      <div className=" flex flex-row gap-1 items-center text-sm">
                        <HeartIcon className=" w-5 h-5 text-red-400" />
                        {item.count}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className=" flex flex-col gap-3 justify-start mt-8">
          <div className=" text-lg font-semibold text-gray-700">
            TOP CATEGORIES
          </div>
          {data.top_categories.length === 0 ? (
            <div className=" text-gray-700">No replies yet.</div>
          ) : (
            <table className=" w-full">
              <thead className=" text-sm text-gray-400 border-b-2  border-gray-400">
                <th className=" font-medium py-4"></th>
                <th className=" font-medium py-4">Topics</th>
                <th className=" font-medium py-4">Replies</th>
              </thead>
              <tbody>
                {data.top_categories.map((item: any) => (
                  <tr key={item.post_number}>
                    <td className=" py-2">
                      <div className=" flex flex-row gap-2 items-center">
                        <div
                          className=" w-3 h-3"
                          style={{
                            backgroundColor: `#${item.color}`,
                          }}
                        ></div>
                        <div className="text-sm text-gray-700 font-light">{item.name}</div>
                      </div>
                    </td>
                    <td className=" text-center py-2">-</td>
                    <td className=" text-center py-2 text-cyan-400">{item.post_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
        <section className=" flex flex-col gap-3 justify-start mt-8"></section>

        <section className=" flex flex-col gap-3 justify-start mt-8 col-span-2">
          <div className=" text-lg font-semibold text-gray-700">TOP BADGES</div>
          {
          (data.badges).length === 0 ? 
            <div className=" text-gray-700">No badges yet.</div>
          : (
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.badges.map((item: any) => (
                <div key={item.id} className=" p-6 flex flex-row bg-gray-100">
                  <UserIcon  className=" text-orange-400 w-14 h-14"/>
                  <div className=" pl-4 flex flex-col gap-1">
                    <div className=" text-lg font-semibold">
                      {item.id}
                    </div>
                    <div className=" text-sm">
                      hello
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
