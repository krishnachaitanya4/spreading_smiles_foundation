'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero';
import About from './components/home/About';
import SubHero from './components/home/SubHero';
import Funds from './components/home/Funds';
import Quote from './components/home/Quote';
import Events from './components/home/Events';
import Contact from './components/home/Contact';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main className={''}>
      
      <Hero />
      <SubHero />
      <About />
      <Quote />
      <Funds />
      <Events />
      <Contact />
      
    </main>
  );
}