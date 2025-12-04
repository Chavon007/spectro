import Card from "./card";
import { FaCar } from "react-icons/fa";

const carproduct = [
  {
    name: "Toyota Camry 2008",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/e9-4t1be46kx8u221230/img-3-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e9-4t1be46kx8u221230/img-5-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e9-4t1be46kx8u221230/img-11-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e9-4t1be46kx8u221230/img-14-600x400.jpg",
    ],
    price: 3800000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Toyota Corolla 2010",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/4d-2t1bu4ee9ac415172/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/4d-2t1bu4ee9ac415172/img-4-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/4d-2t1bu4ee9ac415172/img-12-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/4d-2t1bu4ee9ac415172/img-13-600x400.jpg",
    ],
    price: 4200000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Honda Accord 2009",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/35-1hgcs12879a014728/img-4-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/35-1hgcs12879a014728/img-5-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/35-1hgcs12879a014728/img-8-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/35-1hgcs12879a014728/img-10-600x400.jpg",
    ],
    price: 3600000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Lexus RX 330 2006",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/c4-2t2ha31u56c088816/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/c4-2t2ha31u56c088816/img-3-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/c4-2t2ha31u56c088816/img-6-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/c4-2t2ha31u56c088816/img-11-600x400.jpg",
    ],
    price: 5500000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Toyota Highlander 2008",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/e0-jtees43ax82089177/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e0-jtees43ax82089177/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e0-jtees43ax82089177/img-4-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e0-jtees43ax82089177/img-9-600x400.jpg",
    ],
    price: 6200000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Toyota Sienna 2011",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/9b-5tdyk3dc3bs173093/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/9b-5tdyk3dc3bs173093/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/9b-5tdyk3dc3bs173093/img-7-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/9b-5tdyk3dc3bs173093/img-11-600x400.jpg",
    ],
    price: 6800000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Mercedes-Benz C300 2008",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/1e-wddgf81x58f192098/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/1e-wddgf81x58f192098/img-3-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/1e-wddgf81x58f192098/img-6-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/1e-wddgf81x58f192098/img-11-600x400.jpg",
    ],
    price: 6500000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Honda Civic 2010",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/d4-2hgfa1f50ah312589/img-4-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/d4-2hgfa1f50ah312589/img-5-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/d4-2hgfa1f50ah312589/img-6-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/d4-2hgfa1f50ah312589/img-13-600x400.jpg",
    ],
    price: 3500000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Toyota RAV4 2009",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/da-jtmbf32v595016776/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/da-jtmbf32v595016776/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/da-jtmbf32v595016776/img-3-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/da-jtmbf32v595016776/img-7-600x400.jpg",
    ],
    price: 5200000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Toyota Corolla 2012",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/2e-2t1bu4ee5cc845557/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/2e-2t1bu4ee5cc845557/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/2e-2t1bu4ee5cc845557/img-4-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/2e-2t1bu4ee5cc845557/img-8-600x400.jpg",
    ],
    price: 4800000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Toyota Camry 2012 (Spider)",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/56-4t1bf1fk3cu197728/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/56-4t1bf1fk3cu197728/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/56-4t1bf1fk3cu197728/img-9-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/56-4t1bf1fk3cu197728/img-14-600x400.jpg",
    ],
    price: 6200000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Lexus ES 350 2009",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/ca-jthbj46g292322737/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/ca-jthbj46g292322737/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/ca-jthbj46g292322737/img-7-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/ca-jthbj46g292322737/img-6-600x400.jpg",
    ],
    price: 6800000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Toyota Yaris 2008",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/9f-jtdbt923984020103/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/9f-jtdbt923984020103/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/9f-jtdbt923984020103/img-4-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/9f-jtdbt923984020103/img-6-600x400.jpg",
    ],
    price: 2800000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Hyundai Elantra 2014",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/0d-kmhdh4ae3eu182347/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/0d-kmhdh4ae3eu182347/img-2-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/0d-kmhdh4ae3eu182347/img-4-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/0d-kmhdh4ae3eu182347/img-15-600x400.jpg",
    ],
    price: 4500000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Kia Rio 2012",
    image: [
      "https://www.edmunds.com/assets/m/for-sale/e5-knadn4a32c6092441/img-1-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e5-knadn4a32c6092441/img-5-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e5-knadn4a32c6092441/img-6-600x400.jpg",
      "https://www.edmunds.com/assets/m/for-sale/e5-knadn4a32c6092441/img-9-600x400.jpg",
    ],
    price: 3200000,
    link: "https://wa.link/g15ceq",
  },
];

function Cars() {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-600 text-2xl">
          <FaCar />
        </span>
        <h3 className="text-xl font-bold">Our Car Store</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] ">
        {carproduct.map((car, index) => (
          <Card
            key={index}
            image={car.image}
            name={car.name}
            price={car.price}
            link={car.link}
          />
        ))}
      </div>
    </div>
  );
}
export default Cars;
