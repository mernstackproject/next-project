'use client'

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <div className="mb-6 text-center">
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Please fill out the form below or reach
            us through our contact information.
          </p>
          <ul className="list-none space-y-2">
            <li>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              <a
                href="mailto:contact@yourdomain.com"
                className="text-teal-600 hover:underline"
              >
                contact@yourdomain.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-800">Phone:</span>{" "}
              <a
                href="tel:+1234567890"
                className="text-teal-600 hover:underline"
              >
                (123) 456-7890
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-800">Address:</span> 123
              Your Street, City, Country
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
