"use client";

import Card from "./card";
import { GiTrousers } from "react-icons/gi";
import Modal from "./modal";
import Jeanwear from "./jeansDetails";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSearch from "./search";

type JeansType = {
  name: string;
  brand: string;
  category: string;
  size: string[];
  color: string;
  material: string;
  condition: string;
  style: string;
  waistType: string;
  closure: string;
  location: string;
  features: string[];
  image: string[];
  price: number;
  link: string;
  fit: string;
};

function Jeans() {
  const { query, setQuery, filteredItems } = useSearch(Jeanwear);
  const [selectedJean, setSelectedJean] = useState<JeansType | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [hover, setHover] = useState(false);

  const openJeansDetails = (jeans: JeansType) => {
    setSelectedJean(jeans);
  };

  useEffect(() => {
    if (!hover || !selectedJean) {
      setCurrentImage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === selectedJean.image.length - 1 ? 0 : prev + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [hover, selectedJean]);
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-700  text-3xl">
          <GiTrousers />
        </span>
        <h3 className="text-xl font-roboto text-gray-800 font-bold">
          Our Car Store
        </h3>
      </div>

      <div className="mb-6 w-full">
        <input
          type="text"
          value={query}
          placeholder="Search for jeans..."
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none  transition-all text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] ">
        {filteredItems.map((jean: JeansType, index: number) => (
          <Card
            key={index}
            image={jean.image}
            name={jean.name}
            price={jean.price}
            link={jean.link}
            viewDetails={() => openJeansDetails(jean)}
          />
        ))}
      </div>

      <Modal isOpen={!!selectedJean} onClose={() => setSelectedJean(null)}>
        {selectedJean && (
          <div className="space-y-4">
            {/* Title */}
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-indigo-600">{selectedJean.name}</span>
              <span className="text-gray-700">({selectedJean.brand})</span>
            </h4>

            {/* Image */}
            <div
              className="relative w-full rounded-lg overflow-hidden border"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Image
                src={selectedJean.image[currentImage]}
                alt={selectedJean.name}
                width={1000}
                height={1000}
                className="object-contain w-full h-[300px] md:h-[250px]"
              />
            </div>

            {/* Mileage & Condition */}
            <div className="grid grid-cols-2 gap-3 text-gray-700">
              <p>
                <span className="font-semibold">Available Size:</span>{" "}
                <ul>
                  {selectedJean.size.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </p>

              <p>
                <span className="font-semibold">Condition:</span>{" "}
                {selectedJean.condition}
              </p>
            </div>

            {/* Features */}
            <div>
              <h5 className="font-semibold">Features</h5>

              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {selectedJean.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 text-gray-700">
              <p>
                <span className="font-semibold">color:</span>{" "}
                {selectedJean.color}
              </p>
              <p>
                <span className="font-semibold">Material:</span>{" "}
                {selectedJean.material}
              </p>
            </div>

            <div className="text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Fit:</span> {selectedJean.fit}
              </p>
              <p>
                <span className="font-semibold">Style:</span>{" "}
                {selectedJean.style}
              </p>
              <p>
                <span className="font-semibold">Closure:</span>{" "}
                {selectedJean.closure}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Waist Type:</span>{" "}
                {selectedJean.waistType}
              </p>
            </div>
            {/* Location & Link */}
            <div className="flex justify-between items-center">
              <p className="text-gray-700">
                <span className="font-semibold">Location: </span>
                {selectedJean.location}
              </p>

              <Link
                href={selectedJean.link}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
export default Jeans;
