"use client";
import React, { useRef, useEffect, useState } from "react";

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedOnce) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayedOnce]);

  useEffect(() => {
    if (isVisible) {
      setHasPlayedOnce(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={videoRef}
      className={`w-[100%] h-[1000px] flex justify-center items-center transition-all duration-1000 ease-in-out transform rounded-3xl ${
        isVisible && !hasPlayedOnce
          ? "translate-y-0 opacity-100 rotate-0"
          : hasPlayedOnce
          ? "translate-y-0 opacity-100 rotate-0"
          : "translate-y-[200px] opacity-0 rotate-12"
      } rounded-lg`}
    >
      <div className="w-full h-full rounded-3xl overflow-hidden">
        <video
          className="h-[1000px] w-[100%] rounded-3xl"
          src='/videos/sss.mp4'
          autoPlay
          muted
          loop
          controls={false}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoComponent;
