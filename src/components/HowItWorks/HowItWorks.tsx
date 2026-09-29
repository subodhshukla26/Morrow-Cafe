import { STEPS } from '@/utils/campaign'

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="px-5 py-16 sm:px-10 md:py-24 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
          How it works
        </p>
        <h2
          id="how-heading"
          className="mt-3 max-w-lg font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl"
        >
          Three steps to your next cup.
        </h2>

        <ol className="mt-10 flex flex-col gap-4 md:mt-14 md:flex-row md:gap-6">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-1 gap-5 rounded-3xl border border-espresso/10 bg-oat/50 p-6 md:flex-col md:gap-8 md:p-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-4xl leading-none italic text-terracotta md:text-5xl"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  <span className="sr-only">{`Step ${index + 1}: `}</span>
                  {step.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-espresso/70">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}