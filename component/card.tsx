"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type productCard = {
  name: string;
  image: string[];
  price: number;
  link: string;
  viewDetails: () => void;
};

function Card({ name, image, price, link, viewDetails }: productCard) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover) {
      setCurrentImage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === image.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [hover, image.length]);
  return (
    <div className="bg-red-white  shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <div
        className="relative w-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src={image[currentImage]}
          alt={name}
          width={1000}
          height={1000}
          className="object-cover w-full h-[300px] md:h-[200px]"
        />
      </div>

      <div className="p-4 ">
        <h3 className="font-semibold text-base font-lora text-gray-800">
          {name}
        </h3>

        <p className="text-sm font-semibold font-inter mt-[10px] text-blue-700">
          ₦{price.toLocaleString()}
        </p>
        <button
          className="text-sm text-blue-300 cursor-pointer hover:underline hover:text-blue-400"
          onClick={viewDetails}
        >
          View Details
        </button>
        <Link
          href={link}
          className="mt-3 font-lora block text-center bg-red-600 hover:bg-red-500 transition-colors text-white py-2 rounded-lg"
        >
          Order via WhatsApp
        </Link>
      </div>
    </div>
  );
}

export default Card;
