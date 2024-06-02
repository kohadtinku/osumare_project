import React from "react";

const Section5 = () => {
  return (
    <>
       <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="tel"
                id="phone"
                name="phone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="email"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="message"
              name="message"
              rows="8"
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 flex items-center justify-center">
            <button
              type="submit"
              className="w-[300px] text-center inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Section5;
