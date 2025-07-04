import React from "react";

const Intro = () => (
  <div className="pt-16 lg:pt-20 mb-10 lg:mb-12">
    <div className="container">
      <div className="max-w-[1080px] mx-auto">
        <p className="font-bold mb-4 mdDown:text-sm">Construction consultants</p>
        <hr className="border-blue-200 mb-5" />
        <div className="ck font-heading text-2xl md:text-3xl lg:text-4xl">
          <p>
            At Pulse Consult, we're a genuinely empowering construction
            consultancy. Specialising in project management and controls,
            quantity surveying, principal designer and CDM services,
            our construction consultants build game changing, project
            shaping relationships – bringing people together to deliver
            exceptional, added value results.
          </p>
        </div>
        <div className="md:flex md:justify-end">
          <a className="link link--icon link--icon-no-expand-hover mt-10" href="/about">
            About us
            <svg className="w-3 h-auto" width="18" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><path fill="currentColor" d="m4.86.827.039 3.586 6.5.04L.084 15.822l2.563 2.55L13.96 7.001l.072 6.5 3.586.021L17.48.903 4.86.827Z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Intro; 