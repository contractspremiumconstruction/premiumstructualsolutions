import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import HomeCategories from "@/components/HomeCategories"
import MajorWorks from "@/components/MajorWorks"
import CoreStrengths from "@/components/CoreStrengths"

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCategories />
      <MajorWorks />
      <AboutSection />
      <CoreStrengths />
    </>
  )
}
