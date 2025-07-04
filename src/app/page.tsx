import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FeatureList from './components/FeatureList';
import ServicesList from './components/ServicesList';
import SectorSlider from './components/SectorSlider';
import ProjectCards from './components/ProjectCards';
import Testimonial from './components/Testimonial';
import ClientLogoSlider from './components/ClientLogoSlider';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <FeatureList />
      <ServicesList />
      <SectorSlider />
      <div className="h-40" />
      <ProjectCards />
      <Testimonial />
      <ClientLogoSlider />
      <Footer />
      {/* Other sections will be added here as components */}
    </>
  );
}




