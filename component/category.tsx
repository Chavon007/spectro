"use client";

import { LiaCarSolid } from "react-icons/lia";
import { GiClothes } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import Link from "next/link";
const categoriesCard = [
  {
    name: "Luxury Cars",
    link: "/categories",
    icon: <LiaCarSolid />,
  },
  {
    name: "Premium Jeans",
    link: "/categories",
    icon: <GiClothes />,
  },
  {
    name: "Accessories",
    link: "/categories",
    icon: <FaBagShopping />,
  },
];

function Categories() {
  return (
    <div className="w-[100%] h-auto md:h-[42vh] lg:h-[70vh] bg-[#f1f1f0] p-[30px] md:p-[10px]">
      <div className=" w-[100%] md:w-[95%] mx-auto mt-[30px] h-auto">
        <div className=" lg:w-[30%] p-[10px] mx-auto flex justify-center items-center">
          <h3 className="text-4xl font-bold  text-gray-700 font-roboto">
            Shop by Category
          </h3>
        </div>

        <div className=" w-[100%] md:w-[90%] mx-auto md:flex justify-between mt-[30px] md:mt-[60px] items-center gap-3 ">
          {categoriesCard.map((card, index) => (
            <div
              className="w-[100%] md:w-[95%] h-[50vh]  mx-auto  md:w-[300px] md:h-[165px] p-6 rounded-2xl bg-gradient-to-br from-white to-[#fafafa] mb-[20px]
                 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                 hover:from-[#ffffff] hover:to-[#f2f2f2]"
              key={index}
            >
              <Link
                className="flex flex-col  justify-center items-center h-full gap-2"
                href={card.link}
              >
                <span
                  className={`text-9xl md:text-5xl 
            ${index === 0 ? "text-blue-700" : ""}
            ${index === 1 ? "text-emerald-600" : ""}
            ${index === 2 ? "text-rose-600" : ""}
          `}
                >
                  {card.icon}
                </span>

                <span className=" text-4xl md:text-xl font-semibold text-gray-900 font-lora tracking-wide">
                  {card.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
