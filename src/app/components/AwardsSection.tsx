"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const awards = [
  // 10028
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/10028/Midlands-Consultant-of-the-Year.webp', alt: 'Midlands Consultant of the Year', caption: 'Midlands Consultant of the Year' },
  // 11465
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/11465/2022-ISPE-FOYA-Social-Impact.webp', alt: '2022 ISPE FOYA Social Impact', caption: '2022 ISPE FOYA Social Impact' },
  // 14663
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/14663/2024-CE_Awards_logo-winner.webp', alt: '2024 CE Awards Winner', caption: '2024 CE Awards Winner' },
  // 6032
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/6032/Logo_CE_Midlands_WM_sme_of_the_year_2024_winner.webp', alt: 'CE Midlands SME of the Year 2024 Winner', caption: 'CE Midlands SME of the Year 2024 Winner' },
  // 6034
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/6034/logo_english_national_ballet_winner_rics_social_impact_2020_purple.webp', alt: 'English National Ballet RICS Social Impact 2020 Winner', caption: 'English National Ballet RICS Social Impact 2020 Winner' },
  // 7685
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/7685/CE-Midlands_WM_delivering_value_winner.webp', alt: 'CE Midlands Delivering Value Winner', caption: 'CE Midlands Delivering Value Winner' },
  // 7924
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/7924/snow_hill_rics_finalist_community_benefit.webp', alt: 'Snow Hill RICS Finalist Community Benefit', caption: 'Snow Hill RICS Finalist Community Benefit' },
  // 7925
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/7925/ragged_school_museum_rics_finalist_refurbishment.webp', alt: 'Ragged School Museum RICS Finalist Refurbishment', caption: 'Ragged School Museum RICS Finalist Refurbishment' },
  // 8460
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/8460/procon_leicester_space_park_leicester_2022_winner.webp', alt: 'Procon Leicester Space Park Leicester 2022 Winner', caption: 'Procon Leicester Space Park Leicester 2022 Winner' },
  // 8537
  { src: '/generic/Awards-accreditations-logos/_1536x1024_fit_center-center_92_none/8537/2023-CE_Awards_2024_logo-Finalist.webp', alt: '2023 CE Awards 2024 Finalist', caption: '2023 CE Awards 2024 Finalist' },
];

const AwardsSection = () => (
  <section style={{ background: '#fff', padding: '3rem 0', textAlign: 'center' }}>
    <h2 style={{ color: '#0a1433', fontWeight: 700, fontSize: '2rem', marginBottom: '2.5rem' }}>
      Award winning construction consultancy
    </h2>
    <Swiper
      spaceBetween={40}
      slidesPerView={4}
      speed={3000}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{ margin: '0 auto' }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      modules={[Autoplay]}
    >
      {awards.map((award, idx) => (
        <SwiperSlide key={idx}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '140px', width: '100%' }}>
            <Image src={award.src} alt={award.alt} width={180} height={100} style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '100px' }} />
            <div style={{ color: '#6b6b6b', fontSize: '1rem', marginTop: '0.5rem' }}>{award.caption}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default AwardsSection; 