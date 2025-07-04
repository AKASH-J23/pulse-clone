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
        {/* Decorative SVG omitted for brevity */}
      </div>
    </div>
    <div className="container -mt-10 sm:-mt-16 md:-mt-24 lg:-mt-40 xl:-mt-44 xxl:-mt-52">
      <div className="reveal">
        <div className="grid grid-cols-12 gap-y-4 md:gap-y-8 md:gap-8">
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