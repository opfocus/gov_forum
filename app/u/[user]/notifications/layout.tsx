import UserSecondryNavNotifications from "@/ui/user-navigation-secondary-notifications"


export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <UserSecondryNavNotifications />
      {children}
    </div>
  )
}