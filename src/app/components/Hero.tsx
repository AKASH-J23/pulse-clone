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
      <div className="heroHome__bottom absolute z-20 bottom-0 left-0 w-full flex flex-row items-end justify-between px-12 pb-8">
        {/* Scroller Words Swiper */}
        <div
          className="heroHome__scroller-words mb-0 flex items-center overflow-hidden"
          style={{ minWidth: 'min(50vw, 700px)', height: '6.5rem' }}
        >
          <Swiper
            key="hero-scroller"
            direction="vertical"
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay]}
            slidesPerView={1}
            className="h-full"
            style={{ height: '6.5rem' }}
          >
            {scrollerWords.map((word, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="swiper-slide heroHome__scroller-word flex items-center h-full"
                  style={{ height: '6.5rem' }}
                >
                  <span
                    className="font-wicklow"
                    style={{
                      fontSize: '6rem',
                      lineHeight: '1.05',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      color: 'white',
                      textShadow: '0 2px 8px rgba(0,0,0,0.10)',
                      display: 'inline-block',
                    }}
                  >
                    {word}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Latest Slider Swiper */}
        <div className="heroHome__latest" style={{ minWidth: 320, maxWidth: 400, width: '30vw' }}>
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