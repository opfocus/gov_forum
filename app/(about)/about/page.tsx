import { UsersIcon } from "@heroicons/react/16/solid";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Page() {
  const session = await getSession();
  const user = session?.user;
  console.log(user);

  return (
    <section className=" space-y-12">
      <h2 className=" text-2xl font-bold">About Optimism Collective</h2>
      <section className=" flex flex-col gap-4">
        <div className=" flex items-center gap-1">
          <UsersIcon className=" h-6 w-6 shrink-0" />
          <span className=" text-lg font-semibold">Our Admin</span>
        </div>
        <div className=" grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className=" flex gap-4">
            <img
              src={user ? user.picture : new Error("no avantar")}
              alt="user avantar"
              className=" h-12 w-12 shrink-0 rounded-full"
            />
            <div className=" flex flex-col gap-1">
              <span className=" font-semibold">{user?.name}</span>
              <span>{user?.nickname}</span>
            </div>
          </div>
          <div className=" flex gap-4">
            <img
              src={user ? user.picture : new Error("no avantar")}
              alt="user avantar"
              className=" h-12 w-12 shrink-0 rounded-full"
            />
            <div className=" flex flex-col gap-1">
              <span className=" font-semibold">{user?.name}</span>
              <span>{user?.nickname}</span>
            </div>
          </div>
          <div className=" flex gap-4">
            <img
              src={user ? user.picture : new Error("no avantar")}
              alt="user avantar"
              className=" h-12 w-12 shrink-0 rounded-full"
            />
            <div className=" flex flex-col gap-1">
              <span className=" font-semibold">{user?.name}</span>
              <span>{user?.nickname}</span>
            </div>
          </div>
          <div className=" flex gap-4">
            <img
              src={user ? user.picture : new Error("no avantar")}
              alt="user avantar"
              className=" h-12 w-12 shrink-0 rounded-full"
            />
            <div className=" flex flex-col gap-1">
              <span className=" font-semibold">{user?.name}</span>
              <span>{user?.nickname}</span>
            </div>
          </div>
          <div className=" flex gap-4">
            <img
              src={user ? user.picture : new Error("no avantar")}
              alt="user avantar"
              className=" h-12 w-12 shrink-0 rounded-full"
            />
            <div className=" flex flex-col gap-1">
              <span className=" font-semibold">{user?.name}</span>
              <span>{user?.nickname}</span>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-4">
        <div className=" flex items-center gap-1">
          <UsersIcon className=" h-6 w-6 shrink-0" />
          <span className=" text-lg font-semibold">Our Admin</span>
        </div>
        <div className=" grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-4">
              <img
                src={user ? user.picture : new Error("no avantar")}
                alt="user avantar"
                className=" h-12 w-12 shrink-0 rounded-full"
              />
              <div className=" flex flex-col gap-1">
                <span className=" font-semibold">{user?.name}</span>
                <span>{user?.nickname}</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-4">
              <img
                src={user ? user.picture : new Error("no avantar")}
                alt="user avantar"
                className=" h-12 w-12 shrink-0 rounded-full"
              />
              <div className=" flex flex-col gap-1">
                <span className=" font-semibold">{user?.name}</span>
                <span>{user?.nickname}</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-4">
              <img
                src={user ? user.picture : new Error("no avantar")}
                alt="user avantar"
                className=" h-12 w-12 shrink-0 rounded-full"
              />
              <div className=" flex flex-col gap-1">
                <span className=" font-semibold">{user?.name}</span>
                <span>{user?.nickname}</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-4">
              <img
                src={user ? user.picture : new Error("no avantar")}
                alt="user avantar"
                className=" h-12 w-12 shrink-0 rounded-full"
              />
              <div className=" flex flex-col gap-1">
                <span className=" font-semibold">{user?.name}</span>
                <span>{user?.nickname}</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-4">
              <img
                src={user ? user.picture : new Error("no avantar")}
                alt="user avantar"
                className=" h-12 w-12 shrink-0 rounded-full"
              />
              <div className=" flex flex-col gap-1">
                <span className=" font-semibold">{user?.name}</span>
                <span>{user?.nickname}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
