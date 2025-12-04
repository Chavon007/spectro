"use client";
import { useState } from "react";
import Catesidebar from "@/component/catesidebar";
import Cars from "@/component/car";
import Jeans from "@/component/jeans";

type categoryType = "cars" | "jeans" | "accessories";
function Maincategory() {
  const [selected, setSelected] = useState<categoryType>("cars");

  const rendercategoey = () => {
    if (selected === "cars") {
      return <Cars />;
    }
    if (selected === "accessories") {
      return <p>All Accessories</p>;
    }
    if (selected === "jeans") {
      return <Jeans />;
    }
  };
  return (
    <div className=" flex-col md:flex bg-[#f1f1f0] ">
      <div className="w-[100%] md:w-[25%] shadow-[4px_0_10px_rgba(0,0,0,0.2)]">
        <Catesidebar onSelect={setSelected} />
      </div>

      <div className="w-[90%] mx-auto ">{rendercategoey()}</div>
    </div>
  );
}
export default Maincategory;
