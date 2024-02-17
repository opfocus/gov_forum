import "style/globals.css";
import { Metadata } from "next";
import GlobalNav from "ui/global-nav";

import OpenEditorProvider from "@/app/_components/open-editor-provider";
import TopicCreate from "@/ui/topic-create";

import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Gov_forum",
  referrer: 'origin-when-cross-origin',
  keywords: ['op', 'OP', 'optimism', 'op stack', 'SuperChain', 'L2','governace','forum'],
  creator: 'simple8720',

  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  
  title: {
    default: "gov_forum",
    template: "%s | gov_forum"
  },
  description: "Optimism governance forum clone, For sharing and learning",
  // openGraph: {
  //   title: 'experiment work',
  //   description: 'This is my experiment work, hover I need complete it. Come on!',
  //   images: [`/api/og?title=Next.js App Router`],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="pb-36">
          <div className="  w-full">
            <GlobalNav />
            <div className="mx-auto mt-16 lg:mt-24 max-w-5xl px-2 lg:px-4 overscroll-y-auto">
              <OpenEditorProvider>
                {children}
                <TopicCreate />
              </OpenEditorProvider>
            </div>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
