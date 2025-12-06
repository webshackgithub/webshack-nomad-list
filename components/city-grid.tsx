"use client"

import { useMemo } from "react"
import { CityCard } from "@/components/city-card"
import { cities } from "@/lib/cities-data"

interface CityGridProps {
  selectedContinent: string
}

export function CityGrid({ selectedContinent }: CityGridProps) {
  const filteredCities = useMemo(() => {
    if (selectedContinent === "all") return cities
    return cities.filter((city) => city.continent === selectedContinent)
  }, [selectedContinent])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  )
}
