import Image from 'next/image'
import ClaimButton from '@/components/ClaimButton/ClaimButton'
import SiteHeader from '@/components/SiteHeader/SiteHeader'
import { CAFE_NAME, OFFER_AMOUNT } from '@/utils/campaign'
import './CampaignHero.css'

export default function CampaignHero() {
  return (
    <section
      aria-labelledby="offer-heading"
      className="campaign-hero relative isolate flex min-h-svh flex-col bg-espresso text-cream lg:grid lg:min-h-[max(100svh,680px)] lg:grid-cols-[1.05fr_1fr] lg:bg-cream lg:text-espresso"
    >
      <div className="absolute inset-0 -z-10 lg:relative lg:inset-auto lg:z-0 lg:order-2 lg:m-4 lg:overflow-hidden lg:rounded-[2rem] xl:m-5">
        <Image
          src="/images/morrow-interior.png"
          alt="Inside Morrow Café: a barista pouring latte art at a walnut counter under warm pendant lights"
          fill
          priority
          quality={75}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-espresso/75 via-espresso/35 to-espresso lg:hidden"
        />
        <p className="absolute bottom-5 left-5 hidden rounded-full bg-espresso/70 px-4 py-2 text-sm font-medium text-cream backdrop-blur-md lg:block">
          {`Brewed fresh at ${CAFE_NAME}`}
        </p>
      </div>

      <div className="campaign-hero__content flex flex-1 flex-col px-5 sm:px-10 lg:order-1 lg:px-12 lg:py-10 xl:px-20">
        <SiteHeader />

        <div className="mt-auto max-w-xl pt-16 md:max-w-2xl lg:my-auto lg:pt-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-latte lg:text-terracotta">
            A thank-you for visiting today
          </p>

          <h1 id="offer-heading" className="mt-3 font-display tracking-tight">
            <span className="block text-[4.25rem] leading-[0.95] font-semibold sm:text-8xl lg:text-[6.5rem] xl:text-[7.5rem]">
              {OFFER_AMOUNT} <span className="italic font-normal">OFF</span>
            </span>
            <span className="mt-2 block text-2xl leading-tight font-normal sm:text-3xl lg:text-4xl">
              your next visit
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-cream/85 sm:text-lg lg:mt-6 lg:text-espresso/75">
            Enjoyed your cup? Claim a {OFFER_AMOUNT} thank-you to spend on coffee, bakes or brunch
            when you come back to Morrow.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 lg:mt-8">
            <ClaimButton id="hero-claim" tone="onDark" className="lg:focus-visible:outline-espresso" />
            <p className="text-center text-sm text-cream/70 sm:text-left lg:text-espresso/60">
              Under a minute · No app needed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
