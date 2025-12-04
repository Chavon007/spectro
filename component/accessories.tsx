import Card from "./card";
import { FaBagShopping } from "react-icons/fa6";

const accessoriesWear = [
  {
    name: "Leather Belt",
    image: [
      "https://i.pinimg.com/1200x/db/f5/3a/dbf53a1135eca8359733f49ccaab4ee7.jpg",
      "https://i.pinimg.com/1200x/56/bf/0a/56bf0aa485ab5e68ab717a08d13cb4ee.jpg",
      "https://i.pinimg.com/1200x/ff/65/68/ff6568a6bc2a560743a6681e9af65e34.jpg",
    ],
    price: 8000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Sunglasses - Aviator Style",
    image: [
      "https://i.pinimg.com/1200x/0e/45/53/0e455356bc54a38e572f44803dd65c05.jpg",
      "https://i.pinimg.com/1200x/ef/23/0e/ef230ec477aa2f98ae44b81e2806594e.jpg",
      "https://i.pinimg.com/1200x/ca/f7/15/caf71512e538d33ff57881427be9aab1.jpg",
    ],
    price: 12000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Wrist Watch - Classic Leather Strap",
    image: [
      "https://i.pinimg.com/736x/d3/00/e8/d300e81121238ded2bf4c875d1e389bd.jpg",
      "https://i.pinimg.com/736x/88/dc/1c/88dc1c3ab7fc882fd7d6e18fedb1efac.jpg",
    ],
    price: 45000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Silver Chain Necklace",
    image: [
      "https://i.pinimg.com/1200x/cd/c4/cf/cdc4cf896457a2ee4a619c9a45b95d4b.jpg",
      "https://i.pinimg.com/1200x/2d/24/bc/2d24bc80ce7fc720fc860c770a6c1f35.jpg",
      "https://i.pinimg.com/1200x/df/2f/72/df2f728da23b2b1ee3fc8fcf044439c4.jpg",
    ],
    price: 15000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Baseball Cap",
    image: [
      "https://i.pinimg.com/1200x/54/c8/09/54c809a4f569a463bba6ce1137cc54d2.jpg",
      "https://i.pinimg.com/736x/e6/b8/b9/e6b8b98f3ea51c9e9e34aaec69166b7c.jpg",
      "https://i.pinimg.com/736x/90/fd/0d/90fd0d61c31ee0d5af48911ff5fc1b44.jpg",
    ],
    price: 7000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Leather Wallet",
    image: [
      "https://i.pinimg.com/1200x/9d/77/fd/9d77fda8e26654275627ba27702be43e.jpg",
      "https://i.pinimg.com/1200x/ff/c3/9e/ffc39e9e81c27751bf7583ff2734db48.jpg",
      "https://i.pinimg.com/1200x/72/17/31/72173108a5598d8d4afe6142d80c542a.jpg",
    ],
    price: 10000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Bracelet - Beaded",
    image: [
      "https://i.pinimg.com/1200x/97/d4/85/97d485943cccfd9bf6d6f91b299a0aa5.jpg",
      "https://i.pinimg.com/1200x/3d/75/cd/3d75cd19be4dbcbdc773b9ba77a89b0c.jpg",
      "https://i.pinimg.com/1200x/79/85/79/798579783cb2aa22deb5594d726dff61.jpg",
    ],
    price: 5000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Tie - Silk",
    image: [
      "https://i.pinimg.com/1200x/83/ae/8b/83ae8bf51ec323f54a157ef2d3d1609c.jpg",
      "https://i.pinimg.com/736x/4a/67/78/4a6778a9c28c8e295e816cd9e7a0ff83.jpg",
      "https://i.pinimg.com/1200x/0b/36/9a/0b369af9af29bdd27fafa760178b33cd.jpg",
    ],
    price: 9000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Earrings - Hoop",
    image: [
      "https://i.pinimg.com/1200x/dc/c1/b4/dcc1b41b2127b3b69578826059c023b7.jpg",
      "https://i.pinimg.com/1200x/96/f5/b7/96f5b7a50c428b30a318a88269868d36.jpg",
      "https://i.pinimg.com/1200x/3b/68/74/3b68747a924b1be6f49c9725cc29af9e.jpg",
    ],
    price: 8000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Backpack - Canvas",
    image: [
      "https://i.pinimg.com/1200x/79/cf/dd/79cfddddd4dba74371b6b165363a6925.jpg",
      "https://i.pinimg.com/736x/15/b7/e5/15b7e5ebefefbcfcaa714198edca1fe4.jpg",
      "https://i.pinimg.com/736x/15/03/a2/1503a2b2c7d0de096879eb9a6b47f0e5.jpg",
    ],
    price: 18000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Keychain - Metal",
    image: [
      "https://i.pinimg.com/1200x/c6/f1/ad/c6f1aded02c2ccc77173675692eea4cd.jpg",
      "https://i.pinimg.com/1200x/05/4a/32/054a325b1c234186bdd17e379538ce3f.jpg",
      "https://i.pinimg.com/736x/70/fa/70/70fa7004a849234a91066d05d9be8baa.jpg",
    ],
    price: 3000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Scarf - Winter Wool",
    image: [
      "https://i.pinimg.com/736x/a5/80/3b/a5803bed25e814adefbfbafaf559e3f7.jpg",
      "https://i.pinimg.com/1200x/20/48/2b/20482b372d91f815d35afe3bf33f9002.jpg",
      "https://i.pinimg.com/1200x/25/97/2c/25972c2416aff002f8e3421d0e1d0c93.jpg",
    ],
    price: 12000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Hat - Fedora",
    image: [
      "https://i.pinimg.com/1200x/f8/fa/ba/f8fabae4df81e6154985e64e7d5c8df0.jpg",
      "https://i.pinimg.com/736x/29/45/6a/29456a99681c2cd7e2a4779a5f57bb3a.jpg",
      "https://i.pinimg.com/1200x/3f/e0/c7/3fe0c7fb39276600637ee3e01f260402.jpg",
    ],
    price: 15000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Pocket Square",
    image: [
      "https://i.pinimg.com/736x/93/98/3d/93983d8bae9caac3a264113cf1c38d48.jpg",
      "https://i.pinimg.com/1200x/cd/ab/29/cdab296a88a03abd4c55468f22449745.jpg",
      "https://i.pinimg.com/1200x/42/e2/fb/42e2fba274e8d6cb5fd312a18d367d2b.jpg",
    ],
    price: 6000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Socks - Cotton Pack of 3",
    image: [
      "https://i.pinimg.com/736x/ff/b2/79/ffb2798b16f910b4239f2f7dee729415.jpg",
      "https://i.pinimg.com/736x/28/35/27/2835277b279818c15c3d8615f898a83b.jpg",
      "https://i.pinimg.com/1200x/34/61/af/3461af7dae7e10ed92062d6d4e4b6cc9.jpg",
    ],
    price: 4000,
    link: "https://wa.link/g15ceq",
  },
];

function Accessories() {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-700 text-3xl">
          <FaBagShopping />
        </span>
        <h3 className="text-xl font-roboto text-gray-800 font-bold">Our Accessories Store</h3>
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
export default Accessories;
