"use client";

interface sidebarProps {
  onSelect: (value: "cars" | "accessories" | "jeans") => void;
}

function Catesidebar({ onSelect }: sidebarProps) {
  return (
    <div className="bg-[#f1f1f0] w-[100%] h-[100vh] border-r-1 border-gray-800">
      <div className="w-[90%] mx-auto flex flex-col gap-2  ">
        <div className="mt-[10px] p-[10px] ">
          <p className="text-gray-400 italic text-4xl p-[10px] font-bold font-roboto">
            Select categories to see product
          </p>
        </div>
        <div className=" flex flex-col h-auto  gap-4 py-[10px]">
          <h5
            className="border-b-1 border-gray-500 p-[10px] text-2xl font-lora text-gray-500 italic"
            onClick={() => onSelect("cars")}
          >
            Cars
          </h5>
          <h5
            className="border-b-1 border-gray-500 p-[10px] text-2xl font-lora text-gray-500 italic"
            onClick={() => onSelect("jeans")}
          >
            Jeans
          </h5>
          <h5
            className=" p-[10px] text-2xl font-lora text-gray-500 italic"
            onClick={() => onSelect("accessories")}
          >
            Accesories
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Catesidebar;
