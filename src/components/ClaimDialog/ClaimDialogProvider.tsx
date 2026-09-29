'use client'

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import ClaimDialog from '@/components/ClaimDialog/ClaimDialog'

const OpenClaimDialogContext = createContext<(() => void) | null>(null)

export function useOpenClaimDialog() {
  return useContext(OpenClaimDialogContext)
}

export default function ClaimDialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [dialogKey, setDialogKey] = useState(0)

  const openClaimDialog = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    dialog.querySelector<HTMLInputElement>('input')?.focus()
  }, [])

  const handleDialogClose = useCallback(() => {
    setDialogKey((current) => current + 1)
  }, [])

  return (
    <OpenClaimDialogContext.Provider value={openClaimDialog}>
      {children}
      <ClaimDialog
        key={dialogKey}
        ref={dialogRef}
        onClose={handleDialogClose}
      />
    </OpenClaimDialogContext.Provider>
  )
}
