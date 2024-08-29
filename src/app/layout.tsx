import type { Metadata } from "next";
import "./globals.css";
import "./utility.css";

export const metadata: Metadata = {
  title: "Niraj",
  description: "Created by Niraj",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-9276875379389109"></meta>
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
