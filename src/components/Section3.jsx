import React from "react";
import { cardData1 } from "../data";
import img1 from '../assets/Frame 892.png'
import '../App.css'
const Section3 = () => {
  return (
    <>
    <div className="container  text-center my-8">
        <h1 className="text-3xl font-bold mb-4">
          Navigating Real Estate's Digital Landscape
        </h1>
        <p className="text-lg text-gray-600">
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




// import React from "react";
// import { cardData1 } from "../data";
// import img1 from '../assets/Frame 892.png';

// const Section3 = () => {
//   return (
//     <>
//       <div className="container mx-auto text-center my-8 px-4">
//         <h1 className="text-3xl font-bold mb-4">
//           Navigating Real Estate's Digital Landscape
//         </h1>
//         <p className="text-lg text-gray-600">
//           Insights for Real Estate Marketing Advantage
//         </p>
//       </div>
//       <div className="main flex flex-col lg:flex-row items-center lg:items-start justify-center lg:px-10 px-4">
//         <div className="card-container grid gap-6 lg:grid-cols-2 xl:grid-cols-4 py-10 w-full">
//           {cardData1.map(({ img, title, text }) => (
//             <div
//               className="card border rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto"
//               key={title}
//             >
//               <img
//                 src={img}
//                 alt={title}
//                 className="card-img h-[50px] w-full object-contain"
//               />
//               <div className="card-content p-4">
//                 <h3 className="text-xl font-bold mb-2">{title}</h3>
//                 <p className="text-gray-700">{text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="img mt-8 lg:mt-0 lg:ml-8 w-full max-w-sm mx-auto">
//           <img src={img1} alt="" className="w-full h-auto"/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section3;
