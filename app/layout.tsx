import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import ImageSlider from "@/components/layout/ImageSlider";
import LatestAdditions from "@/components/LatestAdditions";
import ExploreByAge from "@/components/ExploreByAge";
import BookCategories from "@/components/BookCategories";
import BookBundles from "@/components/BookBundles";
import WhyAreWeSpecial from "@/components/WhyAreWeSpecial";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "99 BOOKS",
  description: "Children Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          <ImageSlider/>
          <div className="absolute top-0 w-full z-10">
            <Navbar />
          </div>
          {/* <div className="relative z-0">
            {children}
          </div> */}
          <div>
            <LatestAdditions/>
          </div>
          <div>
            <ExploreByAge/>
          </div>
          <div>
            <BookCategories/>
          </div>
          <div>
            <BookBundles/>
          </div>
          <div>
            <WhyAreWeSpecial/>
          </div>

          <div >
            <Footer/>
          </div>

        </div>

   
      </body>
    </html>
  );
}
