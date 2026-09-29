const CLAIM_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function generateClaimCode() {
  const bytes = new Uint8Array(4)
  crypto.getRandomValues(bytes)

  const suffix = Array.from(bytes, (byte) => {
    return CLAIM_CODE_ALPHABET[byte % CLAIM_CODE_ALPHABET.length]
  }).join('')

  return `MORROW-${suffix}`
}

function errorResponse() {
  return Response.json(
    {
      success: false,
      message: 'Unable to process your request.',
    },
    { status: 400 },
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name =
      typeof body.name === 'string' ? body.name.trim() : ''

    const phone =
      typeof body.phone === 'string'
        ? body.phone.replace(/\D/g, '')
        : ''

    const validPhone = /^[6-9]\d{9}$/.test(phone)

    if (!name || !validPhone) {
      return errorResponse()
    }

    return Response.json({
      success: true,
      claimCode: generateClaimCode(),
      message: 'Your offer has been claimed.',
    })
  } catch {
    return errorResponse()
  }
}