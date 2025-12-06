"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { CityFilter } from "@/components/city-filter"
import { CityGrid } from "@/components/city-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  const [selectedContinent, setSelectedContinent] = useState("all")

  return (
    <main className="min-h-screen">
      <HeroSection />
      <section id="cities" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CityFilter
            selectedContinent={selectedContinent}
            onFilterChange={setSelectedContinent}
          />
          <CityGrid selectedContinent={selectedContinent} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
