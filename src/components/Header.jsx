import React from 'react'
import logo from '../assets/image.png'
const Header = () => {
  return (
    <header class='flex  py-4 px-4 sm:px-10  font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
  <div class='flex flex-wrap items-center justify-between gap-5 w-full'>
    <a href="javascript:void(0)"><img src={logo} alt="logo" class='w-36' />
    </a>



    <div class='flex max-lg:ml-auto space-x-3'>
      <button
        class='px-4 py-2 text-sm rounded-full font-bold text-black border-2 border-black transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Contact us</button>
    </div>
  </div>
</header>
  )
}

export default Header