import React from "react";

const Nav = () => {
  return (
    <div>
      <div className=" w-full bg-blue-600 flex flex-row justify-around items-center">
        <h1 className=" font-extrabold text-xl">SELLZEE</h1>
        <ul className=" flex flex-row gap-4 font-semibold text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Testimonial</li>
          <li>Pricing</li>
        </ul>
        <button className=" w-40 h-10 bg-[orange] rounded-md font-medium text-xs text-[white]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Nav;
