import UserSecondryNavMessages from "@/ui/user-navigation-secondary-messages"


export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <UserSecondryNavMessages />
      {children}
    </div>
  )
}