import "./globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Real NYC Apartments",
  description: "TELL ME ABOUT YOUR APARTMENT SEARCH",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-transparent">{children}</body>
    </html>
  );
}
