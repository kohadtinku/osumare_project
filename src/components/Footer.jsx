import React from 'react'
import logo from '../assets/image.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import whats from '../assets/whats.png'
import pin from '../assets/pin.png'
import twit from '../assets/twt.png'
import yt from '../assets/yt.png'
const Footer = () => {
  return (
    <>
        <footer class="bg-gradient-to-r from-[#B2D6FF] via-[#B2D6FF]  to-[#B2D6FF] py-12 sm:px-16 max-sm:px-8 font-sans tracking-wide text-black">
    

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2">
        <img src={logo} className='h-[80px] mb-10' alt="" />
        <p className='text-black'>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
          <h4 class="text-lg mb-6 text-black mt-10">Address</h4>
          <p class="text-black mb-2 text-[15px]">Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
<div>
<h4 class="text-lg mb-6 text-black mt-10">Contacts</h4>
<li className='list-none flex gap-3'><img src={mail} alt="" /><p>hello@osumare.in</p></li>
<li className='list-none flex gap-3 mt-5'><img src={phone} alt="" /><p>+91 8459 8762 26</p></li>

</div>

        </div>

        

        <div>
          <h4 class="text-lg mb-6 text-black">Menu </h4>
          <ul class="space-y-5">
            <li><a href="javascript:void(0)" class="text-black hover:text-black text-[15px]">Home</a>
            </li>
            <li><a href="javascript:void(0)" class="text-black hover:text-black text-[15px]">About</a>
            </li>
            <li><a href="javascript:void(0)" class="text-black hover:text-black text-[15px]">Services</a>
            </li>
            <li><a href="javascript:void(0)" class="text-black hover:text-black text-[15px]">Work</a></li>
            <li><a href="javascript:void(0)" class="text-black hover:text-black text-[15px]">Blog</a></li>
            <li><a href="javascript:void(0)" class="text-black hover:text-black text-[15px]">Career</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg mb-6 text-black ">Social</h4>
          <ul class="flex flex-row flex-wrap justify-between gap-5 items-center ">
           <li><img src={twit} alt="" /></li>
           <li><img src={fb} alt="" /></li>
           <li><img src={yt} alt="" /></li>
           <li><img src={pin} alt="" /></li>
           <li><img src={whats} alt="" /></li>
           <li><img src={insta} alt="" /></li>
          </ul>
        </div>
      </div>

      <p class='text-black text-[15px] text-center font-bold mt-10'>© 2023 Osumare. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer