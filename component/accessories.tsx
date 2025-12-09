import Card from "./card";
import { FaBagShopping } from "react-icons/fa6";
import Modal from "./modal";
import accessoriesWear from "./accessoriesDetails";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import useSearch from "./search";

type accessoriesType = {
  name: string;
  brand: string;
  category: string;
  type: string;
  size: string[];
  color: string;
  material: string;
  condition: string;
  style: string;
  buckleType: string;
  width: string;
  location: string;
  features: string[];
  image: string[];
  price: number;
  link: string;
};

function Accessories() {
  const { query, setQuery, filteredItems } = useSearch(accessoriesWear);
  const [selectedAccessories, setSelectedAccessories] =
    useState<accessoriesType | null>(null);

  const [currentImage, setCurrentImage] = useState(0);
  const [hover, setHover] = useState(false);

  const openAccessoriesDetails = (accessories: accessoriesType) => {
    setSelectedAccessories(accessories);
  };

  useEffect(() => {
    if (!hover || !selectedAccessories) {
      setCurrentImage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === selectedAccessories.image.length - 1 ? 0 : prev + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [hover, selectedAccessories]);
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-700 text-3xl">
          <FaBagShopping />
        </span>
        <h3 className="text-xl font-roboto text-gray-800 font-bold">
          Our Accessories Store
        </h3>
      </div>

      <div className="mb-6 w-full">
        <input
          type="text"
          placeholder="Search for accessories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none  transition-all text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] ">
        {filteredItems.map((acc: any, index: number) => (
          <Card
            key={index}
            image={acc.image}
            name={acc.name}
            price={acc.price}
            link={acc.link}
            viewDetails={() => openAccessoriesDetails(acc)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedAccessories}
        onClose={() => setSelectedAccessories(null)}
      >
        {selectedAccessories && (
          <div className="space-y-4">
            {/* Title */}
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-indigo-600">
                {selectedAccessories.name}
              </span>
              <span className="text-gray-700">
                ({selectedAccessories.brand})
              </span>
            </h4>

            {/* Image */}
            <div
              className="relative w-full rounded-lg overflow-hidden border"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Image
                src={selectedAccessories.image[currentImage]}
                alt={selectedAccessories.name}
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
                  {selectedAccessories.size.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </p>

              <p>
                <span className="font-semibold">Condition:</span>{" "}
                {selectedAccessories.condition}
              </p>
            </div>

            {/* Features */}
            <div>
              <h5 className="font-semibold">Features</h5>

              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {selectedAccessories.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 text-gray-700">
              <p>
                <span className="font-semibold">color:</span>{" "}
                {selectedAccessories.color}
              </p>
              <p>
                <span className="font-semibold">Material:</span>{" "}
                {selectedAccessories.material}
              </p>
            </div>

            <div className="text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Type:</span>{" "}
                {selectedAccessories.type}
              </p>
              <p>
                <span className="font-semibold">Style:</span>{" "}
                {selectedAccessories.style}
              </p>
              <p>
                <span className="font-semibold">Buckle-Type:</span>{" "}
                {selectedAccessories.buckleType}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Width:</span>{" "}
                {selectedAccessories.width}
              </p>
            </div>
            {/* Location & Link */}
            <div className="flex justify-between items-center">
              <p className="text-gray-700">
                <span className="font-semibold">Location: </span>
                {selectedAccessories.location}
              </p>

              <Link
                href={selectedAccessories.link}
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
export default Accessories;
