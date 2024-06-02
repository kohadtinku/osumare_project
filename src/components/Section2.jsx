import React from 'react';
import {cardData} from '../data';

const Section2 = () => {
  return (
    <>
      <div className="container text-center my-8">
        <h1 className="text-3xl font-bold mb-4">Our Service Offerings</h1>
        <p className="text-lg text-gray-600">Strategies that Drive Property Market Excellence</p>
      </div>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 py-10 px-10 ">
        {cardData.map(({ img, title, text }) => (
          <div className="card border rounded-lg shadow-md overflow-hidden py-2 flex flex-col justify-center align-center text-center" key={title}>
            <img src={img} alt={title} className="card-img  h-[50px] object-contain justify-center" />
            <div className="card-content p-4">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn text-center">
      <button className="rounded-3xl bottom-1 bg-[#0078FF] px-5 py-3 w-[200px] text-white"> Get Started</button>
      </div>
    </>
  );
};

export default Section2;
