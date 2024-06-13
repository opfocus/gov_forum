
import { redirect } from "next/navigation"

export default function Page({params}: {
  params: {
    user:string;
  }
}) {
  redirect(`/u/${params.user}/activity`)
}