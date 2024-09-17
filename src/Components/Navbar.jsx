import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-16 flex justify-between items-center px-6 py-4 shadow-md border-b border-gray-700">
      {/* Logo or Brand Name */}
      <div className="text-white text-2xl font-bold">
        <Link href="/">
          <div>MyBrand</div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link href={"/about"}>
          <div className="text-white hover:text-teal-300 font-medium text-lg transition duration-300 ease-in-out border-b-2 border-transparent hover:border-teal-300 pb-1">
            About
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="text-white hover:text-teal-300 font-medium text-lg transition duration-300 ease-in-out border-b-2 border-transparent hover:border-teal-300 pb-1">
            Contact
          </div>
        </Link>
        <Link href={"/"}>
          <div className="text-white hover:text-teal-300 font-medium text-lg transition duration-300 ease-in-out border-b-2 border-transparent hover:border-teal-300 pb-1">
            Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
