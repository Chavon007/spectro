import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const reachout = [
  {
    platform: "Whatsapp",
    link: "https://wa.link/g15ceq",
    icon: <FaWhatsapp className="text-green-500" />,
    textColor: "text-green-600",
  },
  {
    platform: "Instagram",
    link: "https://wa.link/g15ceq",
    icon: <FaInstagram className="text-pink-500" />,
    textColor: "text-pink-600",
  },
  {
    platform: "Facebook",
    link: "https://wa.link/g15ceq",
    icon: <FaFacebookF className="text-blue-600" />,
    textColor: "text-blue-600",
  },
  {
    platform: "X",
    link: "https://wa.link/g15ceq",
    icon: <FaXTwitter className="text-black" />,
    textColor: "text-black",
  },
];

function Contact() {
  return (
    <div className="w-full py-16 px-6 bg-[#f1f1f0]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center space-y-3">
          <h4 className="text-3xl font-bold text-gray-800 tracking-wide font-roboto">
            Contact Us
          </h4>
          <p className="text-gray-600 text-1xl max-w-lg font-lora">
            We'd love to hear from you. Reach out to us on any of these
            platforms.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-1 w-full">
          {reachout.map((con, index) => (
            <div key={index} className="flex justify-center">
              <Link
                href={con.link}
                className="w-full flex items-center gap-4 py-[10px] px-[10px] 
                sm:py-5 sm:px-6 bg-white rounded-2xl shadow-md 
                hover:shadow-xl transition-all duration-300 
                border border-gray-100 hover:-translate-y-1"
              >
                <span className="text-3xl">{con.icon}</span>
                <span className={`text-lg font-semibold ${con.textColor}`}>
                  {con.platform}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
