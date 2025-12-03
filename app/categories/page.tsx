"use client";
import { useState } from "react";
import Catesidebar from "@/component/catesidebar";

type categoryType = "cars" | "jeans" | "accessories";
function Maincategory() {
  const [selected, setSelected] = useState<categoryType>("cars");

  const rendercategoey = () => {
    if (selected === "cars") {
      return <p>All the cars</p>;
    }
    if (selected === "accessories") {
      return <p>All Accessories</p>;
    }
    if (selected === "jeans") {
      return <p>All jeans</p>;
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-[40%]">
        <Catesidebar onSelect={setSelected} />
      </div>

      <div className="w-[60%]">{rendercategoey()}</div>
    </div>
  );
}
export default Maincategory;
