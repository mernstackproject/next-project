import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to My Website!
        </h1>
        <p className="text-gray-600 mb-6">
          This is a simple, clean homepage layout to get you started. Customize
          this section to showcase what your site is all about. You can add more
          sections, include images, or provide links to other important parts of
          your site.
        </p>
        <Link
          href="/about"
          className="inline-block text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-6 py-3 transition duration-300 ease-in-out"
        >
          Learn More About Us
        </Link>
      </div>
    </div>
  );
}
