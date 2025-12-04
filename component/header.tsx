"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const navlinks = [
  {
    links: "/",
    name: "Home",
  },
  {
    links: "/about",
    name: "About",
  },
  {
    links: "/categories",
    name: "Categories",
  },
  {
    links: "/contact",
    name: "Contact",
  },
];

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-[100%] h- auto p-[10px] bg-[#f1f1f0] border-b-1 border-gray-800 ">
      <div className="w-[95%] mx-auto flex justify-between items-center">
        {/* logo */}
        <div className=" w-[10%] p-[10px]">
          <h2 className="text-[#333333] font-bold text-3xl font-lora">
            Spectro
          </h2>
        </div>

        {/* navbar link */}
        <div className=" hidden lg:block w-[50%]">
          <div className="flex justify-between items-center p-[10px] gap-4">
            {navlinks.map((link, index) => (
              <div key={index}>
                <Link
                  className="font-semibold text-1xl font-lora hover:text-blue-800"
                  href={link.links}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* navbar menu */}
        <div onClick={() => setMenu(!menu)} className="lg:hidden text-3xl z-60">
          {menu ? <IoClose /> : <IoMdMenu />}
        </div>

        {/* mobile menu */}

        {menu && (
          <div className=" lg:hidden fixed inset-0 flex flex-col bg-gray-500 justify-center items-center gap-4 z-50">
            {navlinks.map((link, index) => (
              <div onClick={() => setMenu(false)} key={index}>
                <Link
                  className="text-2xl font-lora hover:text-blue-800"
                  href={link.links}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
