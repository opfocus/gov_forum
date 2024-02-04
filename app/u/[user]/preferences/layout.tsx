import UserSecondryNavPreferences from "@/ui/user-navigation-secondary-preferences"


export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <UserSecondryNavPreferences />
      {children}
    </div>
  )
}