import AboutSection from "@/components/AboutSection";
import AppHeader from "@/components/AppHeader";
import CreditHomeSection from "@/components/CreditHomeSection";
import CryptoHomeSection from "@/components/CryptoHomeSection";
import HeaderUserStats from "@/components/HeaderUserStats";
import Hero from "@/components/Hero";
import LoanHomeSection from "@/components/LoanHomeSection";

export default function Home() {
  return (
    <>
    {/* <AppHeader /> */}

    <main className="">

      <Hero />
      <CryptoHomeSection />
      <CreditHomeSection />
      <LoanHomeSection />
      <AboutSection/>
    </main>
    </>
  )
}
