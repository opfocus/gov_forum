import UserInfo from "@/app/u/_components/user-info";
import { barsItems } from "@/lib/user-nav-bars-data";
import UserTabGroup from "@/app/u/_components/user-tab-group";

//user summary page
//test url: http://localhost:3000/u/me/summary

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    user: string;
  };
}) {
  const userTabs = barsItems;
  const path = "/u/" + params.user;

  return (
    <div className=" mt-8 space-y-6">
      <UserInfo />
      <div>
        <UserTabGroup userTabs={userTabs} path={path} />
        {children}
      </div>
    </div>
  );
}
