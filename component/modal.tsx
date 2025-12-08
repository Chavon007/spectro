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
    <div>
      <div>
        <button onClick={onClose}>
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
