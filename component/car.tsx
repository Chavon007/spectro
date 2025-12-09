import Card from "./card";
import { FaCar } from "react-icons/fa";
import Modal from "./modal";
import carDetails from "./carDetails";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSearch from "./search";

type CarType = {
  name: string;
  model: string;
  year: string;
  price: number;
  mileage: string;
  condition: string;
  transmission: string;
  engine: string;
  vinNum: string;
  location: string;
  features: string[];
  image: string[];
  link: string;
};

function Cars() {
  const { query, setQuery, filteredItems } = useSearch(carDetails);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [hover, setHover] = useState(false);
  const openCarDetails = (car: CarType) => {
    setSelectedCar(car);
  };

  useEffect(() => {
    if (!hover || !selectedCar) {
      setCurrentImage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === selectedCar.image.length - 1 ? 0 : prev + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [hover, selectedCar]);
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-700 text-3xl">
          <FaCar />
        </span>
        <h3 className="text-xl font-roboto text-gray-800 font-bold">
          Our Car Store
        </h3>
      </div>

      <div className="mb-6 w-full">
        <input
          type="text"
          placeholder="Search for cars..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none  transition-all text-gray-700 placeholder-gray-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] ">
        {filteredItems.map((car: CarType, i: number) => (
          <Card
            key={i}
            image={car.image}
            name={car.name}
            price={car.price}
            link={car.link}
            viewDetails={() => openCarDetails(car)}
          />
        ))}
      </div>

      <Modal isOpen={!!selectedCar} onClose={() => setSelectedCar(null)}>
        {selectedCar && (
          <div className="space-y-4">
            {/* Title */}
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-indigo-600">{selectedCar.model}</span>
              <span className="text-gray-700">({selectedCar.year})</span>
            </h4>

            {/* Image */}
            <div
              className="relative w-full rounded-lg overflow-hidden border"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Image
                src={selectedCar.image[currentImage]}
                alt={selectedCar.model}
                width={1000}
                height={1000}
                className="object-cover w-full h-[300px] md:h-[250px]"
              />
            </div>

            {/* Mileage & Condition */}
            <div className="grid grid-cols-2 gap-3 text-gray-700">
              <p>
                <span className="font-semibold">Miles covered:</span>{" "}
                {selectedCar.mileage}
              </p>
              <p>
                <span className="font-semibold">Condition:</span>{" "}
                {selectedCar.condition}
              </p>
            </div>

            {/* Features */}
            <div>
              <h5 className="font-semibold">Features</h5>

              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {selectedCar.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Engine + VIN */}
            <div className="grid grid-cols-2 gap-3 text-gray-700">
              <p>
                <span className="font-semibold">Engine:</span>{" "}
                {selectedCar.engine}
              </p>
              <p>
                <span className="font-semibold">VIN:</span> {selectedCar.vinNum}
              </p>
            </div>

            {/* Location & Link */}
            <div className="flex justify-between items-center">
              <p className="text-gray-700">
                <span className="font-semibold">Location: </span>
                {selectedCar.location}
              </p>

              <Link
                href={selectedCar.link}
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
export default Cars;
