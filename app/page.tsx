import Categories from "@/components/Categories";
import Collections from "@/components/Collections";
import Hero from "@/components/Hero";
import Layout from "@/components/layouts/Layout";
import Navbar from "@/components/layouts/Navbar";
import {
  AboutUsShape,
  AboutUsShape2,
  BurgerKingChickenBg,
  DiscountBg,
  HeroBg,
  HeroSlide03,
  HeroSlide04,
  MoreAboutUsBg,
} from "@/constants/exports";
import { myStore } from "@/app/zustand/zustand";
import { useRef } from "react";
import Discount from "@/components/Discount";
import AboutUs from "@/components/AboutUs";
import BurgerAdvert from "@/components/BurgerAdvert";
import MoreAboutUs from "@/components/MoreAboutUs";
import ClientsReviews from "@/components/ClientsReviews";
import MainCategories from "@/components/MainCategories";
import Blogs from "@/components/Blogs";
import FreeDelivery from "@/components/FreeDelivery";
import Brands from "@/components/Brands";
import Menu from "@/components/layouts/Menu";
// import { body } from "@/utils/elements";
export default function Home() {
  return (
    <main className="w-full relative " id="Home">
      <Layout>
        <section className="bg-[#f4ecdf]">
          <div
            style={{
              background: `url(${HeroBg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
            className="pb-40 z-0"
          >
            <Navbar />
            <Hero />
          </div>
        </section>
        <section className="-mt-20 z-20">
          <Categories />
        </section>
        <section className="py-20 mobile:py-10">
          <Collections />
        </section>
        <section
        className="pt-20 mobile:pt-10"
          style={{
            background: `url(${DiscountBg.src})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "fixed",
          }}
        >
          <Discount />
        </section>
        <section
          className="py-20 mobile:py-10"
          style={{
            background: `url(${AboutUsShape.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200px",
            backgroundPositionX: "100px",
            backgroundPositionY: "120px",
          }}
        >
          <div
            className=""
            style={{
              background: `url(${AboutUsShape2.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200px",
              backgroundPosition: "right -100px bottom 0",
              // backgroundPositionY: "bottom",
            }}
          >
            <AboutUs />
          </div>
        </section>
        <section
          className="py-20 mobile:py-10 relative overflow-x-hidden"
          style={{
            background: `url(${BurgerKingChickenBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <BurgerAdvert />
        </section>
        <section
          className="py-20 mobile:py-10 relative before:absolute before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)]"
          style={{
            background: `url(${MoreAboutUsBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            // backgroundPosition: "right -100px bottom 0",
            backgroundAttachment: "fixed",
            // backgroundPositionY: "bottom",
          }}
        >
          <MoreAboutUs />
        </section>
        <section className="py-20 mobile:py-10 relative">
          <ClientsReviews />
        </section>
        <section className="py-20 mobile:py-10 relative">
          <MainCategories />
        </section>
        <section className="pt-20 pb-[270px] bg-[#F8F8F8]">
          <Blogs />
        </section>
        <section className="py-20 mobile:py-10 -mt-[230px] ">
          <FreeDelivery />
        </section>
        <section className="py-20 mobile:py-10 ">
          <Brands />
        </section>
      </Layout>
    </main>
  );
}
