import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  const { id } = router.query
  console.log('hi')
  const test = 'hi'
  return (
    <div>
      Note with {id} {test}
    </div>
  )
}

export default Page
