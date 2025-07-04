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
      "From first steps to final fit-out, at Pulse Consult we embed sustainability into every aspect of your project, making a positive, lasting impact on people and planet.",
  },
];

const FeatureList = () => (
  <section className="pb-14 md:pb-20 lg:pb-24" data-block="blockBulletList">
    <div className="container">
      <div className="reveal">
        <div className="grid md:grid-cols-8 lg:grid-cols-12 gap-y-8 md:gap-8">
          <div className="col-span-full md:col-span-4">
            <p className="font-semibold md:pt-2">What we do</p>
          </div>
          <div className="col-span-full lg:col-span-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-12">
              {features.map((feature, idx) => (
                <div className="col-span-1 flex gap-3" key={feature.number}>
                  <p className="text-6xl font-heading shrink-0 min-w-[64px]">
                    <span>0</span>{idx + 1}
                  </p>
                  <div className="flex flex-col gap-3 relative before:absolute before:h-full before:w-[1px] before:left-0 before:bottom-0 before:bg-blue-200 pl-6">
                    <p className="font-semibold">{feature.title}</p>
                    <div className="font-light ck">
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureList; 