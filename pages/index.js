/** @jsx jsx */
import { jsx } from 'theme-ui'

import dynamic from 'next/dynamic'
// import Link from 'next/link'

const SponsoreAd = dynamic(() => import('../src/components/SponsoreAd'), {
  ssr: false,
  loading: () => <p>...</p>,
})

export default ({ content }) => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: 'containers.page',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
        <SponsoreAd />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  // get data from CMS
  return {
    props: {
      content: {
        title: 'This is my really nice app.',
      },
    },
  }
}
