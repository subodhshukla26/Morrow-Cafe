'use client'

import { X } from 'lucide-react'
import type { MouseEvent, Ref } from 'react'
import ClaimForm from '@/components/ClaimForm/ClaimForm'
import { CAFE_NAME, OFFER_AMOUNT } from '@/utils/campaign'
import './ClaimDialog.css'

interface ClaimDialogProps {
  ref: Ref<HTMLDialogElement>
  onClose?: () => void
}

export default function ClaimDialog({ ref, onClose }: ClaimDialogProps) {
  const closeOnBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) event.currentTarget.close()
  }

  return (
    <dialog
      ref={ref}
      className="claim-dialog"
      aria-labelledby="claim-dialog-title"
      aria-describedby="claim-dialog-description"
      onClick={closeOnBackdropClick}
      onClose={onClose}
    >
      <div className="claim-dialog__panel relative max-h-[92dvh] overflow-y-auto bg-cream px-5 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-espresso sm:px-8 sm:pt-8 sm:pb-8">
        <div aria-hidden="true" className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-espresso/15 sm:hidden" />

        <form method="dialog" className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <button
            type="submit"
            aria-label="Close"
            className="inline-flex size-11 items-center justify-center rounded-full text-espresso/70 transition-colors hover:bg-espresso/5 hover:text-espresso focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </form>

        <header className="pr-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            {`${OFFER_AMOUNT} off · ${CAFE_NAME}`}
          </p>
          <h2
            id="claim-dialog-title"
            className="mt-2 font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl"
          >
            Where should we send your code?
          </h2>
          <p id="claim-dialog-description" className="mt-2 leading-relaxed text-espresso/70">
            Two quick details and your voucher is on its way.
          </p>
        </header>

        <ClaimForm />
      </div>
    </dialog>
  )
}
