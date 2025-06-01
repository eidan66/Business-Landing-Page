import Hero from '../components/Hero.tsx';
import PainPoints from '../components/PainPoints';
import Solutions from '../components/Solutions';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FooterCTA from '../components/FooterCTA';
import StickyButton from '../components/StickyButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <PainPoints />
      <Solutions />
      <About />
      <Testimonials />
      <FooterCTA />
      <StickyButton />
    </div>
  );
}