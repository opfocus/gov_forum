import "style/globals.css";
import { Metadata } from "next";
import GlobalNav from "ui/global-nav";

import OpenEditorProvider from "@/app/_components/open-editor-provider";
import TopicCreate from "@/ui/topic-create";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import React from "react";
import Banner from "@/ui/banner";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Gov Forum",
  referrer: "origin-when-cross-origin",
  keywords: [
    "op",
    "OP",
    "optimism",
    "op stack",
    "SuperChain",
    "L2",
    "governace",
    "forum",
  ],
  creator: "simple8720",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "gov_forum",
    template: "%s | gov_forum",
  },
  description: "Optimism governance forum clone, For sharing and learning",

  verification: {
    google: 'google918a5c421d729bcd',
  },

  openGraph: {
    title: 'gov_forum"',
    url: '/',
    description: "Optimism governance forum clone, For sharing and learning",
    siteName: 'Gov Forum'
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children, auth
}: {
  children: React.ReactNode;
  auth: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="pb-36 overflow-y-scroll">
            <GlobalNav />
            <div className="mx-auto max-w-[1110px] px-[10px]">
              <Banner />
              <OpenEditorProvider>
                {children} 
                <TopicCreate />
              </OpenEditorProvider>
            </div>
          {auth}
        </body>
      </UserProvider>
    </html>
  );
}
