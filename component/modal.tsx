"use client";

import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal({ isOpen, onClose, children }: modalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-xl shadow-2xl  w-[40%] mx-4 max-h-[90vh] overflow-y-auto p-6">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
          onClick={onClose}
        >
          <IoClose size={26} />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
