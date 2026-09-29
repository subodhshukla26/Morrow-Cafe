import type { ReactNode } from 'react'

export default function CampaignLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-cream text-espresso">{children}</main>
}
