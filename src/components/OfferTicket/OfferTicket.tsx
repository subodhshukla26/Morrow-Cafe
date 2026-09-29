import ClaimButton from '@/components/ClaimButton/ClaimButton'
import { CAFE_NAME, OFFER_AMOUNT, OFFER_DETAILS } from '@/utils/campaign'
import './OfferTicket.css'

export default function OfferTicket() {
  return (
    <section
      aria-labelledby="ticket-heading"
      className="bg-espresso px-5 py-16 text-cream sm:px-10 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-latte">
          Your voucher
        </p>
        <h2
          id="ticket-heading"
          className="mt-3 max-w-xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl"
        >
          Ready when you are.
        </h2>

        <div className="offer-ticket mt-10 flex w-full max-w-3xl flex-col text-left text-espresso md:mt-14 md:flex-row">
          <div className="flex flex-col justify-between gap-6 bg-cream p-7 md:w-[55%] md:p-10">
            <p className="font-display text-lg">
              {CAFE_NAME.split(' ')[0]} <span className="italic text-terracotta">Café</span>
            </p>
            <p className="font-display leading-none tracking-tight">
              <span className="block text-6xl font-semibold sm:text-7xl">{OFFER_AMOUNT}</span>
              <span className="mt-2 block text-2xl italic">off your next visit</span>
            </p>
          </div>

          <div className="offer-ticket__divider" aria-hidden="true" />

          <div className="flex flex-col gap-6 bg-oat p-7 md:flex-1 md:p-10">
            <dl className="flex flex-col gap-4">
              {OFFER_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-baseline justify-between gap-4 border-b border-espresso/10 pb-3">
                  <dt className="text-sm text-espresso/70">{detail.label}</dt>
                  <dd className="text-right font-semibold">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <ClaimButton id="final-claim" tone="onDark" className="mt-10" />
        <p className="mt-4 max-w-sm text-sm text-cream/60">
          One voucher per guest. Not exchangeable for cash or combinable with other offers.
        </p>
      </div>
    </section>
  )
}
