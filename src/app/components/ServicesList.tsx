import React from "react";

const services = [
  {
    title: "Project management consultancy",
    href: "/services/project-management",
  },
  {
    title: "Quantity surveyor & cost consultancy",
    href: "/services/quantity-surveyor-cost-consultancy",
  },
  {
    title: "Planning & project controls",
    href: "/services/planning-project-controls",
  },
  {
    title: "Principal designer & CDM services",
    href: "/services/principal-designer-cdm-services",
  },
];

const ServicesList = () => (
  <section
    className="relative overflow-hidden pb-14 md:pb-20 lg:pb-24"
    data-block="blockPagesList"
    style={{ background: '#f9f2f4' }}
  >
    {/* Geometric SVG background */}
    <svg
      width="320"
      height="180"
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 z-0"
      style={{ pointerEvents: 'none' }}
    >
      <polygon points="0,0 130,0 0,130" fill="#fbeaf2" />
      <polygon points="65,0 130,0 130,65" fill="#fbeaf2" />
      <polygon points="130,0 260,0 130,130" fill="#fbeaf2" />
      <polygon points="195,0 260,0 260,65" fill="#fbeaf2" />
      <polygon points="0,65 65,65 0,130" fill="#fbeaf2" />
      <polygon points="65,65 130,65 65,130" fill="#fbeaf2" />
      <polygon points="195,65 260,65 195,130" fill="#fbeaf2" />
      <polygon points="260,65 320,65 260,130" fill="#fbeaf2" />
      <polygon points="0,130 65,130 0,195" fill="#fbeaf2" />
    </svg>
    <div className="relative z-10">
      <div className="container pt-16 lg:pt-20 xl:pt-28 pb-16 lg:pb-20 pl-8 md:pl-16 xl:pl-32">
        <div className="reveal">
          <div className="grid grid-cols-12">
            <div className="col-span-full sm:col-start-3 sm:col-span-10 md:col-start-5 md:col-span-7 z-10">
              <p className="mb-0 pb-5 relative font-bold after:absolute after:w-full after:bg-[#BAD1F0] after:h-[1px] after:bottom-0 after:left-0" style={{fontSize: '1rem', letterSpacing: '0.01em'}}>Services</p>
              {services.slice(0, 4).map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="group min-h-[200px] pb-9 mt-10 flex items-center justify-between gap-4 lg:gap-6 relative after:absolute after:w-full after:bg-[#BAD1F0] after:h-[1px] after:bottom-0 after:left-0"
                  style={{ borderLeft: '4px solid #2d3eb1' }}
                >
                  <div className="card-link absolute left-0 w-full h-[115px] md:h-[140px] overflow-hidden"></div>
                  <p className="text-3xl sm:text-6xl font-bold max-w-[650px] font-heading pl-9" style={{ color: '#18184a', fontFamily: 'Wicklow, serif', fontWeight: 700 }}>
                    {service.title}
                  </p>
                  <svg className="shrink-0 w-8 h-8 md:h-10" width="43" height="41" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 41"><path fill="#18184a" d="M8.85.721v3h28.756L.68 38.454l2.056 2.186L39.85 5.729V35.72h3v-35h-34Z"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesList; 