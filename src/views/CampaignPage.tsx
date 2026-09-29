import CafeStory from '@/components/CafeStory/CafeStory'
import CampaignHero from '@/components/CampaignHero/CampaignHero'
import ClaimDialogProvider from '@/components/ClaimDialog/ClaimDialogProvider'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import OfferTicket from '@/components/OfferTicket/OfferTicket'
import StickyClaimBar from '@/components/StickyClaimBar/StickyClaimBar'
import CampaignLayout from '@/layouts/CampaignLayout'

export default function CampaignPage() {
  return (
    <ClaimDialogProvider>
    <CampaignLayout>
      <CampaignHero />
      <HowItWorks />
      <CafeStory />
      <OfferTicket />
      <StickyClaimBar />
    </CampaignLayout>
    </ClaimDialogProvider >
  )
}
