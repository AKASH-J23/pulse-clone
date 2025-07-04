import React from "react";
import Image from "next/image";

const projects = [
  {
    href: "/projects/cupra-city-garages",
    img: "/generic/Projects-images/Cupra-City-Garages/_800x800_crop_center-center_none/7811/Cupra-City-Garages_Istanbul_2.webp",
    alt: "Cupra City Garages Istanbul 2",
    category: "Commercial",
    client: "SEAT S.A. / CUPRA",
    title: "Cupra City Garages",
  },
  {
    href: "/projects/the-cube",
    img: "/generic/Projects-images/The-Cube_London/_800x800_crop_center-center_none/2924/The-Cube-127.webp",
    alt: "The Cube 127",
    category: "Hotels, hospitality & leisure, Commercial",
    client: "Mellors Group",
    title: "The Cube, London",
  },
];

const ProjectCards = () => (
  <section className="pb-14 md:pb-20 lg:pb-24" data-block="blockProjectCards">
    <div className="w-full overflow-hidden">
      <div className="-mx-2 md:-mx-4 lg:-mx-8 xl:-mx-12">
        {/* Decorative SVG background from original site */}
        <svg
          className="w-full h-auto max-w-[2100px] mx-auto"
          width="1408"
          height="394"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1408 394"
        >
          <path
            fill="#E5F0FF"
            d="M597.104 390.844c28.112-24.805 32.246-44.649 32.246-94.672v-158.75l-22.324-29.353 78.135-9.095v197.198c0 52.09-24.392 83.923-86.817 97.152l-1.24-2.48ZM614.88 39.443 654.568.582l39.274 38.86-39.687 39.688-39.275-39.687Zm516.84 196.371c0 42.168 23.97 62.425 57.05 62.425 26.87 0 46.71-12.816 58.7-38.861l-2.89-2.48c-7.03 5.787-17.36 9.095-28.53 9.095-18.19 0-28.52-11.162-28.52-38.448V114.27h53.33l2.89-13.229h-56.22V43.163l-86.41 71.107h30.6v121.544Zm131.59 48.782c20.25 9.095 42.58 13.643 64.49 13.643 57.46 0 80.2-30.179 80.2-62.012 0-38.745-29.83-51.346-56.97-62.816-22.68-9.581-43.49-18.372-43.49-40.951 0-23.151 20.26-28.939 30.18-28.939 2.89 0 4.96 0 7.44.827l49.61 50.023v-47.956c-19.02-6.201-36.79-9.508-55.4-9.508-47.13 0-76.48 23.564-76.48 59.531 0 41.219 29.53 53.53 56.23 64.663 22.05 9.19 42.16 17.577 42.16 40.757 0 21.498-16.12 29.766-31.83 29.766-6.2 0-9.92 0-13.64-1.24l-52.5-53.33v47.542ZM1016 298.239c-58.708 0-95.088-40.515-95.088-97.979 0-63.666 44.649-103.353 105.008-103.353 22.32 0 42.17 3.307 61.6 9.508v50.023l-50.44-52.09c-4.13-.827-7.03-.827-11.16-.827-26.873 0-46.717 31.006-46.717 79.789 0 54.157 26.047 77.722 61.187 77.722 24.39 0 45.89-11.162 55.81-31.006l4.55 1.653c-10.75 39.275-39.69 66.56-84.75 66.56Zm-300.18-98.806c0 58.705 35.554 98.806 96.739 98.806 45.889 0 78.548-26.872 89.711-66.56l-4.548-1.653c-10.749 20.67-34.727 31.006-61.185 31.006-38.034 0-63.252-23.151-63.252-76.895v-.827H903.51c-.414-50.436-29.766-86.403-87.23-86.403-58.291 0-100.46 37.62-100.46 102.526Zm135.6-22.738h-78.135c1.653-49.609 20.257-73.174 41.755-73.174 23.151 0 35.966 26.459 36.38 73.174Zm-454.541 20.671c0 68.213 49.196 100.873 100.046 100.873 50.849 0 100.045-32.66 100.045-100.873 0-67.8-49.196-100.46-100.045-100.46-50.85 0-100.046 32.66-100.046 100.46Zm100.046 94.258c-21.084 0-41.342-21.497-41.342-94.258 0-72.347 20.258-93.845 41.342-93.845s41.341 21.498 41.341 93.845c0 72.761-20.257 94.258-41.341 94.258Zm-261.23 2.481 22.324-29.353V137.421l-21.911-29.352 77.722-9.095v60.358c13.642-38.447 34.313-62.838 71.933-62.838v46.715c-27.285 0-57.05 6.201-71.933 25.632v95.911l31.006 29.353H235.695ZM23.651 264.752.913 294.104h113.689l-31.006-29.352v-83.096h28.112c67.386 0 108.314-28.939 108.314-75.241S179.094 30.76 111.708 30.76H.913l22.738 29.353v204.639Zm77.721-90.951H83.596V38.615h18.603c35.967 0 58.291 26.459 58.291 67.8 0 41.341-22.324 67.386-59.118 67.386Z"
          />
        </svg>
      </div>
    </div>
    <div className="container -mt-20 sm:-mt-16 md:-mt-24 lg:-mt-40 xl:-mt-44 xxl:-mt-52 ml-50">
      <div className="reveal">
        <div className="grid grid-cols-12 gap-y-4 md:gap-y-8 md:gap-8 justify-center">
          {projects.map((project) => (
            <div className="col-span-full md:col-span-6" key={project.href}>
              <a className="block group" href={project.href}>
                <div className="img">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.alt}
                      width={800}
                      height={800}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="hidden md:block absolute w-20 bg-blue-600 bottom-0 right-0 h-full translate-y-[calc(100%-80px)] group-hover:translate-y-[0%] transition-transform duration-500">
                      <div className="top w-20 h-20 flex justify-center content-center">
                        <svg className="text-white w-[23px] my-auto" width="23" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none" role="presentation"><rect width="2.90909" height="21.8182" transform="matrix(-1 0 0 1 13.1836 0.0908203)" fill="currentColor"></rect><rect width="2.90909" height="21.8182" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 22.6367 12.4551)" fill="currentColor"></rect></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="upper-content flex justify-between gap-4">
                    <p className="py-4 w-full content-center text-sm font-light text-gray-800 relative after:absolute after:w-full after:bg-[#BAD1F0] after:h-[1px] after:bottom-0 after:left-0">
                      {project.category}
                    </p>
                    <div className="bg-blue-600 md:hidden">
                      <div className="top w-20 h-20 flex justify-center content-center">
                        <svg className="text-white w-[23px] my-auto" width="23" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none" role="presentation"><rect width="2.90909" height="21.8182" transform="matrix(-1 0 0 1 13.1836 0.0908203)" fill="currentColor"></rect><rect width="2.90909" height="21.8182" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 22.6367 12.4551)" fill="currentColor"></rect></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-600 text-sm font-semibold mt-6 mb-2 md:mb-0">{project.client}</p>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold">{project.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectCards; 