import BookBundles from "@/components/BookBundles";
import BookCategories from "@/components/BookCategories";
import ExploreByAge from "@/components/ExploreByAge";
import LatestAdditions from "@/components/LatestAdditions";
import Footer from "@/components/layout/Footer";
import ImageSlider from "@/components/layout/ImageSlider";
import Navbar from "@/components/layout/Navbar";
import WhyAreWeSpecial from "@/components/WhyAreWeSpecial";
import Image from "next/image";

export default function Home() {
  return (
    <>
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

   
    </>
  );
}
