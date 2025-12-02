"use client";

import { TbMoneybag } from "react-icons/tb";
import { FaRocketchat } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";

const choose = [
  {
    name: "Quality Guaranteed",
    text: "We ensure all products meet the highest standards",
    icon: <IoMdCheckmark />,
    color: "text-green-500",
  },
  {
    name: "Fast Delivery",
    text: "Quick and reliable delivery to your doorstep",
    icon: <CiDeliveryTruck />,
    color: "text-blue-500",
  },
  {
    name: "24/7 Support",
    text: "Always here to help via WhatsApp",
    icon: <FaRocketchat />,
    color: "text-purple-500",
  },
  {
    name: "Best Prices",
    text: "Competitive pricing on all products",
    icon: <TbMoneybag />,
    color: "text-yellow-500",
  },
];

function Choose() {
  return (
    <div className="bg-[#f1f1f0] h-[60vh]  p-[30px]">
      <div className=" w-[100%] md:w-[90%] mx-auto mt-[50px] h-auto">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Why Choose Us</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {choose.map((chuz, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center
                       hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`text-5xl mb-4 ${chuz.color}`}>{chuz.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {chuz.name}
              </h4>
              <p className="text-gray-600 text-sm">{chuz.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Choose;
