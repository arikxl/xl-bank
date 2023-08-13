import AboutSection from "@/components/HomeSection";
import AppHeader from "@/components/AppHeader";

import HeaderUserStats from "@/components/HeaderUserStats";
import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection";
import { homeSectionsContent } from "@/data/data";
import LoanHomeSection from "@/components/LoanHomeSection";
import HomeTeamSection from "@/components/HomeTeamSection";



export default function Home() {
  return (
    <>

    <main className="">

        <Hero />
        {homeSectionsContent.map((sec, index) => (
          <HomeSection key={sec.id} section={sec} index={index } />
        ))}
        <LoanHomeSection />
        <HomeTeamSection />
    </main>
    </>
  )
}
