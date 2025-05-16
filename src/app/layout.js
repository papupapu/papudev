import { Open_Sans } from "next/font/google";

import StateProvider from "@/state";

import "./globals.css";

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Papudev",
  description: "A fronter-end developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${opensans.variable} antialiased`}
      >
        <StateProvider>
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
