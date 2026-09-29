'use client'

import ClaimButton from '@/components/ClaimButton/ClaimButton'
import { useAnyElementVisible } from '@/hooks/useAnyElementVisible'
import { CAFE_NAME, CLAIM_BUTTON_IDS, OFFER_AMOUNT } from '@/utils/campaign'
import './StickyClaimBar.css'

export default function StickyClaimBar() {
  const isPrimaryCtaVisible = useAnyElementVisible(CLAIM_BUTTON_IDS)
  const isShown = !isPrimaryCtaVisible

  return (
    <div
      className="sticky-claim-bar fixed inset-x-0 bottom-0 z-50 lg:hidden"
      data-shown={isShown}
      aria-hidden={!isShown}
      inert={!isShown}
    >
      <div className="mx-3 mb-3 flex items-center justify-between gap-3 rounded-full bg-espresso/95 py-2 pr-2 pl-5 text-cream shadow-2xl ring-1 ring-cream/10 backdrop-blur-md sm:mx-auto sm:max-w-md">
        <p className="leading-tight">
          <span className="block font-display text-lg font-semibold">{`${OFFER_AMOUNT} OFF`}</span>
          <span className="block text-xs text-cream/70">{CAFE_NAME}</span>
        </p>
        <ClaimButton size="compact" tone="onDark" />
      </div>
    </div>
  )
}
