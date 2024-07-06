"use client";

import NavbarComponent from '../components/Navbar/NavBarComponent';
import FooterComponent from '../components/Footer/FooterComponent';
import Hero from "sections/Hero";
import {
  Clients,
  Manage,
  Pixelgrade,
  BusinessStats,
  Design,
  MeetAllCustomers,
  Marketing,
  Demo,
} from '../../sections';

export default function Home() {
  return (
    <main>
      <header className="bg-silver">
        <NavbarComponent />
        <section className="bg-silver">
          <Hero />
        </section>
      </header>
      <section className="bg-silver">
        <Clients />
        <Manage />
        <Pixelgrade />
      </section>
      <section className="bg-silver">
        <BusinessStats />
      </section>
      <section className="bg-silver">
        <Design />
      </section>
      <section className="bg-silver">
        <MeetAllCustomers />
      </section>
      <section className="bg-silver">
        <Marketing />
      </section>
      <section className="bg-silver mt-5">
        <Demo />
      </section>
      <footer className="bg-secondary">
        <FooterComponent />
      </footer>
    </main>
  );
}
