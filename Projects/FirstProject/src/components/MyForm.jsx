import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);

    setName("");
    setEmail("");
  };

  return (
    <div className="container border-2 border-yellow-500  p-4 mx-auto  ">
      <h2 className="text-2xl font-bold mb-4 border-2 border-pink-500 text-center mx-auto">
        Contact Us
      </h2>{" "}
      {/* Centered heading */}
      <form
        onSubmit={handleSubmit}
        className="border-2 mx-auto border-red-500 max-w-md "
      >
        <div
          className="border-2 w-full
        border-blue-500  mb-4"
        >
          <label htmlFor="name" className=" block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow border rounded w-full py-2 px-3 appearance-none text-gray-700 leading-tight focus:outline-none 
            focus:shadow-outline focus:ring-2 focus:ring-blue-500" // Added focus ring
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 border-2 border-black">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" // Added focus ring
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex border-2 border-indigo-500 justify-center">
          {" "}
          {/* Center the button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
            focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" // Added focus ring
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
