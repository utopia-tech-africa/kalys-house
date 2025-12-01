import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/nav-bar";
import Footer from "@/components/footer/footer";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaly's House",
  description: "72-Hour Livestream Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} font-bebas antialiased bg-black text-white min-h-screen `}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
