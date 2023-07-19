import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Stout | Software Engineer",
  description: "Professional software engineer with a passion for solving complex problems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Kevin Stout Profile</title>
        <meta name="description" content="Kevin Stout's profile page" />
        <link rel="icon" href="/favicon.ico" sizes="196x196" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
