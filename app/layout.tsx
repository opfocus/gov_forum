import "style/globals.css";
import { Metadata } from "next";
import GlobalNav from "ui/global-nav";

import OpenEditorProvider from "@/app/components/open-editor-provider";
import TopicCreate from "@/ui/topic-create";

import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "experiment",
  description: "This is one of my work, I need to complete it...",
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
