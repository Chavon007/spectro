"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const trendingNow = [
  {
    image: ["/car22.jpeg", "/car1.jpg"],
    name: "2016 Hyundai Sonata Limited",
    link: "https://wa.link/g15ceq",
    price: "17,000,000",
    details: "",
  },
  {
    image: ["/watch1.jpg", "/watch3.jpg"],
    name: "CRRJU Watch for Men",
    link: "https://wa.link/g15ceq",
    price: "23,000",
    details:
      "CRRJU Watch for Men Stainless Steel Mens Watches Luxury Multi-Function Chronograph Quartz Wristwatch Relojes Hombre Man Clock",
  },
  {
    image: ["/zara.jpg", "/jeans5.webp"],
    name: "zara men",
    link: "https://wa.link/g15ceq",
    price: "25,000",
    details: "Zara Mens Straight Fit Jeans - Light Blue - 8062/410/407 (36x32)",
  },
  {
    image: ["/carTacoma.jpg", "/cartacoma2.jpg"],
    name: "2023 Toyota Tacoma SR5 Double Cab.",
    link: "https://wa.link/g15ceq",
    price: "30,000,000",
    details:
      "The 2023 Toyota Tacoma Double Cab is a reliable mid-size pickup that combines rugged capability with a spacious 4-door cabin for daily driving, light off-road, and hauling.",
  },
  {
    image: ["/glass.jpg", "/glass2.jpg"],
    name: "Retro square sunglasses",
    link: "https://wa.link/g15ceq",
    price: "58,000",
    details: "Retro square sunglasses - GoldGray",
  },
];

function Trending() {
  const [currentImage, setCurrentImage] = useState<{ [key: number]: number }>(
    {}
  );

  return (
    <div className=" w-[100%] h-auto h-[70vh] bg-[#f1f1f0] pb-[30px] md:p-[10px]">
      <div className=" w-[100%] ">
        <div className="mb-4 ml-4">
          <h3 className="text-2xl font-bold text-gray-600 font-roboto">
            Trending Now
          </h3>
        </div>

        <div className=" w-[92%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingNow.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              <div
                onMouseEnter={() =>
                  setCurrentImage((prev) => ({ ...prev, [index]: 1 }))
                }
                onMouseLeave={() =>
                  setCurrentImage((prev) => ({ ...prev, [index]: 0 }))
                }
              >
                <Image
                  src={product.image[currentImage[index] || 0]}
                  alt={product.name}
                  width={1000}
                  height={100}
                  style={{ width: "100%", height: "350px" }}
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h4 className="text-1xl font-semibold text-gray-800 font-lora">
                  {product.name}
                </h4>
                <p className="text-sm font-semibold font-inter mt-[10px] text-blue-700">
                  ₦{product.price}
                </p>
                <Link
                  href={product.link}
                  className=" bg-red-600 text-white font-lora  hover:bg-red-500 transition-colors flex justify-center mt-[30px] rounded-2xl w-[50%] mx-auto p-[10px]"
                >
                  Order via Whatsapp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
