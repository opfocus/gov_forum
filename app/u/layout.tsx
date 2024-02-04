import UserInfo from "@/ui/user-info"
import UserNav from "@/ui/user-navigation";


export default function Layout({ children }: {
  children: React.ReactNode
}) {

  return (
    <div>
      <UserInfo />
      <UserNav />
      {children}
    </div>
  )
}