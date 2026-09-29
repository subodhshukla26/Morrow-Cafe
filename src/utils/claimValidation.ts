// src/utils/claimValidation.ts
import type {
  ClaimFormErrors,
  ClaimFormField,
  ClaimFormValues,
} from '@/types/claim'

export const CLAIM_FIELD_ORDER: ClaimFormField[] = ['name', 'phone']

const ALLOWED_PHONE_CHARACTERS = /^[\d\s()+-]*$/
const INDIAN_MOBILE = /^[6-9]\d{9}$/
const REPEATED_DIGIT = /^(\d)\1{9}$/

export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, '')

  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2)
  }

  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1)
  }

  return digits
}

export function validateName(value: string) {
  if (!value.trim()) return 'Please enter your name.'
  return undefined
}

export function validatePhone(value: string) {
  if (!value.trim()) return 'Please enter your phone number.'

  if (!ALLOWED_PHONE_CHARACTERS.test(value)) {
    return 'Phone numbers can only contain digits.'
  }

  const digits = normalizePhone(value)

  if (digits.length !== 10) {
    return 'Enter a 10-digit mobile number, for example 98765 43210.'
  }

  if (!INDIAN_MOBILE.test(digits)) {
    return 'Mobile numbers in India start with 6, 7, 8 or 9.'
  }

  if (REPEATED_DIGIT.test(digits)) {
    return "That number doesn't look right. Please check it and try again."
  }

  return undefined
}

const validators = {
  name: validateName,
  phone: validatePhone,
}

export function validateClaimField(
  field: ClaimFormField,
  value: string,
) {
  return validators[field](value)
}

export function validateClaimForm(
  values: ClaimFormValues,
): ClaimFormErrors {
  const errors: ClaimFormErrors = {}

  for (const field of CLAIM_FIELD_ORDER) {
    const error = validateClaimField(field, values[field])
    if (error) errors[field] = error
  }

  return errors
}