import Banner from "@/component/home";
import Categories from "@/component/category";
import Trending from "@/component/trending";
import Choose from "@/component/choose";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <Trending />
      <Choose />
    </div>
  );
}
