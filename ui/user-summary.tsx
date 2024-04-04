import { HeartIcon, UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function UserSummary({ data }: any) {
  return (
    <main>
      <section className=" mt-8 flex flex-col justify-between gap-3">
        <div className=" text-lg font-semibold text-gray-700">STATS</div>
        <ul className=" flex flex-row flex-wrap gap-4">
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.days_visited}</div>
            <div className=" text-sm text-gray-400">days visited</div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.time_read}</div>
            <div className=" text-sm text-gray-400">read time</div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.recent_time_read}</div>
            <div className=" text-sm text-gray-400">recent read time</div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.topics_entered}</div>
            <div className=" text-sm text-gray-400">topic viewed</div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.posts_read_count}</div>
            <div className=" text-sm text-gray-400">posts read</div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.likes_given}</div>
            <div className=" flex flex-row items-center self-center text-sm">
              <HeartIcon className=" h-5 w-5 text-red-400" />
              <span className=" text-gray-400">given</span>
            </div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.likes_received}</div>
            <div className=" flex flex-row items-center self-center text-sm">
              <HeartIcon className=" h-5 w-5 text-red-400" />
              <span className=" text-gray-400"> received</span>
            </div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.topic_count}</div>
            <div className=" text-sm text-gray-400">topic created</div>
          </li>
          <li className=" flex flex-row items-baseline gap-1">
            <div className=" text-lg font-medium">{data.post_count}</div>
            <div className=" text-sm text-gray-400">posts created</div>
          </li>
        </ul>
        <div>sshshsh</div>
        <div>heheh</div>
      </section>
      <div className=" grid grid-cols-2 gap-4">
        <section className=" mt-8 flex flex-col justify-start gap-3">
          <div className=" text-lg font-semibold text-gray-700">
            TOP REPLIES
          </div>
          <ul className=" space-y-4">
            {data.replies.map((item: any) => (
              <li
                key={item.post_number}
                className=" flex flex-col gap-1 border-l border-solid border-gray-400 px-2 py-2"
              >
                <div className=" flex flex-row gap-2 text-sm text-gray-400">
                  {new Date(item.created_at).toLocaleString("default", {
                    month: "short",
                  })}{" "}
                  {""} {new Date(item.created_at).getFullYear()}
                  <div className=" flex flex-row items-center">
                    <HeartIcon className=" h-5 w-5 text-red-400" />
                    <span>{item.like_count}</span>
                  </div>
                  {/* only test ui here */}
                </div>
                <Link href={String(item.topic_id)}>{item.topic_id}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className=" mt-8 flex flex-col justify-start gap-3">
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
        <section className=" mt-8 flex flex-col justify-start gap-3">
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
        <section className=" mt-8 flex flex-col justify-start gap-3">
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
        <section className=" mt-8 flex flex-col justify-start gap-3">
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
                  className=" flex flex-row gap-2 border-l border-solid border-gray-200 pl-4"
                >
                  <div className=" flex flex-row">
                    <img
                      src={item.avatar_template}
                      alt="user avatar"
                      className=" h-12 w-12 rounded-full"
                    />
                    <div className=" flex flex-col pl-4">
                      <div className=" text-sm font-semibold">
                        {item.username}
                      </div>
                      <div className=" text-sm text-gray-700">{item.name}</div>
                      <div className=" flex flex-row items-center gap-1 text-sm">
                        <HeartIcon className=" h-5 w-5 text-red-400" />
                        {item.count}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className=" mt-8 flex flex-col justify-start gap-3">
          <div className=" text-lg font-semibold text-gray-700">MOST LIKED</div>
          {data.most_liked_users.length === 0 ? (
            <div className=" text-gray-700">No replies yet.</div>
          ) : (
            <ul className=" space-y-4">
              {data.most_liked_users.map((item: any) => (
                // test UI here
                <li
                  key={item.id}
                  className=" flex flex-row gap-2 border-l border-solid border-gray-200 pl-4"
                >
                  <div className=" flex flex-row">
                    <img
                      src={item.avatar_template}
                      alt="user avatar"
                      className=" h-12 w-12 rounded-full"
                    />
                    <div className=" flex flex-col pl-4">
                      <div className=" text-sm font-semibold">
                        {item.username}
                      </div>
                      <div className=" text-sm text-gray-700">{item.name}</div>
                      <div className=" flex flex-row items-center gap-1 text-sm">
                        <HeartIcon className=" h-5 w-5 text-red-400" />
                        {item.count}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className=" mt-8 flex flex-col justify-start gap-3">
          <div className=" text-lg font-semibold text-gray-700">
            TOP CATEGORIES
          </div>
          {data.top_categories.length === 0 ? (
            <div className=" text-gray-700">No replies yet.</div>
          ) : (
            <table className=" w-full">
              <thead className=" border-b-2 border-gray-400 text-sm  text-gray-400">
                <tr>
                  <th className=" py-4 font-medium"></th>
                  <th className=" py-4 font-medium">Topics</th>
                  <th className=" py-4 font-medium">Replies</th>
                </tr>
              </thead>
              <tbody>
                {data.top_categories.map((item: any) => (
                  <tr key={item.post_number}>
                    <td className=" py-2">
                      <div className=" flex flex-row items-center gap-2">
                        <div
                          className=" h-3 w-3"
                          style={{
                            backgroundColor: `#${item.color}`,
                          }}
                        ></div>
                        <div className="text-sm font-light text-gray-700">
                          {item.name}
                        </div>
                      </div>
                    </td>
                    <td className=" py-2 text-center">-</td>
                    <td className=" py-2 text-center text-cyan-700">
                      {item.post_count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
        <section className=" mt-8 flex flex-col justify-start gap-3"></section>

        <section className=" col-span-2 mt-8 flex flex-col justify-start gap-3">
          <div className=" text-lg font-semibold text-gray-700">TOP BADGES</div>
          {data.badges.length === 0 ? (
            <div className=" text-gray-700">No badges yet.</div>
          ) : (
            <div className=" grid grid-cols-2 gap-4 md:grid-cols-3">
              {data.badges.map((item: any) => (
                <div key={item.id} className=" flex flex-row bg-gray-100 p-6">
                  <UserIcon className=" h-14 w-14 text-orange-400" />
                  <div className=" flex flex-col gap-1 pl-4">
                    <div className=" text-lg font-semibold">{item.id}</div>
                    <div className=" text-sm">hello</div>
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
