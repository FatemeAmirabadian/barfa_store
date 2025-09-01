import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import SpecialOffers from "@/components/home/SpecialOffers";
import Favorites from "@/components/home/Favorites";
import Discounts from "@/components/home/Discounts";
import Brands from "@/components/home/Brands";
import NewProducts from "@/components/home/NewProducts";
import CTA from "@/components/home/CTA";
import Articles from "@/components/home/Articles";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Categories />
        <SpecialOffers />
        <Favorites />
        <Discounts />
        <Brands />
        <NewProducts />
        <CTA />
        <Articles />
      </main>
    </>
  );
}
