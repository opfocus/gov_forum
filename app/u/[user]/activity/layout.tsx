import UserSecondryNavActivity from "@/ui/user-navigation-secondary-activity"


export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <UserSecondryNavActivity />
      {children}
    </div>
  )
}