interface FieldErrorProps {
  id: string
  message?: string
}

export default function FieldError({
  id,
  message,
}: FieldErrorProps) {
  if (!message) return null

  return (
    <p
      id={id}
      role="alert"
      aria-live="polite"
      className="text-sm font-medium text-terracotta-deep"
    >
      {message}
    </p>
  )
}