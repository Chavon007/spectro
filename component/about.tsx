import Image from "next/image";
import { IoDiamondOutline } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";
import { FaRocket } from "react-icons/fa";

const value = [
  {
    name: "Quality First",
    text: "We never compromise on quality. Every product is carefully inspected to ensure it meets our high standards",
    icon: <IoDiamondOutline />,
    color: "text-green-500",
  },
  {
    name: "Customer Trust",
    text: "Building trust through transparency, honesty, and reliable service is fundamental to our business.",
    icon: <LuHandshake />,
    color: "text-blue-500",
  },
  {
    name: "Innovation",
    text: "We stay ahead of trends to bring you the latest and best products in fashion and luxury goods.",
    icon: <FaRocket />,
    color: "text-purple-500",
  },
];

function About() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 bg-[#f1f1f0]">
      <div className="space-y-16">
        {/* ABOUT HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900">
            About Our Business
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Your one-stop destination for premium jeans, luxury cars, and
            stylish accessories. Quality and customer satisfaction are at the
            heart of everything we do.
          </p>
        </div>

        {/* OUR STORY SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-semibold text-gray-900">Our Story</h4>
            <p className="text-gray-700 leading-relaxed">
              Founded with a passion for quality and style, we've grown to
              become a trusted name in fashion and luxury goods. Our journey
              started with a simple vision: to provide customers with access to
              premium products that enhance their lifestyle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over the years, we've expanded our offerings from premium denim to
              include luxury vehicles and fashion accessories, always
              maintaining our commitment to excellence and customer
              satisfaction.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/jean.avif"
              alt=""
              width={300}
              height={300}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* MISSION SECTION */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <Image
              src="/car.jpg"
              alt=""
              width={300}
              height={300}
              className="rounded-xl shadow-md object-cover"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h4>
            <p className="text-gray-700 leading-relaxed">
              We are dedicated to bringing you the finest selection of jeans,
              cars, and accessories. Our mission is to make premium quality
              accessible to everyone while providing exceptional customer
              service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in building lasting relationships with our customers
              through trust, transparency, and delivering on our promises. Every
              product we offer is carefully selected to meet our high standards.
            </p>
          </div>
        </div>

        {/* VALUES SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {value.map((chuz, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`text-5xl mb-4 ${chuz.color}`}>{chuz.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {chuz.name}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {chuz.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
