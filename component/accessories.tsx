import Card from "./card";

const accessoriesWear = [
  {
    name: "Leather Belt",
    image: ["", "", "", ""],
    price: 8000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Sunglasses - Aviator Style",
    image: ["", "", "", ""],
    price: 12000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Wrist Watch - Classic Leather Strap",
    image: ["", "", "", ""],
    price: 45000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Silver Chain Necklace",
    image: ["", "", "", ""],
    price: 15000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Baseball Cap",
    image: ["", "", "", ""],
    price: 7000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Leather Wallet",
    image: ["", "", "", ""],
    price: 10000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Bracelet - Beaded",
    image: ["", "", "", ""],
    price: 5000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Tie - Silk",
    image: ["", "", "", ""],
    price: 9000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Earrings - Hoop",
    image: ["", "", "", ""],
    price: 8000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Backpack - Canvas",
    image: ["", "", "", ""],
    price: 18000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Keychain - Metal",
    image: ["", "", "", ""],
    price: 3000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Scarf - Winter Wool",
    image: ["", "", "", ""],
    price: 12000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Hat - Fedora",
    image: ["", "", "", ""],
    price: 15000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Pocket Square",
    image: ["", "", "", ""],
    price: 6000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Socks - Cotton Pack of 3",
    image: ["", "", "", ""],
    price: 4000,
    link: "https://wa.link/g15ceq",
  },
];

function Accessories() {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-600 text-2xl">
          <GiTrousers />
        </span>
        <h3 className="text-xl font-bold">Our Car Store</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] ">
        {accessoriesWear.map((acc, index) => (
          <Card
            key={index}
            image={acc.image}
            name={acc.name}
            price={acc.price}
            link={acc.link}
          />
        ))}
      </div>
    </div>
  );
}
