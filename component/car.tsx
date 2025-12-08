import Card from "./card";
import { FaCar } from "react-icons/fa";
import Modal from "./modal";
import carDetails from "./carDetails";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [hover, setHover] = useState(false);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] ">
        {carDetails.map((car: CarType, i: number) => (
          <Card
            key={i}
            image={car.image}
            name={car.name}
            price={car.price}
            link={car.link}
            viewDetails={() => setSelectedCar(car)}
          />
        ))}
      </div>

      <Modal isOpen={!!selectedCar} onClose={() => setSelectedCar(null)}>
        {selectedCar && (
          <div>
            <h4>
              <span>{selectedCar.model}</span>
              {selectedCar.year}
            </h4>
            <p
              className="relative w-full"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {" "}
              <Image
                src={selectedCar.image[currentImage]}
                alt={selectedCar.model}
                width={100}
                height={100}
              />
            </p>
            <p>
              <span>Miles covered: {selectedCar.mileage}</span>
              <span>Condition: {selectedCar.condition}</span>
            </p>

            <ul>
              {selectedCar.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <p>
              <span>Engine: {selectedCar.engine}</span>
              <span>VIN NUMBER: {selectedCar.vinNum}</span>
            </p>
            <p>
              <span>Location: {selectedCar.location}</span>
              <span>
                Message: <Link href={selectedCar.link}>Whatsapp</Link>{" "}
              </span>
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
export default Cars;
