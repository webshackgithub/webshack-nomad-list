"use client"

import { DollarSign, Wifi, Thermometer, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { City } from "@/lib/cities-data"

interface CityCardProps {
  city: City
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* City Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={city.image || "/placeholder.svg"}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-semibold">{city.rating.toFixed(1)}</span>
        </div>
      </div>

      <CardContent className="p-5">
        {/* City Name & Country */}
        <div className="mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-1">
            {city.emoji} {city.name}
          </h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            {city.flag} {city.country}
          </p>
        </div>

        {/* City Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm">월 생활비</span>
            </div>
            <span className="font-semibold">${city.costPerMonth.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wifi className="h-4 w-4" />
              <span className="text-sm">인터넷 속도</span>
            </div>
            <span className="font-semibold">{city.internetSpeed} Mbps</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Thermometer className="h-4 w-4" />
              <span className="text-sm">평균 기온</span>
            </div>
            <span className="font-semibold">{city.temperature}°C</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
