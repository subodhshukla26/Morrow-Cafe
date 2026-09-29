import { MapPin } from 'lucide-react'
import { CAFE_LOCATION } from '@/utils/campaign'

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <p className="font-display text-2xl leading-none tracking-tight sm:text-[1.7rem]">
        Morrow <span className="italic text-latte lg:text-terracotta">Café</span>
      </p>
      <p className="inline-flex items-center gap-1.5 rounded-full border border-cream/25 bg-espresso/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm sm:text-sm lg:border-espresso/15 lg:bg-transparent lg:backdrop-blur-none">
        <MapPin aria-hidden="true" className="size-3.5" />
        {CAFE_LOCATION}
      </p>
    </header>
  )
}
