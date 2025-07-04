import React from "react";

const Intro = () => (
  <section className="pt-10 lg:pt-12 mb-10 lg:mb-12">
    <div className="container mx-auto px-4">
      <div className="max-w-[1200px] ml-0">
        {/* <h1 className="font-wicklow font-bold text-[#060725] text-4xl md:text-5xl lg:text-6xl leading-[1.25] text-left mb-0">
          
          </h1> */}
        <div className="flex w-full flex-col">
          <p className="font-bold mb-2 text-base text-left text-[#060725]">Construction consultants</p>
          <hr className="border-blue-200 mb-6 w-full" />
          <p className="mx-auto mt-6 text-2xl md:text-3xl lg:text-4xl text-justify max-w-4xl font-wicklow font-bold text-[#060725]">
          At Pulse Consult, we're a genuinely empowering construction consultancy. Specialising in project management and controls, quantity surveying, principal designer and CDM services, our construction consultants build game changing, project shaping relationships – bringing people together to deliver exceptional, added value results.
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <a className="text-[#1a40ff] underline underline-offset-4 font-medium text-lg hover:text-[#0033cc] transition-all" href="/about">
          About us
          <svg className="w-4 h-auto inline ml-1" width="18" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><path fill="currentColor" d="m4.86.827.039 3.586 6.5.04L.084 15.822l2.563 2.55L13.96 7.001l.072 6.5 3.586.021L17.48.903 4.86.827Z"/></svg>
        </a>
      </div>
    </div>
  </section>
);

export default Intro; 