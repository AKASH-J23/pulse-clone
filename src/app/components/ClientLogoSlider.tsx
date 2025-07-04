"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/3279/logo_cupra.webp",
    alt: "Cupra",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/12087/JJ-new-logo.webp",
    alt: "Johnson & Johnson",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/3287/logo_nhs_property_services.webp",
    alt: "NHS Property Services",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/6095/logo-mclaren-property.webp",
    alt: "McLaren Property",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/13617/Whitbread-logo.webp",
    alt: "Whitbread",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/16421/NHM-logo.webp",
    alt: "NHM",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/3293/logo_university_of_the_arts_london.webp",
    alt: "University of the Arts London",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/3294/logo_victoria_and_albert_museum.webp",
    alt: "Victoria and Albert Museum",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/3285/logo_london_south_bank_university.webp",
    alt: "London South Bank University",
  },
  {
    src: "/generic/Client-Logos/_1536x1024_fit_center-center_92_none/5443/logo_janssen.webp",
    alt: "Janssen",
  },
  {
    src: "/generic/Client-Logos/logo_royal_shakespeare_company.svg",
    alt: "Royal Shakespeare Company",
  },
  {
    src: "/generic/Client-Logos/Logo_BB_Hotels.svg",
    alt: "BB Hotels",
  },
];

const ClientLogoSlider = () => (
  <section className="pb-14 md:pb-20 lg:pb-24 overflow-hidden" data-block="blockLogoSlider">
    <div className="container ml-40">
      <div className="reveal">
        <div className="text-center w-full">
          <h3 className="text-2xl md:text-4xl font-bold pb-9 -p-26 ml-4">Proud to work with</h3>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            speed={3000}
            loop={logos.length > 4}
            slidesPerView={4}
            spaceBetween={40}
            className="sliderLogo"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.src}>
                <div className="flex items-center justify-center h-[96px] w-auto">
                  {logo.src.endsWith('.svg') ? (
                    <img src={logo.src} alt={logo.alt} className="h-auto max-h-[100px] w-auto mx-auto object-contain" />
                  ) : (
                    <Image src={logo.src} alt={logo.alt} width={180} height={100} className="h-auto max-h-[100px] w-auto mx-auto object-contain" />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);

export default ClientLogoSlider; 