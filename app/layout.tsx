import "@/style/globals.css";
import { Metadata } from "next";

import { OpenEditorProvider } from "@/app/context/open-editor-provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import TopicCreate from "@/ui/topic-create";
import Banner from "@/ui/banner";
import GlobalNav from "@/ui/global-nav";

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
    canonical: "/",
  },
  title: {
    default: "gov_forum",
    template: "%s | gov_forum",
  },
  description: "Optimism governance forum clone, For sharing and learning",

  verification: {
    google: "google918a5c421d729bcd",
  },

  openGraph: {
    title: 'gov_forum"',
    url: "/",
    description: "Optimism governance forum clone, For sharing and learning",
    siteName: "Gov Forum",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className=" overflow-y-scroll bg-white pb-36 text-gray-600 dark:bg-gray-700 dark:text-gray-100">
          <GlobalNav />
          <main className=" mx-auto w-full bg-inherit px-3 sm:max-lg:max-w-xl lg:max-xl:max-w-4xl  xl:max-w-6xl">
            <Banner />
            <OpenEditorProvider>
              {children}
              <TopicCreate />
            </OpenEditorProvider>
            {auth}
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
