import AboutSection from "@/components/HomeSection";
import AppHeader from "@/components/AppHeader";
import CreditHomeSection from "@/components/CreditHomeSection";
import CryptoHomeSection from "@/components/CryptoHomeSection";
import HeaderUserStats from "@/components/HeaderUserStats";
import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection";
import { homeSectionsContent } from "@/data/data";

export default function Home() {
  return (
    <>
    {/* <AppHeader /> */}

    <main className="">

        <Hero />
        {homeSectionsContent.map((sec, index) => (
          <HomeSection key={sec.id} section={sec} index={index } />
          
        ))}
        {/* <HomeSection  />
        <HomeSection /> */}
      {/* <CryptoHomeSection />
      <CreditHomeSection />
      <LoanHomeSection /> */}
      {/* <AboutSection/> */}
    </main>
    </>
  )
}
