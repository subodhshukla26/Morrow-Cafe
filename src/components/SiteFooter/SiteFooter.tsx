import { CAFE_LOCATION, CAFE_NAME } from '@/utils/campaign'

export default function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-espresso px-5 pt-8 pb-28 text-cream/60 sm:px-10 lg:px-12 lg:pb-8 xl:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-display text-base text-cream">{CAFE_NAME}</span>
          {` · ${CAFE_LOCATION}, Uttar Pradesh`}
        </p>
        <p>{`© ${new Date().getFullYear()} ${CAFE_NAME}`}</p>
      </div>
    </footer>
  )
}
