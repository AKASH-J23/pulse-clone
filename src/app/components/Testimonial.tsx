import React from "react";
import Image from "next/image";

const Testimonial = () => (
  <section className="pb-14 md:pb-20 lg:pb-24 relative overflow-hidden" data-block="blockTestimonial">
    <div className="relative bg-gray-800 py-20 md:py-28">
      <div className="reveal">
        <div className="container relative">
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-full md:col-span-3 relative flex justify-center items-center">
              <Image
                src="/generic/Projects-images/Kennington-Lane/_340x340_crop_center-center_none/2959/HG-Living_Kennington-Lane_3.webp"
                alt="HG Living Kennington Lane 3"
                width={240}
                height={240}
                className="relative z-20 w-full max-w-[164px] md:max-w-[240px] lg:max-w-[308px]"
              />
            </div>
            <div className="col-span-full md:col-start-4 lg:col-start-5 md:col-span-8 text-white z-10">
              <div className="text-3xl md:text-5xl font-heading font-bold pt-10 md:pt-0">
                <p>
                  From the outset, Pulse Consult demonstrated their expertise and commitment by providing us with an experienced team led by a Director who played an integral role in supporting the delivery of Kennington Lane. Their support during the due diligence phase was invaluable, ensuring that every aspect was meticulously reviewed and assessed. Guidance through the negotiation of the Development and Funding agreement was instrumental in securing agreeable terms and protecting our interests. The professionalism and dedication shown by the Pulse Consult team has been exceptional. Their deep understanding of project and cost management, combined with their proactive approach, has significantly contributed to the successful progress of the Kennington Lane scheme. We look forward to continuing our partnership with Pulse Consult on future projects.
                </p>
              </div>
              <div className="mt-11 font-light flex flex-wrap gap-1 md:gap-2">
                <p>James Young</p>
                <span>|</span>
                <p>Director</p>
                <span>|</span>
                <p>HG Living</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial; 