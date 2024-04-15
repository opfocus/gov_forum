"use client";
import UserMenuButtonProfile from "@/ui/user-menu-button-profile";

export default function QuickPreview({ index }: { index: number }) {
  return (
    <div className=" text-slate-400 dark:text-slate-300 ">
      <ul className={index !== 0 ? "hidden" : ""}>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          RetroPGF 3: Application Review Process Results & Feedback00001
        </li>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Earned 'Reader'
        </li>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          RetroPGF Round 3 Feedback Thread
        </li>
      </ul>
      <ul className={index !== 1 ? "hidden" : ""}>
      <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations00000002
        </li>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
          <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 2 ? "hidden" : ""}>
      <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations0000003
        </li>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
          <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 3 ? "hidden" : ""}>
      <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations000004
        </li>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
          <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 4 ? "hidden" : ""}>
      <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations00005
        </li>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
          <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 5 ? "hidden" : ""}>
      <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations00006
        </li>
        <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
          <li className=" px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-600">
          Cycle 10 Final Grants Roundup</li>
      </ul>
      <div className={index !== 6 ? "hidden" : ""}>
        <UserMenuButtonProfile />
      </div>
    </div>
  );
}
