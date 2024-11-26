"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";

import About1 from "../../Images/home1.png"
import About2 from "../../Images/home2.png"
import About3 from "../../Images/home3.png"
import About4 from "../../Images/home4.png"

import Abouts1 from "../../Images/Abouts1.png";
import Abouts2 from "../../Images/Abouts2.png";
import Abouts3 from "../../Images/Abouts3.png";
import Abouts4 from "../../Images/Abouts4.png";
import Abouts5 from "../../Images/Abouts5.png";
import Abouts6 from "../../Images/Abouts6.png";

import p1 from "../../Images/p1.png";
import p2 from "../../Images/p2.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";
import p5 from "../../Images/p5.png";
import p6 from "../../Images/p6.png";
import p7 from "../../Images/p7.png";
import p12 from "../../Images/p12.png";

// import p8 from "../../Images/p8.png";
import p11 from "../../Images/p11.webp";
import Footer from "../Footer/Footer";

export default function AboutPage() {
  const imgSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (imgSectionRef.current) {
      observer.observe(imgSectionRef.current);
    }

    return () => {
      if (imgSectionRef.current) {
        observer.unobserve(imgSectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-[4.3rem]">
        <div className="h-[90%] w-[90%] flex justify-center bg-white mb-20">
          <div className="txt-1 lg:w-[65%] font-nr text-[2rem] mt-5 lg:ml-16">
            <p className="text-[#aaa5a5] text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-5">ABOUT  ME</p>

            <p className="mb-5 text-3xl font-semibold">
              I am a strategic, user-oriented product designer with over 4 years of experience in the field of UI/UX and graphic design.
            </p>
            {/* <p className="mb-7">
              I help companies achieve their business goals by solving user and product challenges through innovative design solutions.
            </p> */}
            <p className="text-3xl font-semibold">Analytical, outcome-driven, and highly collaborative, I work closely with teams to ensure each product delivers meaningful results and value</p>
          </div>
        </div>
        <div className="h-[90%] w-[90%] mb-20 mt-5" ref={imgSectionRef}>
          <div
            className={`img-sec flex justify-center bg-white items-center transition-all duration-1000 ease-in-out ${isVisible
              ? "opacity-100 translate-y-0 rotate-0"
              : "opacity-0 translate-y-[100px] rotate-6"
              }`}
          >
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About1} alt="Home1 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About2} alt="Home2 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About3} alt="Home3 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About4} alt="Home4 image" />
            </div>
          </div>
        </div>
        <div className=" txt-2 h-[90%] w-[90%] flex flex-col justify-center items-center bg-white mt-10">
          <div className=" lg:w-[65%]  flex justify-center items-center flex-col ">
            <div className="flex flex-col gap-4 mb-16">
              <p className="text-[#aaa5a5] text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">What I do </p>
              <p className=" text-2xl font-semibold">I help companies identify and solve product and user challenges by developing and executing design strategies that drive growth, improve retention, boost conversion, generate and scale revenue and more.</p>
              <p className=" text-2xl font-semibold"> I lead cross-functional teams through the product development process. I support and mentor designers and engineers and help them develop user-oriented approach to product.</p>
            </div>
            <div className="flex flex-col gap-4 mb-20">
              <p className="text-[#aaa5a5] text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">My design process</p>
              <p className=" text-2xl font-semibold">I start each project, large or small by understanding and framing the problem we're facing. Once the problem is well defined, I collaborate with the team to set clear, measurable goals that align with both project requirements and the broader company vision.</p>
              <p className=" text-2xl font-semibold"> Next, I conduct different types of research, based on the nature of the problem and the goals that we're trying to achieve. Finally, I craft a focused design strategy and develop a roadmap to guide the team toward successful execution.</p>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center flex-col">
          <div className="flex justify-center items-center mb-20 mt-5 w-[90%]">
            <div
              className="img-sec2 flex justify-between bg-white items-center gap-5"
            >
              <div className="m-4">
                <Image className="rounded-3xl" src={Abouts1} alt="Home1 image" />
              </div>
              <div className="m-4">
                <Image className="rounded-3xl" src={Abouts2} alt="Home1 image" />
              </div>
            </div>
          </div>
          <div className=" w-[100%] mb-20 mt-5 flex justify-center items-center flex-col">
            <div
              className="img-sec2 flex justify-center bg-white items-center gap-5 w-[90%]"
            >
              <div className="h-[200px]">
                <Image className="rounded-2xl" src={Abouts3} alt="Home1 image" />
              </div>
              <div className="h-[200px]">
                <Image className="rounded-2xl" src={Abouts4} alt="Home1 image" />
              </div>
              <div className="h-[200px]">
                <Image className="rounded-2xl" src={Abouts5} alt="Home1 image" />
              </div>
              <div className="h-[200px]">
                <Image className="rounded-2xl" src={Abouts6} alt="Home1 image" />
              </div>

            </div>
          </div>
        </div>
        <div className=" txt-2 h-[90%] w-[90%] flex flex-col justify-center items-center bg-white mt-10">
          <div className="lg:w-[65%]  flex justify-center items-center flex-col ">
            <div className="flex flex-col gap-4 mb-16">
              <p className="text-[#aaa5a5]  text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">Background</p>
              <p className=" text-2xl font-semibold">I began my design career 4 years ago at a product-focused agency, where I was immediately immersed in the full design process and led client projects from day one.</p>
              <p className=" text-2xl font-semibold"> In that role, I guided numerous startups from concept to launch, designing and developing products from the ground up. I also helped various companies, including ApnaConsultant, Matrix Innovation, and CryptTrend, scale and achieve key business goals with their existing products.</p>
              <p className=" text-2xl font-semibold">After several years in the agency space, I transitioned into a full-time UI designer role, specializing in problem-solving through design and creating long-term strategies for various companies.</p>
              <p className=" text-2xl font-semibold">I have also managed and mentored teams, collaborating with over 10 developers and up to 5 designers.</p>
              {/* <p className=" text-2xl font-semibold">I’ve had the privilege of working closely with some of the world’s largest companies and consulting for industry leaders across various sectors.
              </p> */}
            </div>
          </div>
        </div>
        <div className=" w-[90%] mb-20 mt-5 ml-5">
          <div
            className="img-sec2 flex justify-center bg-white items-center"
          >
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About3} alt="Home1 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About4} alt="Home1 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={Abouts5} alt="Home1 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={Abouts4} alt="Home1 image" />
            </div>
          </div>
        </div>
        <div className=" w-[90%] mb-20 mt-5 ml-5">
          <div
            className="img-sec2 flex justify-center bg-white items-center"
          >
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About2} alt="Home1 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={Abouts6} alt="Home1 image" />
            </div>
            <div className="h-[200px] m-4">
              <Image className="rounded-2xl" src={About1} alt="Home1 image" />
            </div>
            <div className="h-[200px] m-4 ">
              <Image className="rounded-2xl" src={Abouts3} alt="Home4" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
  );
}
