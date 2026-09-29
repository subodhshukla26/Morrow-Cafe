'use client'

import { ArrowRight } from 'lucide-react'
import { useOpenClaimDialog } from '@/components/ClaimDialog/ClaimDialogProvider'
import { CTA_LABEL } from '@/utils/campaign'
import './ClaimButton.css'

interface ClaimButtonProps {
  id?: string
  type?: 'button' | 'submit' | 'reset'
  size?: 'default' | 'compact'
  tone?: 'onDark' | 'onLight'
  className?: string
  disabled?: boolean
  loading?: boolean
}

export default function ClaimButton({
  id,
  type = 'button',
  size = 'default',
  tone = 'onLight',
  className = '',
  disabled = false,
  loading = false,
}: ClaimButtonProps) {
  const openClaimDialog = useOpenClaimDialog()

  const sizeClasses =
    size === 'compact'
      ? 'min-h-12 px-5 text-base'
      : 'min-h-14 w-full px-7 text-lg sm:w-auto'

  const focusClasses =
    tone === 'onDark'
      ? 'focus-visible:outline-cream'
      : 'focus-visible:outline-espresso'

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      aria-busy={loading || undefined}
      aria-disabled={disabled || undefined}
      onClick={type === 'button' ? openClaimDialog ?? undefined : undefined}
      className={`claim-button relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-terracotta font-semibold tracking-tight text-cream shadow-[0_10px_30px_-10px_rgba(180,84,31,0.7)] hover:bg-terracotta-deep focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60 ${focusClasses} ${sizeClasses} ${className}`}
    >
      <span className="relative">
        {loading ? 'Claiming…' : CTA_LABEL}
      </span>

      {!loading && (
        <ArrowRight
          aria-hidden="true"
          className="claim-button__icon relative size-5"
        />
      )}
    </button>
  )
}
