import Image from 'next/image'
import { Check } from 'lucide-react'
import { HIGHLIGHTS } from '@/utils/campaign'

export default function CafeStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="px-5 pb-16 sm:px-10 md:pb-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-14 lg:gap-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] md:w-1/2 md:max-w-lg">
          <Image
            src="/images/morrow-table.png"
            alt="A latte with rosetta latte art beside a fresh butter croissant on a walnut table at Morrow Café"
            fill
            loading="lazy"
            quality={70}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="md:flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Why come back
          </p>
          <h2
            id="story-heading"
            className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl"
          >
            The second cup is on us. <span className="italic text-terracotta">Well, ₹150 of it.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-espresso/70">
            Morrow is the neighbourhood table in Sector 104 — slow mornings, good coffee and
            bakes worth the walk. Your offer is our way of saying see you soon.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
