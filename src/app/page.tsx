import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';

export default function Home() {
  return (
    <main>
      <BootstrapClient />
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
