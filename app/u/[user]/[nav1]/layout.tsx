import { barsItems } from "@/lib/user-nav-bars-data";
import UserTabGroup from "@/ui/user-tab-group";

export default function Layout({ children, params }: {
  children: React.ReactNode,
  params: {
    nav1:string,
    user: string
  }
}) {
  const bar = barsItems.find(item => item.slug === params.nav1)!
  const path = '/u/' + params.user + "/" + params.nav1
  const userTabs = bar.children
  if (userTabs === null)
    return (
        <div>
          {children}
        </div>
      )
  return (
    <div>
      <UserTabGroup userTabs = {userTabs} path = {path }/>
      {children}
    </div>
  )
}