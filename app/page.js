import AboutSection from "@/components/AboutSection";
import CreditHomeSection from "@/components/CreditHomeSection";
import CryptoHomeSection from "@/components/CryptoHomeSection";
import HeaderUserStats from "@/components/HeaderUserStats";
import Hero from "@/components/Hero";
import LoanHomeSection from "@/components/LoanHomeSection";

export default function Home() {
  return (
    <main className="">

      <Hero />
      <CryptoHomeSection />
      <CreditHomeSection />
      <LoanHomeSection />
      <AboutSection/>
    </main>
  )
}
