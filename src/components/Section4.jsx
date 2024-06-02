import React, { useState } from "react";
import img1 from "../assets/bro.png";
import { expertise, property } from "../data";
import video from "../assets/Video.png";
import Avatar from "../assets/Avatar.png";
import symbol from "../assets/Symbol.png";
import btn1 from "../assets/btn1.png";
import btn2 from "../assets/btn2.png";
const Section4 = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpen2(!isOpen2);
  }

  return (
    <>
      <div className="Section4 mx-10">
        <h1 className="mt-10 font-bold text-center py-5 text-2xl md:text-3xl mx-10">
          Driving Property Inquiries to Conversions{" "}
        </h1>
        <p className="text-center text-2xl">
          Streamlined Strategies for Real Estate Success
        </p>
        <div className="section2 grid grid-cols-1 md:grid-cols-2 py-5 mx-10">
          <div className="block1">
            <img
              src={img1}
              className="h-[200px] w-[300px] md:h-[250px] md:w-[350px] lg:h-[300px] lg:w-[400px]"
              alt=""
            />
          </div>
          <div className="block2 w-full md:w-[600px] flex flex-col gap-3 py-5 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Optimized Path to Property Purchase{" "}
            </h1>
            <p className="text-lg md:text-xl">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <button className="rounded-3xl bottom-1 bg-[#0078FF] px-5 py-3 w-[200px] text-white">
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="subpart py-10">
        <h1 className="text-center font-bold text-3xl">
          Driving Property Inquiries to Conversions
        </h1>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  text-center py-10">
          {property.map((item) => (
            <div key={item.id} className="property-card p-4 rounded-lg gap-10">
              <img
                src={item.img}
                alt=""
                className="w-[100px] h-auto rounded-lg mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
              <p className="text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="subpart ">
        <h1 className="text-center font-bold text-3xl">
          Our Expertise in Action
        </h1>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center py-10">
          {expertise.map((item) => (
            <div key={item.id} className="property-card p-4 rounded-lg gap-10">
              <img
                src={item.img}
                alt=""
                className="w-[100px] h-auto rounded-lg mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
              <p className="text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex justify-center items-center mb-20">
        <div className="main flex justify-center items-center w-full">
          <div className="block2 w-full md:w-[600px] flex flex-col gap-3 items-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Your Peace of Mind
            </h1>
            <p className="text-lg md:text-xl">
              Through our conversion-focused strategies, we ensure that property
              seekers are not just visitors, but engaged prospects ready to make
              their next move in the real estate market.
            </p>
            <button className="rounded-3xl bg-[#0078FF] px-5 py-3 w-[200px] text-white mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="slider bg-white text-center  py-10 px-6 md:px-10 rounded-md items-center justify-center flex flex-col">
        <h1 className="text-3xl font-bold py-4">
          What Our Pharma Partners Say
        </h1>
        <p>Driving Transformations, One Brand at a Time</p>

        <div className="c-slider flex flex-col md:flex-row mt-6 w-full md:w-[fit-content] border-2 rounded-lg shadow-lg py-10 px-6 md:px-10">
          <div className="video">
            <img
              src={video}
              className="w-full md:w-[400px] mb-6 md:mb-0"
              alt="Video Thumbnail"
            />
          </div>
          <div className="text flex flex-col justify-start items-start text-start p-6 rounded-md ">
            <div className="flex items-center gap-4 mb-4">
              <img src={Avatar} alt="Avatar" />
              <p>Tabish Khan</p>
              <img className="h-5" src={symbol} alt="Symbol" />
            </div>
            <div>
              <p className="w-full md:w-[30vw]">
                Osumare's expertise in pharma marketing is unparalleled. Their
                strategies helped us navigate complex regulations while driving
                remarkable growth.
              </p>
            </div>
          </div>
        </div>
        <div className="btn flex items-center justify-center py-5 gap-5">
          <button>
            <img src={btn1} alt="" />
          </button>
          <button>
            <img src={btn2} alt="" />
          </button>
        </div>
      </div>

      <div className="dropdown py-10 mt-10 flex flex-col justify-center  rounded-lg items-center">
      <h1 className="text-3xl font-bold py-4">Frequently Asked Questions</h1>
      <p className="text-2xl">
        Pinpoint your audience with precision, ensuring your marketing efforts
        reach those most likely to engage with your brand.
      </p>
      <div className="main mt-10 border-[2px] mx-10 shadow-lg h-[fit-content]  flex flex-col top-0 py-10 w-[fit-content]">


      <div className="relative font-[sans-serif] w-[fit-content] mx-auto">
        <button
          type="button"
          className="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          onClick={toggleDropdown}
        >
          3. How does Osumare measure campaign success?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 fill-white inline ml-3 ${isOpen ? 'transform rotate-180' : ''}`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
              data-original="#000000"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute shadow-lg bg-white py-2 z-[1000] rounded  overflow-auto">
            <li className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">
            We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.
            </li>
          
          </ul>
        )}
      </div>
      <div className="relative font-[sans-serif] w-[fit-content] mx-auto">
        <button
          type="button"
          className="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          onClick={toggleDropdown1}
        >
          3. How does Osumare measure campaign success?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 fill-white inline ml-3 ${isOpen2 ? 'transform rotate-180' : ''}`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
              data-original="#000000"
            />
          </svg>
        </button>

        {isOpen2 && (
          <ul className="absolute shadow-lg bg-white py-2 z-[1000] rounded  overflow-auto">
            <li className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">
            We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.
            </li>
          
          </ul>
        )}
      </div>
     </div>
     </div>
    </>
  );
};

export default Section4;
