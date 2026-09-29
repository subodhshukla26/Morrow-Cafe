'use client'

import {useRef,useState,type ChangeEvent,type FocusEvent,type FormEvent} from 'react'
import ClaimButton from '@/components/ClaimButton/ClaimButton'
import ClaimSuccess from '@/components/ClaimSuccess/ClaimSuccess'
import FieldError from '@/components/ClaimForm/FieldError'
import type {
  ClaimFormErrors,
  ClaimFormField,
  ClaimFormValues,
} from '@/types/claim'
import {
  CLAIM_FIELD_ORDER,
  validateClaimField,
  validateClaimForm,
} from '@/utils/claimValidation'

type ClaimResponse =
  | {
      success: true
      claimCode: string
      message: string
    }
  | {
      success: false
      message: string
    }

const INITIAL_VALUES: ClaimFormValues = {
  name: '',
  phone: '',
}

export default function ClaimForm() {
  const [values, setValues] =
    useState<ClaimFormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<ClaimFormErrors>({})
  const [apiError, setApiError] = useState<string>()
  const [claimCode, setClaimCode] = useState<string>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fieldRefs = {
    name: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
  }

  const updateFieldError = (
    field: ClaimFormField,
    value: string,
  ) => {
    setErrors((current) => ({
      ...current,
      [field]: validateClaimField(field, value),
    }))
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const field = event.target.name as ClaimFormField
    const { value } = event.target

    setValues((current) => ({
      ...current,
      [field]: value,
    }))

    setApiError(undefined)

    if (errors[field]) {
      updateFieldError(field, value)
    }
  }

  const handleBlur = (
    event: FocusEvent<HTMLInputElement>,
  ) => {
    const field = event.target.name as ClaimFormField
    updateFieldError(field, event.target.value)
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (isSubmitting) return

    setApiError(undefined)

    const nextErrors = validateClaimForm(values)
    setErrors(nextErrors)

    const firstInvalidField = CLAIM_FIELD_ORDER.find(
      (field) => nextErrors[field],
    )

    if (firstInvalidField) {
      fieldRefs[firstInvalidField].current?.focus()
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.replace(/\D/g, ''),
        }),
      })

      const result = (await response.json()) as ClaimResponse

      if (!response.ok || !result.success) {
        setApiError(result.message)
        return
      }

      setClaimCode(result.claimCode)
    } catch {
      setApiError('Unable to process your request.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (claimCode) {
    return <ClaimSuccess claimCode={claimCode} />
  }

  const inputBaseClasses =
    'min-h-14 w-full bg-white text-lg text-espresso placeholder:text-espresso/35'

  return (
        <form
          noValidate
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
          aria-describedby={apiError ? 'claim-api-error' : undefined}
          className="claim-state-enter mt-6 flex flex-col gap-5"
        >
      <div className="flex flex-col gap-2">
        <label htmlFor="claim-name" className="font-semibold">
          Name
        </label>

        <input
          ref={fieldRefs.name}
          id="claim-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={80}
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={
            errors.name ? 'claim-name-error' : undefined
          }
          className={`${inputBaseClasses} rounded-2xl border border-espresso/20 px-4 focus-visible:outline-2 focus-visible:outline-terracotta aria-invalid:border-terracotta-deep`}
        />

        <FieldError
          id="claim-name-error"
          message={errors.name}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="claim-phone" className="font-semibold">
          Phone number
        </label>

        <p id="claim-phone-hint" className="-mt-1 text-sm text-espresso/65">
          10-digit Indian mobile number. We&apos;ll only use it to send your voucher.
        </p>

        <div className="flex min-h-14 overflow-hidden rounded-2xl border border-espresso/20 bg-white">
          <span
            aria-hidden="true"
            className="flex items-center border-r border-espresso/10 bg-oat/60 px-4 text-lg font-medium text-espresso/70"
          >
            +91
          </span>

          <input
            ref={fieldRefs.phone}
            id="claim-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={16}
            placeholder="98765 43210"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone
                ? 'claim-phone-error claim-phone-hint'
                : 'claim-phone-hint'
            }
            className={`${inputBaseClasses} min-w-0 flex-1 px-4 tracking-wide outline-none`}
          />
        </div>

        <FieldError
          id="claim-phone-error"
          message={errors.phone}
        />
      </div>

      <FieldError
        id="claim-api-error"
        message={apiError}
      />

      <ClaimButton
        type="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="mt-2 sm:w-full"
      />

      {isSubmitting && (
        <p
          role="status"
          aria-live="polite"
          className="text-center text-sm text-espresso/65"
        >
          Processing your claim…
        </p>
      )}
    </form>
  )
}
