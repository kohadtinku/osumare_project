import React from "react";
import back from "../assets/back.png";
import img from "../assets/Header.png";
import side from "../assets/Ellipse.png";
import img1 from "../assets/cuate.png";
const Hero = () => {
  return (
    <>
      <div
        className="hero bg-cover bg-center gap-10 h-screen flex  flex-col font-Montserrat justify-center items-center text-center text-black"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="main flex flex-row gap-10 justify-center ">
          <div className="sub-text gap-5 justify-center">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-4 font-Montserrat">
              Elevate{" "}
              <span className="text-[#0078FF]"> Real Estate Success</span> with{" "}
              <br />
              Osumare's Digital Expertise
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </p>
            <button className="px-6 py-3 bg-[#0078FF] rounded-3xl  text-white w-[250px] hover:bg-sky-700 transition">
              Get Started
            </button>
          </div>

          {/* <div>
              <img className="h-[600px]" src={side} alt="" />              
            </div> */}
        </div>
        <div className="header-img">
          <img className="h-[300px]" src={img} alt="" />
        </div>
      </div>

      <h1 className="mt-10 font-bold text-center py-5 text-2xl md:text-3xl">
        Real Estate-Focused Digital Mastery
      </h1>
      <div className="section2 flex flex-col md:flex-row justify-center gap-10 py-10">
        <div className="block1">
          <img
            src={img1}
            className="h-[200px] w-[300px] md:h-[250px] md:w-[350px] lg:h-[300px] lg:w-[400px]"
            alt=""
          />
        </div>
        <div className="block2 w-full md:w-[700px] flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Unlock the Potential of Digital Real Estate Excellence
          </h1>
          <p className="text-lg md:text-xl">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>
          <button className="rounded-3xl bottom-1 bg-[#0078FF] px-5 py-3 w-[200px] text-white">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
