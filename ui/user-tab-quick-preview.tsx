"use client";
import UserMenuButtonProfile from "@/ui/user-menu-button-profile";

export default function QuickPreview({ index }: { index: number }) {
  return (
    <div>
      <ul className={index !== 0 ? "hidden" : ""}>
        <li key={1}>
          RetroPGF 3: Application Review Process Results & Feedback00001
        </li>
        <li key={2}>Earned 'Reader'</li>
        <li key={3}>RetroPGF Round 3 Feedback Thread</li>
      </ul>
      <ul className={index !== 1 ? "hidden" : ""}>
        <li key={4}>
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations00000002
        </li>
        <li key={5}>Cycle 10 Final Grants Roundup</li>
        <li key={6}>Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 2 ? "hidden" : ""}>
        <li key={7}>
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations0000003
        </li>
        <li key={8}>Cycle 10 Final Grants Roundup</li>
        <li key={9}>Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 3 ? "hidden" : ""}>
        <li key={10}>
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations000004
        </li>
        <li key={11}>Cycle 10 Final Grants Roundup</li>
        <li key={12}>Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 4 ? "hidden" : ""}>
        <li key={13}>
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations00005
        </li>
        <li key={14}>Cycle 10 Final Grants Roundup</li>
        <li key={15}>Cycle 10 Final Grants Roundup</li>
      </ul>
      <ul className={index !== 5 ? "hidden" : ""}>
        <li key={16}>
          [FINAL] Improving Governance Accessibility through Praise and
          Contribution Based Attestations00006
        </li>
        <li key={17}>Cycle 10 Final Grants Roundup</li>
        <li key={3}>Cycle 10 Final Grants Roundup</li>
      </ul>
      <div className={index !== 6 ? "hidden" : ""}>
        <UserMenuButtonProfile />
      </div>
    </div>
  );
}
