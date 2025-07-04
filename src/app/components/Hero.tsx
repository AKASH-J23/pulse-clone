"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const scrollerWords = ["Collaborative", "Construction", "Consultancy"];
const latestSlides = [
  {
    href: "/careers",
    title: "We're hiring!",
    subtitle: "Discover careers at Pulse",
  },
  {
    href: "/about/culture",
    title: "Our culture",
    subtitle: "Creating a vibrant workplace",
  },
  {
    href: "/projects/the-cube",
    title: "New project",
    subtitle: "The Cube, London",
  },
];

const Hero = () => {
  // Progress bar state for latest slider
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="heroHome relative w-full h-screen overflow-hidden">
      <div className="absolute z-0 top-0 left-0 w-full h-full">
        <video
          id="912vid"
          className="responsive-video object-cover w-full h-full hero__video"
          autoPlay
          playsInline
          loop
          muted
          controls={false}
          src="/generic/Homepage-hero-videos/Pulse-Video-Desktop.mp4"
        />
      </div>
      {/* Overlay and tint for better text visibility */}
      <div className="heroHome__overlay absolute z-10 top-0 left-0 w-full h-full bg-black/30 pointer-events-none" />
      <div className="heroHome__tint absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="heroHome__bottom absolute z-20 bottom-0 left-0 w-full flex flex-col items-center pb-12">
        {/* Scroller Words Swiper */}
        <div className="heroHome__scroller-words w-full max-w-xs mx-auto mb-6">
          <Swiper
            direction="vertical"
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay]}
            slidesPerView={1}
            className="h-10"
          >
            {scrollerWords.map((word, idx) => (
              <SwiperSlide key={idx}>
                <div className="swiper-slide heroHome__scroller-word text-white text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
                  {word}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Latest Slider Swiper */}
        <div className="heroHome__latest w-full max-w-md mx-auto">
          <div className="heroHome__latest__progress" data-slides={latestSlides.length}>
            <div className="flex justify-between items-center text-[16px] leading-[24px] text-white pb-6 mb-6">
              <p>{`0${activeIndex + 1}`}</p>
              <p>{`0${latestSlides.length}`}</p>
            </div>
            <div className="heroHome__latest__progress__track bg-white/30 h-1 w-full rounded-full relative overflow-hidden">
              <div
                className="heroHome__latest__progress__bar bg-blue-400 h-1 absolute top-0 left-0 transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / latestSlides.length) * 100}%` }}
              />
            </div>
          </div>
          <Swiper
            direction="vertical"
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="heroHome__latest__slider h-20"
          >
            {latestSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <a href={slide.href} className="relative group text-white block">
                  <p className="text-blue-400 text-[16px] leading-[24px] font-semibold mb-2">{slide.title}</p>
                  <p className="font-semibold">{slide.subtitle}</p>
                  <svg className="w-4 h-auto absolute bottom-2 right-0 -translate-x-4 opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-[transform,_opacity] duration-300" width="18" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><path fill="currentColor" d="m4.86.827.039 3.586 6.5.04L.084 15.822l2.563 2.55L13.96 7.001l.072 6.5 3.586.021L17.48.903 4.86.827Z"/></svg>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero; 