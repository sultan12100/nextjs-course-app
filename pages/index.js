import React from 'react'
import Link from 'next/link'
import '../src/styles.module.css'

const Page = () => {
  console.log('hi')
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>Link</a>
      </Link>
    </div>
  )
}

export default Page
