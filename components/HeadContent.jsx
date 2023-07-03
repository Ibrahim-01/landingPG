import React from "react";
import tablet from "../assest/Pixel True Mockup 1.png";

const HeadContent = () => {
  return (
    <div className=" w-screen h-[100%] flex flex-row justify-around align-middle items-center">
      <div className=" w-[20%] h-[70%] bg-transparent flex flex-col items-start">
        <p className=" text-white text-xs font-semibold">
          INSPIRATION TECHNOLOGY
        </p>
        <h1 className=" font-bold text-2xl text-white ">Runs Faster</h1>
        <h2 className=" text-base text-white">Costs Less and</h2>
        <h2 className=" text-base text-white">never break</h2>

        <div className=" w-full h-[1px] bg-white"></div>
        <h6 className=" text-white font-medium text-[12px] text-left pt-5 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolorum
          deserunostrum modi. Facere, impedit?
        </h6>
        <div className=" gap-6 flex flex-row w-full mt-5">
          <button className=" w-28 bg-[orange] font-medium text-xs text-white">Get Started</button>
          <button className=" bg-[orange]  text-white w-28 h-6 font-medium bg-transparent border-[gray] border-2 ">Free Trial</button>
        </div>
      </div>
      <img src={tablet} alt="tablet-pics" className=" w-[30%] h-[70%]" />
    </div>
  );
};

export default HeadContent;
