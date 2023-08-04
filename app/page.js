import AboutSection from "@/components/HomeSection";
import AppHeader from "@/components/AppHeader";
import CreditHomeSection from "@/components/CreditHomeSection";
import CryptoHomeSection from "@/components/CryptoHomeSection";
import HeaderUserStats from "@/components/HeaderUserStats";
import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <>
    {/* <AppHeader /> */}

    <main className="">

        <Hero />
        <HomeSection />
        <HomeSection />
        <HomeSection />
      {/* <CryptoHomeSection />
      <CreditHomeSection />
      <LoanHomeSection /> */}
      {/* <AboutSection/> */}
    </main>
    </>
  )
}
