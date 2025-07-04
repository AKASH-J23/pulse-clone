import React from "react";
import Image from "next/image";
import Link from "next/link";

const accreditations = [
  {
    src: "/generic/footer/_400xAUTO_fit_center-center_92_none/118/logo-rics.webp",
    alt: "RICS",
  },
  {
    src: "/generic/footer/_400xAUTO_fit_center-center_92_none/6173/APM_Corporate-Partner_Outlined_white.webp",
    alt: "APM Corporate Partner",
  },
  {
    src: "/generic/footer/_400xAUTO_fit_center-center_92_none/120/logo_construction_line.webp",
    alt: "Constructionline",
  },
  {
    src: "/generic/footer/_400xAUTO_fit_center-center_92_none/14397/Logo-acclaim.webp",
    alt: "Acclaim",
  },
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

const navLinks = [
  { href: "/sectors", label: "Sectors" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/policies-and-statements", label: "Legals" },
  { href: "/insights", label: "Insights" },
];

const Footer = () => (
  <footer className="site-footer overflow-hidden bg-[#060725] pt-14 md:pt-20 text-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-9">
      {/* Left: Logo and Email */}
      <div className="md:col-span-6 mb-8 md:mb-0 flex flex-col gap-6">
        <Link href="/" aria-label="Go to the home page" className="block w-[140px]">
          <span className="sr-only">Back to home</span>
          {/* Inline SVG logo from reference */}
          {/* <svg className="w-[94px] md:w-[140px] text-white" width="190" height="77" viewBox="0 0 190 77" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path fill="currentColor" d="M27.905 76.41c-.767 0-1.48-.125-2.123-.375a5.069 5.069 0 0 1-1.695-1.074 4.924 4.924 0 0 1-1.124-1.627c-.268-.626-.393-1.306-.393-2.057 0-.751.143-1.449.393-2.057a4.844 4.844 0 0 1 1.124-1.628 5.07 5.07 0 0 1 1.695-1.073 5.821 5.821 0 0 1 2.123-.375c.82 0 1.57.143 2.248.429a4.44 4.44 0 0 1 1.713 1.252l-1.195 1.127a3.808 3.808 0 0 0-1.232-.877 3.534 3.534 0 0 0-1.445-.286c-.517 0-.999.09-1.427.25a3.4 3.4 0 0 0-1.873 1.843c-.179.429-.268.894-.268 1.413s.09.983.268 1.413c.178.43.428.805.749 1.109.321.304.696.554 1.124.733.428.179.91.25 1.427.25.518 0 1-.089 1.445-.286.447-.197.857-.5 1.232-.894l1.195 1.127a4.438 4.438 0 0 1-1.713 1.252c-.678.286-1.427.43-2.248.43v-.019ZM54.454 76.41c-.767 0-1.48-.125-2.141-.393a5.015 5.015 0 0 1-2.837-2.737c-.268-.626-.392-1.306-.392-2.039 0-.733.142-1.43.392-2.057a4.923 4.923 0 0 1 1.124-1.627 4.975 4.975 0 0 1 1.713-1.074 6.02 6.02 0 0 1 2.159-.393c.785 0 1.48.125 2.14.376.661.25 1.232.608 1.714 1.073a4.819 4.819 0 0 1 1.124 1.645c.267.626.392 1.324.392 2.057 0 .733-.125 1.431-.392 2.057a4.997 4.997 0 0 1-1.124 1.645 4.975 4.975 0 0 1-1.713 1.074c-.66.25-1.374.375-2.141.375l-.018.018Zm0-1.627c.5 0 .963-.09 1.392-.25a3.324 3.324 0 0 0 1.837-1.843c.179-.43.268-.894.268-1.413s-.09-.984-.25-1.413c-.178-.43-.41-.805-.731-1.11a3.852 3.852 0 0 0-1.106-.733c-.41-.178-.893-.25-1.392-.25-.5 0-.964.09-1.41.25a3.4 3.4 0 0 0-1.124.734c-.32.322-.553.697-.75 1.109-.195.411-.267.894-.267 1.413s.09.966.268 1.395c.178.43.428.805.75 1.127.32.322.695.572 1.123.733.428.179.892.25 1.41.25h-.018ZM77.934 76.267V66.251h1.535l6.262 7.727h-.75V66.25h1.82v10.016h-1.534l-6.245-7.727h.75v7.727h-1.838ZM108.712 76.41a7.02 7.02 0 0 1-2.231-.34c-.713-.214-1.284-.518-1.712-.858l.642-1.449c.392.322.892.572 1.481.787a5.274 5.274 0 0 0 1.82.322c.517 0 .945-.054 1.266-.179.322-.107.554-.268.714-.465a.998.998 0 0 0 .232-.662c0-.304-.107-.554-.321-.733-.214-.179-.5-.34-.857-.447a13.433 13.433 0 0 0-1.159-.304c-.428-.09-.839-.197-1.267-.34a5.286 5.286 0 0 1-1.16-.5 2.518 2.518 0 0 1-.856-.824c-.214-.34-.321-.787-.321-1.323 0-.537.142-1.038.428-1.503.285-.447.731-.823 1.32-1.09.589-.27 1.356-.412 2.266-.412.607 0 1.196.071 1.784.232a4.801 4.801 0 0 1 1.535.662l-.589 1.449a5.253 5.253 0 0 0-1.392-.59 5.416 5.416 0 0 0-1.374-.197 4.03 4.03 0 0 0-1.249.179c-.321.125-.553.286-.713.5-.143.197-.214.43-.214.68 0 .304.107.555.321.734.214.178.499.322.838.429.339.107.732.214 1.16.304.428.09.857.215 1.267.34.41.125.803.304 1.16.5.357.197.642.484.856.823.214.34.321.77.321 1.288 0 .519-.142 1.038-.428 1.485-.285.447-.731.823-1.338 1.09-.607.27-1.356.412-2.266.412h.036ZM135.011 76.41c-1.356 0-2.427-.393-3.212-1.162-.785-.77-1.159-1.896-1.159-3.363v-5.634h1.855v5.58c0 1.038.214 1.79.66 2.254.446.465 1.071.698 1.874.698.803 0 1.427-.233 1.873-.698.446-.465.66-1.216.66-2.253V66.25h1.82v5.634c0 1.467-.392 2.594-1.159 3.363-.768.769-1.856 1.162-3.212 1.162ZM158.134 76.267V66.251h1.856v8.442h5.228v1.574h-7.084ZM184.844 76.267v-8.442h-3.319v-1.574H190v1.574h-3.319v8.442h-1.855.018ZM0 19.657V77l10.545-2.987V19.657H0ZM83.68 19.657H73.134v34.199h10.544V19.657ZM96.58 3.094v50.761h10.544V0L96.579 3.094ZM58.825 43.93V19.64h-9.617v24.29c0 3.523 1.642 9.926 9.225 9.926s10.866-6.242 10.866-6.242c-10.456 5.401-10.456-3.685-10.456-3.685h-.018ZM14.363 22.787s3.122-1.413 6.477-.858c3.354.554 6.958 3.13 7.35 14.827-.392 11.698-3.836 14.238-7.35 14.828-3.515.59-6.477-.859-6.477-.859s3.675 3.13 9.688 3.13c6.013 0 14.773-6.313 14.773-17.099 0-10.785-8.742-17.099-14.773-17.099-6.03 0-9.688 3.13-9.688 3.13ZM141.719 30.3a5.323 5.323 0 0 0 5.317-5.33c0-2.944-2.38-5.33-5.317-5.33a5.324 5.324 0 0 0-5.317 5.33 5.324 5.324 0 0 0 5.317 5.33ZM190 35.003h-19.68v.858H190v-.858Z"/>
            <path fill="currentColor" d="M131.353 20.015s-3.497 1.574-3.497 4.274c0 2.701 2.498 5.635 9.528 8.98 7.029 3.344 11.044 7.458 11.044 12.538s-4.211 9.032-13.863 9.032c-9.653 0-14.435-3.595-14.435-3.595v-8.925h1.303s1.659 11.536 13.132 11.536c4.853 0 5.424-3.309 5.424-4.49 0-1.18-.464-4.489-8.226-8.03-7.761-3.541-12.293-7.316-12.293-12.592 0-5.276 5.478-8.728 11.883-8.728ZM190 35.433s.535-15.776-15.362-15.776-17.289 15.561-17.289 17.78c0 2.217 1.927 16.365 16.879 16.365 8.029 0 12.507-4.704 14.273-9.194 0 0-2.444 4.079-12.56 4.079-5.103-.054-8.797-4.275-9.011-8.246-.178-3.488 0-8.729 0-8.729s.429-11.232 7.672-11.232c4.996.054 5.781 7.226 5.781 14.953h9.635H190Z"/>
          </svg> */}
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Figtree, serif', letterSpacing: '-1px', color: '#fff' }}>Nuvanta Consult</h1>
        </Link>
        <a className="link link--white font-secondary underline" href="mailto:enquiries@Nuvantaconsult.co.uk">enquiries@Nuvantaconsult.co.uk</a>
      </div>

      {/* LinkedIn Icon */}
      <div className="md:col-span-1 flex items-start md:items-center mb-8 md:mb-0">
        <a href="https://www.linkedin.com/company/pulseconsult/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-100 hover:opacity-70 transition-opacity duration-300">
          <span className="sr-only">LinkedIn</span>
          <svg className="text-white w-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none" role="presentation"><path d="M4.772 2.391a2.384 2.384 0 0 1-2.376 2.392A2.384 2.384 0 0 1 .019 2.39 2.384 2.384 0 0 1 2.396 0a2.384 2.384 0 0 1 2.377 2.391Zm.02 4.305H0V22h4.792V6.696Zm7.65 0H7.68V22h4.762v-8.034c0-4.467 5.778-4.832 5.778 0V22H23v-9.69c0-7.538-8.55-7.263-10.559-3.553V6.696Z" fill="currentColor"></path></svg>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="md:col-span-5 flex flex-col md:flex-row md:justify-end gap-8">
        <ul className="grid grid-cols-2 gap-y-2 gap-x-8 text-base font-light">
          {navLinks.map((link) => (
            <li key={link.href} className="mb-2">
              <Link href={link.href} className="hover:underline hover:text-red-400">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Accreditation Logos */}
    <div className="container mx-auto flex flex-wrap justify-center gap-x-10 gap-y-6 py-6">
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

    {/* Copyright */}
    <div className="bg-[#060725] text-white text-xs py-4">
      <div className="container mx-auto text-center">
        <p>Nuvanta Associates Ltd trading as Nuvanta Consult. Copyright © Nuvanta Consult 2025 | All rights reserved</p>
      </div>
    </div>
  </footer>
);

export const GetInTouchSection = () => (
  <section className="w-full bg-[#e3edf7] py-16 px-4 md:px-0">
    <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative">
      <div className="max-w-3xl">
        <div className="text-base font-semibold mb-4 text-[#060725]">Get in touch</div>
        <h2 className="font-wicklow text-[#060725] text-4xl md:text-5xl font-bold leading-tight mb-0">
          Ask a question, book a<br />
          meeting or reach out to<br />
          our team.
        </h2>
      </div>
      <div className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex-shrink-0">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 48L48 16M48 16H20M48 16V44" stroke="#060725" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </section>
);

export default Footer; 