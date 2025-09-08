import Articles from "./Articles";
import Brands from "./Brands";
import CTA from "./CTA";
import Categories from "./Categories";
import Discounts from "./Discounts";
import Favorites from "./Favorites";
import Slider from "./Slider";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import SpecialOffers from "./SpecialOffers";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-7xl">
        <Categories />
        <Slider />
        <Hero />
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
