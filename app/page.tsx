import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Categories />
      <WhyUs />
      <Services />
      <Stats />
      <ContactSection />
    </main>
  );
}
