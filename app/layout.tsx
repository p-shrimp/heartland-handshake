import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";  // lowercase c
import Footer from "@/components/Footer";  // lowercase c
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heartland Handshake | Save Thousands on Your Next Car",
  description: "Ex-dealer turned buyer advocate. I negotiate your car deal so you save thousands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
