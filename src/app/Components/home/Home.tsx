import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import temptalk from "../../images/ProfilePhoto.png";

import home1 from "../../Images/home1.png"
import home2 from "../../Images/home2.png"
import home3 from "../../Images/home3.png"
import home4 from "../../Images/home4.png"

import q1 from "../../Images/Q5.webp"
import logo from "../../Images/logo.webp"
import VideoComponent from "./VideoComponent";
import Footer from "../Footer/Footer";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Home = () => {

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>

      </div>
      <div className="home-2-lg lg:h-[50rem] flex justify-center">
        <div className="home-2-sm w-[90%] flex justify-between lg:items-center">

          <div className="textinhome-2 xl:w-[60%] mt-20 lg:mt-0">
            <div className="flex lg:items-center gap-5 mb-9">

              <Image
                className="h-[3rem] w-auto "
                src={logo}
                alt="temptalk image"
              />
              <p
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#949292] flex items-center"

              >
                Raj Vardhan Vishwakarma
              </p>
            </div>
            <p className="text-[5rem] lg:text-[7rem] leading-none font-semibold text-black mb-3">UI/UX</p>
            <p
              className="text-[5rem] lg:text-[7rem] xl:text-[6rem] leading-none font-semibold text-black"

            >
              Designer with over 3 years of experience.
            </p>
          </div>
          <div className="imginhome-2 w-[40%] hidden xl:block  justify-end items-center">
            <div>
              <Image
                className="rounded-3xl h-[25rem] w-[25rem] mt-0 ml-[5rem]"
                src={temptalk}
                alt="temptalk image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-3 flex flex-col justify-center items-center lg:w-[full] lg:h-screen overflow-hidden">
        <VideoComponent />
      </div>
      <div className="home-4 h-[800px] flex flex-col justify-center items-center">
        <div className="hometext-4 w-[60%] h-[200px] flex justify-center items-center">
          <p className="text-3xl text-black font-semibold w-[80%]">Hi, I’m Raj Vardhan Vishwakarma, a UI/UX designer and graphic designer with over 4 years of experience. I specialize in creating meaningful, user-centered designs that help companies grow by delivering value to their users and customers.</p>
        </div>
        <div className="homeimg-4 w-[90%] h-[300px] mt-20 flex justify-center items-center gap-5">
          <div className="h-[200px]"><Image className=" rounded-2xl" src={home1} alt="Home1 image" /></div>
          <div className="h-[200px]"><Image className=" rounded-2xl" src={home2} alt="Home2 image" /></div>
          <div className="h-[200px]"><Image className=" rounded-2xl" src={home3} alt="Home3 image" /></div>
          <div className="h-[200px]"><Image className=" rounded-2xl" src={home4} alt="Home4 image" /></div>
        </div>
      </div>
      <div className="home-5  w-[100%] flex justify-center items-center mb-32">
        <div className=" w-[80%] flex justify-between items-center gap-10">
          <div className="w-[60%] h-[100%] mr-10">
            <p className="text-5xl font-[500]">Over the years, I’ve designed user experiences that are now integral to products used by some of the world’s leading companies.</p>
          </div>
          <div className="w-[40%] h-[100%] mt-5">
            <p className="text-2xl font-semibold text-[#999696] mb-5">The products I’ve designed with teams across various companies have played a critical role in helping these businesses achieve important growth milestones.</p>
            <p className="text-xl font-semibold text-[#a39f9f]">From helping companies secure millions in funding, grow their user bases, and become market leaders, to redefining their industries and setting new design standards.</p>
          </div>
        </div>
      </div>
      <div className="home6 ">

        <div className="max-w-[70rem] grid grid-cols-3 mx-auto gap-5">
          <CardSpotlight radius={300} color="#2200EE" className="spot-cards">
            <div className="p-5 relative">
              <div
                className="absolute top-0 left-0 p-3 text-white text-xl font-bold"
                style={{
                  transform: "rotate(-10deg)",
                  marginTop: "-80px",
                  marginLeft: "-75px"
                }}
              >
                <Image className="h-20 w-20 mix-blend-darken" src={q1} alt="temptalk image" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Exceptional Designer!</h2>
              <p className="text-gray-400">Raj improved our website’s UX with clean, intuitive designs. Engagement has increased significantly. Highly recommend!</p>
            </div>
          </CardSpotlight>

          <CardSpotlight radius={300} color="#2200EE" className="spot-cards">
            <div className="p-5 relative">
              <div
                className="absolute top-0 left-0 p-3 text-white text-xl font-bold"
                style={{
                  transform: "rotate(-10deg)",
                  marginTop: "-80px",
                  marginLeft: "-75px"
                }}
              >
                <Image className="h-20 w-20 mix-blend-darken" src={q1} alt="temptalk image" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Strategic Approach</h2>
              <p className="text-gray-400">Raj’s strategic UI/UX designs elevated our app. His dedication and creativity are unmatched. Looking forward to more collaborations!</p>
            </div>
          </CardSpotlight>

          <CardSpotlight radius={300} color="#2200EE" className="spot-cards">
            <div className="p-5 relative">
              <div
                className="absolute top-0 left-0 p-3 text-white text-xl font-bold"
                style={{
                  transform: "rotate(-10deg)",
                  marginTop: "-80px",
                  marginLeft: "-75px"
                }}
              >
                <Image className="h-20 w-20 mix-blend-darken" src={q1} alt="temptalk image" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Talented & Responsive</h2>
              <p className="text-gray-400">Raj streamlined our app’s interface and responded quickly to our feedback. Great eye for detail!</p>
            </div>
          </CardSpotlight>

          <CardSpotlight radius={300} color="#2200EE" className="spot-cards">
            <div className="p-5 relative">
              <div
                className="absolute top-0 left-0 p-3 text-white text-xl font-bold"
                style={{
                  transform: "rotate(-10deg)",
                  marginTop: "-80px",
                  marginLeft: "-75px"
                }}
              >
                <Image className="h-20 w-20 mix-blend-darken" src={q1} alt="temptalk image" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Brand Identity Revamp</h2>
              <p className="text-gray-400">Raj revamped our brand’s identity with modern, user-friendly designs. Our clients love the new look!</p>
            </div>
          </CardSpotlight>

          <CardSpotlight radius={300} color="#2200EE" className="spot-cards">
            <div className="p-5 relative">
              <div
                className="absolute top-0 left-0 p-3 text-white text-xl font-bold"
                style={{
                  transform: "rotate(-10deg)",
                  marginTop: "-80px",
                  marginLeft: "-75px"
                }}
              >
                <Image className="h-20 w-20 mix-blend-darken" src={q1} alt="temptalk image" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Highly Professional</h2>
              <p className="text-gray-400">Raj delivered stunning designs that exceeded our expectations. His professionalism and skills are top-notch!</p>
            </div>
          </CardSpotlight>

          <CardSpotlight radius={300} color="#2200EE" className="spot-cards">
            <div className="p-5 relative">
              <div
                className="absolute top-0 left-0 p-3 text-white text-xl font-bold"
                style={{
                  transform: "rotate(-10deg)",
                  marginTop: "-80px",
                  marginLeft: "-75px"
                }}
              >
                <Image className="h-20 w-20 mix-blend-darken" src={q1} alt="temptalk image" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">User-Focused Innovation</h2>
              <p className="text-gray-400">Raj’s user-centered designs transformed our website into something our users love interacting with!</p>
            </div>
          </CardSpotlight>
        </div>
      </div >
      <div className="text-9xl font-semibold mt-28 mb-28 content-center text-center text-[#255196fc]">
      <span className="text-[#0062f2]">&#60;-</span> PORTFOLIO <span className="text-[#0062f2]">-&#62;</span>
      </div>
      <Footer />
    </div >
  );
};

export default Home;
