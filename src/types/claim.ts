export type ClaimFormField = 'name' | 'phone'

export type ClaimFormValues = Record<ClaimFormField, string>

export type ClaimFormErrors = Partial<Record<ClaimFormField, string>>
