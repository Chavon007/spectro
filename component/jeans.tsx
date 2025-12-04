"use client";

import Card from "./card";
import { GiTrousers } from "react-icons/gi";

const Jeanwear = [
  {
    name: "Zara Men's Straight Fit Jeans",
    image: [
      "https://static.zara.net/assets/public/5de2/55ea/e7134e27a3bf/e955911abd11/05155304400-000-a4/05155304400-000-a4.jpg?ts=1759243564118&w=750",
      "https://static.zara.net/assets/public/7795/f5b8/fa2046b19778/dd8a9244d79a/05155303400-a1/05155303400-a1.jpg?ts=1758643208017&w=602",
      "https://static.zara.net/assets/public/2b88/dbd3/c94f44fba0d9/c37ced3a7c30/05155303400-e1/05155303400-e1.jpg?ts=1758534291166&w=602",
      "https://static.zara.net/assets/public/0df9/31b5/a7cc4c8dac88/949521886438/05155303400-e3/05155303400-e3.jpg?ts=1758534291987&w=602",
    ],
    price: 25000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Levi's 511 Slim Fit Jeans",
    image: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhJi5kr0-6YnK4G1Dsc0QfYtSx50PwP26vsuatLDR2V0it6JxB2dSx9EgpbAOBcObItvsZJD0wkjobMQhAtATPKZWvanA3iZbEpvfUdg16uld5qkvoYpjB6epI1NkQz985Jxif9Ns&usqp=CAc",
      "https://i.ebayimg.com/images/g/79QAAOSwV9BlxXaK/s-l960.webp",
      "https://i.ebayimg.com/images/g/0NYAAOSwdfVlxXaK/s-l960.webp",
      "https://i.ebayimg.com/images/g/k5AAAOSwG1FlxXaK/s-l140.webp",
    ],
    price: 38000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Gucci Inspired Ripped Denim Jeans",
    image: [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GcEzsOB0kUlNiYnP9xW8lySj0i5hhXcB9R9DXjyblbjKcjMY",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2KH-kE0DVz_8Co-kFoTpDguoXDkldZtTRloezkQgDRsz8lzZj",
    ],
    price: 18000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Vintage High-Waist Blue Jeans (Women)",
    image: [
      "https://i.ebayimg.com/images/g/bbYAAeSw~8xos1PG/s-l960.webp",
      "https://i.ebayimg.com/thumbs/images/g/A9IAAeSw0Y1os1PG/s-l960.webp",
      "https://i.ebayimg.com/images/g/AWkAAeSwcr1os1eB/s-l960.webp",
      "https://i.ebayimg.com/images/g/8XkAAeSw63hos1eB/s-l960.webp",
    ],
    price: 15000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "H&M Slim Stretch Jeans",
    image: [
      "https://image.hm.com/assets/hm/c8/f2/c8f24ec059c75f4b3732d6d7d9cfc926c73cf6f6.jpg?imwidth=180",
      "https://image.hm.com/assets/hm/f4/d1/f4d1f2bd70cca7255632668a79e048593825fb9a.jpg?imwidth=1260",
    ],
    price: 26000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Men’s Cargo Denim Joggers",
    image: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7MTv27izRdII0ZRQ9joSQfADslE0U9fuJGzm-eA2YioXaEge9UZHlA_oaYvPlUOxyOZQh34jSfG4eSHPBQNSxYkkqK94LA1kTK4W6HcMxipL9oYhvR4tc&usqp=CAc",
      "https://img.kwcdn.com/product/fancy/32927d81-ff75-4a31-be6b-3fb4d143e634.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://img.kwcdn.com/product/fancy/bc059085-cff4-45f6-8d23-7e52f756431d.jpg?imageView2/2/w/800/q/70/format/avif",
    ],
    price: 20000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Balenciaga Inspired Baggy Jeans",
    image: [
      "https://i.ebayimg.com/images/g/YOIAAeSwEGlpEKwM/s-l960.webp",
      "https://i.ebayimg.com/images/g/b9sAAeSwBYdpEKwL/s-l960.webp",
      "https://i.ebayimg.com/images/g/arQAAeSw2~NpEKwL/s-l960.webp",
      "https://i.ebayimg.com/thumbs/images/g/ZWIAAeSw-GBpEKwK/s-l960.webp",
    ],
    price: 30000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Ladies Mom Jeans – Light Blue",
    image: [
      "https://i.pinimg.com/1200x/24/bc/14/24bc149eac1f124b278e94ec06b2d54a.jpg",
      "https://www.usphonecards.com/products/super-stretch-high-waisted-wide-leg-jeans?variant=4d5a35a2-222a-4375-abb1-d43acb9f7604&pp=0",
    ],
    price: 17000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Diesel Slim Tapered Jeans",
    image: [
      "https://i.ebayimg.com/images/g/eNwAAeSwtN9pI6Xb/s-l960.webp",
      "https://i.ebayimg.com/images/g/6mkAAeSwxJ9pI6Xb/s-l960.webp",
      "https://i.ebayimg.com/images/g/j6QAAeSwPOlpI6Xb/s-l960.webp",
    ],
    price: 42000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Straight Cut Turkish Denim",
    image: [
      "https://img-1.kwcdn.com/thumbnail/s/c7a932633ed05cb31acbb3e59e560d33_2f3559ef022d.jpg?imageView2/2/w/1300/q/80/format/avif",
      "https://img.kwcdn.com/product/aisc_image/algo/pass/23c9af5e-bb09-4e4e-a13a-ceff9b3e33ae.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://img.kwcdn.com/product/aisc_image/algo/pass/7e8186d3-c578-425d-8f56-4a09a5abb79f.jpg?imageView2/2/w/800/q/70/format/avif",
    ],
    price: 16000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Men's Distressed Ripped Jeans",
    image: [
      "https://static.zara.net/assets/public/d9e1/6f68/483e4494825f/5d7fadbbe306/07223377407-p/07223377407-p.jpg?ts=1756281268276&w=1024",
      "https://static.zara.net/assets/public/6557/0112/f3f5415182b4/a21dc4e17340/07223377407-a2/07223377407-a2.jpg?ts=1756281268244&w=1024",
      "https://static.zara.net/assets/public/a361/05ab/09c8403eb54b/c092efabf5c6/07223377407-a3/07223377407-a3.jpg?ts=1756281268308&w=1024",
    ],
    price: 18000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Women’s Skinny Stretch Jeans",
    image: [
      "https://img.kwcdn.com/thumbnail/s/a6300c9fd469eab6b656f72074add313_3de912a3a1a7.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://img.kwcdn.com/product/aisc_image/algo/pass/cea9921d-c23c-467c-9fd7-2bb70d665a3e.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://img.kwcdn.com/product/aisc_image/algo/pass/576c9688-ede0-48f9-b5af-b602a45c91df.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://img.kwcdn.com/product/aisc_image/algo/pass/0ae55145-9ca0-436a-8a45-d44ffe6d6261.jpg?imageView2/2/w/800/q/70/format/avif",
    ],
    price: 14000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Jack & Jones Slim Fit Jeans",
    image: [
      "https://images.jackjones.com/12243599/4313226/003/jackjones-jjiglennjjoriginalsq349noos-grey.jpg?v=2a30d8f0a67d71d591cacfc088835a57&format=webp&width=860&quality=95&key=25-0-1&bg-color=%23f5f5f5",
      "https://images.jackjones.com/12246949/4356139/003/jackjones-jjiglennjjoriginalsq356noos-black.jpg?v=0641e02ced0aef6509d852a86addd61e&format=webp&width=860&quality=95&key=25-0-1&bg-color=%23f5f5f5",
      "https://images.jackjones.com/12259055/4523337/003/jackjones-jjiglennjjoriginalsq260noos-blue.jpg?v=a50972db0a9af35e8515442cb7437693&format=webp&width=860&quality=95&key=25-0-1&bg-color=%23f5f5f5",
      "https://images.jackjones.com/12259062/4523346/003/jackjones-jjiglennjjoriginalsq430noos-blue.jpg?v=20bb4dc0154d5641315ce1ac5aa17d90&format=webp&width=860&quality=95&key=25-0-1&bg-color=%23f5f5f5",
    ],
    price: 32000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Baggy Wide-Leg Denim (Unisex)",
    image: [
      "https://i.ebayimg.com/images/g/gycAAeSwwV9oyM2y/s-l1600.webp",
      "https://i.ebayimg.com/images/g/OuMAAeSwadloyM1y/s-l960.webp",
      "https://i.ebayimg.com/images/g/XeEAAeSwUeFoyM1y/s-l960.webp",
      "https://i.ebayimg.com/images/g/VPsAAeSwJoJoyM1y/s-l960.webp",
    ],
    price: 23000,
    link: "https://wa.link/g15ceq",
  },
  {
    name: "Classic Straight Blue Jeans",
    image: [
      "https://i.ebayimg.com/images/g/zRcAAOSw2g1mjTYP/s-l1600.webp",
      "https://i.ebayimg.com/images/g/TzoAAOSw0wJmjTYQ/s-l140.webp",
      "https://i.ebayimg.com/images/g/K0EAAeSwjxBpAzfJ/s-l140.webp",
    ],
    price: 15000,
    link: "https://wa.link/g15ceq",
  },
];

function Jeans() {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-600 text-2xl">
          <GiTrousers />
        </span>
        <h3 className="text-xl font-bold">Our Car Store</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] ">
        {Jeanwear.map((jean, index) => (
          <Card
            key={index}
            image={jean.image}
            name={jean.name}
            price={jean.price}
            link={jean.link}
          />
        ))}
      </div>
    </div>
  );
}
export default Jeans;
