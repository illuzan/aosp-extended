import React from 'react'
import { useRouter } from 'next/router'

export default function DeviceSpecific() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>
      <p>Post: {slug}</p>
    </div>
  )
}
