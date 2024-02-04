'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function TestUi() {
  const router = useRouter()
  return (
    <div>
      <Link href={'/test5'}>test time line</Link>
      <br />
    </div>
  );
}
