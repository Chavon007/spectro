"use client";

interface sidebarProps {
  onSelect: (value: "cars" | "accessories" | "jeans") => void;
}

function Catesidebar({ onSelect }: sidebarProps) {
  return (
    <div>
      <div>
        <h5 className="" onClick={() => onSelect("cars")}>
          Cars
        </h5>
        <h5 onClick={() => onSelect("jeans")}>Jeans</h5>
        <h5 className="" onClick={() => onSelect("accessories")}>
          Accesories
        </h5>
      </div>
    </div>
  );
}
export default Catesidebar;
