"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sectors = [
  {
    title: "Hotels, hospitality & leisure",
    href: "/sectors/hotels-hospitality-leisure",
    img: "/generic/Sector-images/Preview-cards/_410x602_crop_center-center_none/2930/hotels_hospitality_leisure_hero_2.webp",
    alt: "Hotels hospitality leisure hero 2",
  },
  {
    title: "Residential",
    href: "/sectors/residential",
    img: "/generic/Sector-images/Preview-cards/_410x602_crop_center-center_none/1647/Residential-hero.webp",
    alt: "Residential hero",
  },
  {
    title: "Life sciences",
    href: "/sectors/life-sciences",
    img: "/generic/Sector-images/Preview-cards/_410x602_crop_center-center_none/1632/life-sciences-hero.webp",
    alt: "Life sciences hero",
  },
  {
    title: "Healthcare",
    href: "/sectors/healthcare",
    img: "/generic/Sector-images/Preview-cards/_410x602_crop_center-center_none/1775/Healthcare-hero.webp",
    alt: "Healthcare hero",
  },
  {
    title: "Education",
    href: "/sectors/education",
    img: "/generic/Sector-images/Preview-cards/_410x602_crop_center-center_none/1633/Education-hero.webp",
    alt: "Education hero",
  },
  {
    title: "Commercial",
    href: "/sectors/commercial",
    img: "/generic/Sector-images/Preview-cards/_410x602_crop_center-center_none/14072/Commercial-retail-hero.webp",
    alt: "Commercial retail hero",
  },
  {
    title: "Arts, culture & heritage",
    href: "/sectors/arts-culture-heritage",
    img: "/generic/Sector-images/Preview-cards/_410x602_crop_center-center_none/328/Arts-culture-heritage-hero.webp",
    alt: "Arts culture heritage hero",
  },
];

const SectorSlider = () => (
  <section className="pb-14 md:pb-20 lg:pb-24 overflow-hidden relative lgDown:bg-gray-800" data-block="blockSectorSlider">
    <div className="container pt-20 lg:pt-28">
      <div className="reveal lgDown:z-20">
        <div className="grid grid-cols-12 gap-y-8 md:gap-8 relative">
          <div className="col-span-full lg:col-span-4 text-white max-w-[411px] lg:pb-20 xl:pb-28 relative">
            <div className="border-t border-solid border-white">
              <div className="relative z-30 flex flex-col gap-7 border-solid border-blue-200 border-t-[1px] mr-8">
                <h3 className="pt-12 text-6xl mb-0">Our sector specialisms</h3>
                <a className="btn btn--icon btn--outline-white w-fit" href="/sectors">
                  View all
                  <svg className="w-3 h-auto" width="18" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><path fill="currentColor" d="m4.86.827.039 3.586 6.5.04L.084 15.822l2.563 2.55L13.96 7.001l.072 6.5 3.586.021L17.48.903 4.86.827Z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-8 pt-px relative z-[12]">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={32}
              slidesPerView={1.1}
              breakpoints={{
                360: { slidesPerView: 1.25, spaceBetween: 20 },
                414: { slidesPerView: 1.5, spaceBetween: 20 },
                520: { slidesPerView: 1.75, spaceBetween: 20 },
                700: { slidesPerView: 2.75, spaceBetween: 32 },
                1024: { slidesPerView: 2.25, spaceBetween: 20 },
                1280: { slidesPerView: 2.75, spaceBetween: 32 },
                1340: { slidesPerView: 2.75, spaceBetween: 32 },
              }}
              className="sliderCards"
            >
              {sectors.map((sector) => (
                <SwiperSlide key={sector.href}>
                  <a href={sector.href} className="text-white group block">
                    <div className="card relative bg-blue-200 w-auto aspect-[15/22] overflow-hidden">
                      <Image
                        src={sector.img}
                        alt={sector.alt}
                        fill
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        className="absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="flex absolute bottom-0 left-0 right-0 items-end justify-between pl-5 z-10 w-full">
                        <p className="font-bold pb-2 w-[75%]">{sector.title}</p>
                      </div>
                      <div className="aspect-square h-full w-11 absolute bottom-0 right-0 bg-blue-600 translate-y-[calc(100%-44px)] group-hover:translate-y-[0%] transition-transform duration-500">
                        <div className="aspect-square w-11 bg-blue-600 flex justify-center content-center">
                          <svg className="text-white my-auto w-4" width="23" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none" role="presentation"><rect width="2.90909" height="21.8182" transform="matrix(-1 0 0 1 13.1836 0.0908203)" fill="currentColor"></rect><rect width="2.90909" height="21.8182" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 22.6367 12.4551)" fill="currentColor"></rect></svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectorSlider; 