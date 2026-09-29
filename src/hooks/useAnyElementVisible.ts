'use client'

import { useEffect, useState } from 'react'

export function useAnyElementVisible(ids: string[]) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries.some((entry) => entry.isIntersecting))
      },
      { threshold: 0.1 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return isVisible
}
