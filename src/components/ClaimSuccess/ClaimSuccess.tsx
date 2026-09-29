'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { OFFER_AMOUNT } from '@/utils/campaign'
import './ClaimSuccess.css'
interface ClaimSuccessProps {
  claimCode: string
}

export default function ClaimSuccess({
  claimCode,
}: ClaimSuccessProps) {
  const [copyState, setCopyState] = useState<
    'idle' | 'copied' | 'error'
  >('idle')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(claimCode)
      setCopyState('copied')

      window.setTimeout(() => {
        setCopyState('idle')
      }, 2500)
    } catch {
      setCopyState('error')
    }
  }

  return (
   <section
    role="status"
    aria-labelledby="claim-success-heading"
    aria-live="polite"
    className="claim-success mt-6 rounded-3xl border border-terracotta/20 bg-white p-6 text-center shadow-sm sm:p-8"
   >
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
        <Check aria-hidden="true" className="size-6" />
      </div>

      <h3
        id="claim-success-heading"
        className="mt-5 font-display text-3xl leading-tight tracking-tight"
      >
        {OFFER_AMOUNT} OFF claimed
      </h3>

      <p className="mt-3 leading-relaxed text-espresso/70">
        Show this code when you visit Morrow Café.
      </p>

      <output
        aria-label="Your claim code"
        className="mt-6 block rounded-2xl border border-dashed border-terracotta/40 bg-oat/40 px-4 py-4 font-mono text-xl font-bold tracking-[0.18em] text-espresso"
      >
        {claimCode}
      </output>

       <button
         type="button"
         onClick={handleCopy}
         data-copy-state={copyState}
         className="claim-copy-button mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-espresso/20 px-5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
        >
        {copyState === 'copied' ? (
          <Check aria-hidden="true" className="size-4 text-terracotta" />
        ) : (
          <Copy aria-hidden="true" className="size-4" />
        )}

        {copyState === 'copied' && 'Copied!'}
        {copyState === 'error' && 'Copy failed'}
        {copyState === 'idle' && 'Copy code'}
      </button>

      <p className="sr-only" aria-live="polite">
        {copyState === 'copied' && 'Claim code copied to clipboard.'}
        {copyState === 'error' &&
          'Unable to copy the claim code. Please copy it manually.'}
      </p>
    </section>
  )
}
