import UserInfo from "@/ui/user-info"
import { barsItems } from "@/lib/user-nav-bars-data";
import UserTabGroup from "@/ui/user-tab-group";

//user summary page   
//test url: http://localhost:3000/u/me/summary

export default function Layout({ children, params }: {
  children: React.ReactNode,
  params: {
    user:string
  }
}) {
  const userTabs = barsItems
  const path = '/u/' + params.user 
  
  return (
    <div>
      <UserInfo />
      <UserTabGroup userTabs = {userTabs} path = {path}/>
      {children}
    </div>
  )
}