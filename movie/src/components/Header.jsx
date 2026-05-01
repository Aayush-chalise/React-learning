import React from "react";

const Header = () => {
  return (
    <div className="w-full  bg-white flex items-center justify-between border-b border-black/10 py-2  font-semibold h-12">
      <div className="font-bold text-xl">Icon</div>
      <input
        type="text"
        placeholder="Search for movies..."
        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded py-2 px-4"
      ></input>
    </div>
  );
};

export default Header;
