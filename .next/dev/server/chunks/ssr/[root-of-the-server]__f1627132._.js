module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

```javascript
import { HeroSection } from "@/components/hero-section"
import { CityFilter } from "@/components/city-filter"
import { CityGrid } from "@/components/city-grid"
import { Footer } from "@/components/footer"
import { useState } from "react"

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
```;
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f1627132._.js.map