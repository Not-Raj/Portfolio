"use client";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import h44 from "../../Images/h44.png";
import h55 from "../../Images/h55.webp";
import h66 from "../../Images/h66.webp";
import hh from "../../Images/hh.webp";
import h88 from "../../Images/h88.webp";
import d4 from "../../Images/d4.jpeg";
import d5 from "../../Images/d5.jpeg";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
// app/about/page.tsx
export default function work() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-[4.3rem]">
        <div className="h-[90%] w-[90%] flex justify-center bg-white">
          <div className="txt-1 w-[80%] lg:w-[68%] font-nr text-[2rem] mt-5 lg:ml-12">
            <p className="text-[#807d7d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Selected projects</p>
            <p className="mb-5 text-3xl font-semibold"> Discover my standout UI/UX designs, where creativity meets functionality to shape seamless and engaging user experiences.</p>
          </div>
        </div>
      </div>



      <div className='Projectdiv'>
        <div className=" flex justify-center flex-col lg:flex-row items-center lg:gap-8 ">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 dark:text-white"
              >
                Vivax
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
              >
                It is a website design of a Digital Marketing Agency
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={h55}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-end items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View in figma
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 dark:text-white"
              >
                Amorr
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
              >
                A Landing page for a Dating App named Amorr
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={h66}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-end items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View in figma
                </CardItem>
              </div>
            </CardBody>
          </CardContainer></div>
        <div className=" flex justify-center flex-col lg:flex-row items-center lg:gap-10">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 dark:text-white"
              >
                Matrix Innovation
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
              >
                It is a website design of tech innovation startup
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={h44}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-end items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View in figma
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 dark:text-white"
              >
                Grayy
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
              >
                Landing page of a Startup Equity Trading Company based on Blockchain.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={h88}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-end items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View in figma
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 dark:text-white"
              >
                SSK Cars
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
              >
                It is an App design for a luxury car selling brand.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={hh}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-end items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View in figma
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
