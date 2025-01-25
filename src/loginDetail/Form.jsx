import React from "react";

export default function Form(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Form Details</h2>
    <form>
      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* NIC Number Input */}
      <div className="mb-4">
        <label htmlFor="nic" className="block text-gray-700 font-medium">
          NIC Number
        </label>
        <input
          type="text"
          id="nic"
          name="nic"
          placeholder="Enter your NIC number"
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  </div>
</div>

    )
}