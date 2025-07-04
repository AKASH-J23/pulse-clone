import React from "react";
import Image from "next/image";

const Testimonial = () => (
  <section className="pb-14 md:pb-20 lg:pb-24 relative overflow-hidden" data-block="blockTestimonial">
    <div className="relative bg-[#060725] py-10 sm:py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-10 md:gap-y-0 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start md:col-span-3 col-span-1 relative">
            <div className="hidden md:block absolute z-10 top-1/2 -translate-y-1/2 left-0 -translate-x-[calc(100%-120px)] w-screen h-[500vh] bg-white"></div>
            <div className="md:hidden absolute top-0 left-0 right-0 bg-white h-[100px] -translate-y-10 w-full"></div>
            <Image
              src="/generic/Projects-images/Kennington-Lane/_340x340_crop_center-center_none/2959/HG-Living_Kennington-Lane_3.webp"
              alt="HG Living Kennington Lane 3"
              width={240}
              height={240}
              className="relative z-20 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[308px] h-auto"
              priority={false}
            />
          </div>
          {/* Right: Testimonial Text */}
          <div className="md:col-start-4 lg:col-start-5 md:col-span-5 lg:col-span-8 col-span-1 text-white z-10">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold pt-6 md:pt-0 w-full text-justify" style={{ color: "#fff" }}>
              <p>
                From the outset, Pulse Consult demonstrated their expertise and commitment by providing us with an experienced team led by a Director who played an integral role in supporting the delivery of Kennington Lane. Their support during the due diligence phase was invaluable, ensuring that every aspect was meticulously reviewed and assessed. Guidance through the negotiation of the Development and Funding agreement was instrumental in securing agreeable terms and protecting our interests. The professionalism and dedication shown by the Pulse Consult team has been exceptional. Their deep understanding of project and cost management, combined with their proactive approach, has significantly contributed to the successful progress of the Kennington Lane scheme. We look forward to continuing our partnership with Pulse Consult on future projects.
              </p>
            </div>
            <div className="mt-8 md:mt-11 font-light flex flex-wrap gap-x-2 gap-y-1 md:gap-x-2 text-base sm:text-lg md:text-xl">
              <p>James Young</p>
              <span>|</span>
              <p>Director</p>
              <span>|</span>
              <p>HG Living</p>
            </div>
          </div>
        </div>
        {/* Decorative gradient image (optional, can be added if needed) */}
        {/*
        <img
          className="absolute max-w-[500px] left-0 -bottom-20 md:left-36 xl:left-44 md:-bottom-28"
          alt=""
          src="/dist/images/gradients/gradient--bluewhite-bl-sm.png"
          loading="lazy"
          width="540"
          height="497"
        />
        */}
      </div>
    </div>
  </section>
);

export default Testimonial; 