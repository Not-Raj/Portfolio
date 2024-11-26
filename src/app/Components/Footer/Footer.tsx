import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar/Navbar'

const Footer = () => {
  return (
    <footer className="bg-black h-[] lg:h-[34rem] mt-10">
      <div className="flex justify-center flex-col lg:flex-row items-center h-[70%] gap-7">
        <div className="w-[90%] lg:w-[30%] h-[80%]  mt-10">
          <p className="text-[27px] font-bold mb-7 text-white">Open to consulting work</p>
          <p className="text-3xl font-bold text-[#bdb5b5]">Reach out if you're looking for a UI/ UX designer.</p>
        </div>
        <div className="w-[90%] lg:w-[30%] h-[80%] mt-10 lg:mr-[-100px]">
          <p className="text-white text-xl font-bold  xl:w-[60%] mb-7">CURRENT VENTURE -</p>
          <p className="text-[#bdb5b5] text-xl w-[70%]">I’m currently working with Matrix Innovation as a UI/UX designer and graphic designer, where I focus on creating user-centered designs that enhance product experiences and drive engagement.</p>
        </div>
        <div className="w-[90%] lg:w-[30%] h-[80%] lg:mr-[0px] mt-10">
          <div className="h-[30%] mb-12">
            <p className="text-white text-xl font-bold w-[50%]">LOCATION -</p>
            <p className="text-[#bdb5b5] text-xl w-[70%]">Currently located in the vibrant city of Lucknow, known for its rich culture and heritage.</p>
          </div>
          <div className="h-[30%] mb-16 lg:mb-0 ">
            <p className="text-white text-xl font-bold w-[50%]">CONTACT -</p>
            <p className="text-[#bdb5b5] text-xl w-[70%]">You can always reach me -&#62; raj.vardhan.vishwakarma9793@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[15%] flex justify-center pb-10">
        <Navbar />

      </div>
    </footer>
  )
}

export default Footer
