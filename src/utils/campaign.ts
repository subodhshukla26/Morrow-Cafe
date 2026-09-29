import type { CampaignDetail, CampaignStep } from '@/types/campaign'

export const CAFE_NAME = 'Morrow Café'
export const CAFE_LOCATION = 'Sector 104, Noida'
export const OFFER_AMOUNT = '₹150'
export const CTA_LABEL = `Claim ${OFFER_AMOUNT} OFF`

export const CLAIM_BUTTON_IDS = ['hero-claim', 'final-claim']

export const STEPS: CampaignStep[] = [
  {
    title: 'Claim your offer',
    description: `Tap “${CTA_LABEL}” and share a couple of quick details. It takes less than a minute.`,
  },
  {
    title: 'Get your code',
    description: 'Your personal voucher code arrives on your phone — no app, no sign-up.',
  },
  {
    title: 'Redeem next visit',
    description: `Show the code at the counter and ${OFFER_AMOUNT} comes straight off your bill.`,
  },
]

export const HIGHLIGHTS = [
  'Single-origin espresso and slow pour-overs',
  'Bakes pulled from the oven every morning',
  'Quiet corners made for long conversations',
]

export const OFFER_DETAILS: CampaignDetail[] = [
  { label: 'Where', value: CAFE_LOCATION },
  { label: 'Valid on', value: 'Your next visit' },
  { label: 'Limit', value: 'One per guest' },
]
