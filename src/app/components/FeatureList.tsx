import React from "react";

const features = [
  {
    number: "01",
    title: "Deliver clarity & confidence",
    description:
      "Our experienced consultants navigate building challenges day in, day out, so whatever your project brings, we cut through the noise to deliver on your goals.",
  },
  {
    number: "02",
    title: "Understand your ambitions",
    description:
      "Your ambition for your project is what guides us, every step of the way. We'll understand it, we'll drive it and we'll fiercely protect it, delivering exceptional outcomes every time.",
  },
  {
    number: "03",
    title: "Create positive, sustainable places",
    description:
      "From first steps to final fit-out, at Nuvanta Consult we embed sustainability into every aspect of your project, making a positive, lasting impact on people and planet.",
  },
];

const FeatureList = () => (
  <section className="pb-14 md:pb-20 lg:pb-24" data-block="blockBulletList">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-y-8 md:gap-8 justify-center items-start">
        <div className="col-span-12 lg:col-span-2 flex items-start mb-4 lg:mb-0">
          <p className="font-semibold text-lg text-left text-[#060725]">What we do</p>
        </div>
        {/* Left column: 01 above 03 */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
          <div className="flex gap-4 items-start mb-0">
            <p className="text-5xl md:text-6xl font-wicklow font-bold text-[#060725] shrink-0 min-w-[64px] text-left leading-none mr-2">
              {features[0].number}
            </p>
            <div className="flex flex-col gap-2 relative pl-2">
              <p className="font-semibold text-base md:text-lg text-left text-[#060725] mb-1">{features[0].title}</p>
              <div className="font-light text-left text-[#060725] text-sm md:text-base">
                <p>{features[0].description}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start mb-0">
            <p className="text-5xl md:text-6xl font-wicklow font-bold text-[#060725] shrink-0 min-w-[64px] text-left leading-none mr-2">
              {features[2].number}
            </p>
            <div className="flex flex-col gap-2 relative pl-2">
              <p className="font-semibold text-base md:text-lg text-left text-[#060725] mb-1">{features[2].title}</p>
              <div className="font-light text-left text-[#060725] text-sm md:text-base">
                <p>{features[2].description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right column: 02 */}
        <div className="col-span-12 md:col-span-5 flex gap-4 items-start mb-0 md:ml-8">
          <p className="text-5xl md:text-6xl font-wicklow font-bold text-[#060725] shrink-0 min-w-[64px] text-left leading-none mr-2">
            {features[1].number}
          </p>
          <div className="flex flex-col gap-2 relative pl-2">
            <p className="font-semibold text-base md:text-lg text-left text-[#060725] mb-1">{features[1].title}</p>
            <div className="font-light text-left text-[#060725] text-sm md:text-base">
              <p>{features[1].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureList; 