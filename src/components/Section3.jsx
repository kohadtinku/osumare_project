import React from "react";
import { cardData1 } from "../data";
import img1 from '../assets/Frame 892.png'
import '../App.css'
const Section3 = () => {
  return (
    <>
    <div className="container flex flex-col items-center justify-center text-center my-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Navigating Real Estate's Digital Landscape
        </h1>
        <p className="text-lg text-center text-gray-600">
          Insights for Real Estate Marketing Advantage
        </p>
      </div>
      <div className="main flex">
        <div className="card-container c-card flex flex-col justify-center gap-6 lg:grid-cols-4 py-10 px-10 " style={{alignItems:"center",position:"absolute"}}>
          {cardData1.map(({ img, title, text }) => (
            <div
              className="card custom-card  border rounded-lg shadow-md overflow-hidden w-[500px] flex flex-row justify-center align-center text-center"
              key={title}
            style={{alignContent:"center",alignItems:"center"}}>
              <img
                src={img}
                alt={title}
                className="card-img  h-[50px]  flex align-center object-contain justify-center text-center"
              />
              <div className="card-content p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="img" style={{marginLeft:"450px"}}>
            <img src={img1} className="h-auto w-auto c_img"  alt="" />
        </div>
      </div>
    </>
  );
};

export default Section3;



