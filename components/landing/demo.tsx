import Navbar from './navbar';
import Hero from './hero';
import EcosystemStrip from './EcosystemStrip';
import Stats from './stats';
import Features from './features';
import AnimatedBento from './animated-bento';
import ComponentBento from './component-bento';
import TemplateBento from './template-bento';
import Testimonial from './testimonial';
import Footer from './footer';

export default function Landing01Demo() {
  return (
    <main className="dark min-h-screen overflow-x-hidden bg-[#050608] text-[#F4F4F0]">
      <Navbar />
      <Hero />
      <EcosystemStrip />
      <Stats />
      <Features />
      <AnimatedBento />
      <ComponentBento />
      <TemplateBento />
      <Testimonial />
      <Footer />
    </main>
  );
}
