import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white bg-[#006d77]  flex items-center justify-center  font-semibold w-12 h-12">
      <input
        type="text"
        placeholder="Search for movies..."
        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      ></input>
    </div>
  );
};

export default Header;
