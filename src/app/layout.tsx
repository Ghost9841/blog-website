import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";

const poppins = Poppins({
  weight: ['100','300','200','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Blog Website",
  description: "Generated by Aakash Subedi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased bg-white text-black
        overflow-x-hidden max-w-100vw ml-auto mr-auto
        `}
      >
        <TransitionEffect/>
        <div className="">

        {children}
        </div>
          <Footer/>
      </body>
    </html>
  );
}
