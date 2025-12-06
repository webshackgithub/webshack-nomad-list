"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cities } from "@/lib/cities-data"

interface CityFilterProps {
  selectedContinent: string
  onFilterChange: (continent: string) => void
}

export function CityFilter({ selectedContinent, onFilterChange }: CityFilterProps) {
  // Get unique continents from cities data
  const continents = ["all", ...new Set(cities.map((city) => city.continent))]

  // Helper to translate continent names if needed, or just use as is
  // Simple mapping for display
  const getLabel = (value: string) => {
    switch (value) {
      case "all": return "전체"
      case "Asia": return "아시아"
      case "Europe": return "유럽"
      case "North America": return "북미"
      case "South America": return "남미"
      case "Oceania": return "오세아니아"
      case "Africa": return "아프리카"
      default: return value
    }
  }

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">도시 탐색하기</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {continents.map((continent) => (
          <Button
            key={continent}
            variant={selectedContinent === continent ? "default" : "outline"}
            onClick={() => onFilterChange(continent)}
            className="transition-all"
          >
            {getLabel(continent)}
          </Button>
        ))}
      </div>
    </div>
  )
}
