import React from "react";
import Image from "next/image";

const accreditations = [
  {
    src: "/generic/footer/_400xAUTO_fit_center-center_92_none/117/logo-cyber-essentials.webp",
    alt: "Cyber Essentials",
  },
  {
    src: "/generic/footer/_400xAUTO_fit_center-center_92_none/6660/logo_iso9001_white_2024-08-27-141559_pvmj.webp",
    alt: "ISO 9001",
  },
  {
    src: "/generic/footer/_400xAUTO_fit_center-center_92_none/6661/logo_iso14001_white_2024-08-27-141618_dysg.webp",
    alt: "ISO 14001",
  },
];

const Footer = () => (
  <footer className="bg-[#060725] text-white pt-10 pb-4 mt-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex gap-6 items-center">
        {accreditations.map((logo) => (
          <div key={logo.src} className="aspect-[2/1] max-w-20">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={40}
              className="w-full shrink-0 object-contain"
            />
          </div>
        ))}
      </div>
      <div className="text-xs text-center md:text-right">
        <p>
           Nuvanta Associates Ltd trading as Nuvanta Consult. Copyright ©  Nuvanta Consult 2025 | All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer; 