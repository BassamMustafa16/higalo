import BestSeller from "@/components/homePage/BestSeller";
import Categories from "@/components/homePage/Categories";
import Hero from "@/components/homePage/Hero";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />
      {/* Categories  */}
      <Categories />
      {/* Best Sellers of the Month  */}
      <BestSeller />
    </div>
  );
}
