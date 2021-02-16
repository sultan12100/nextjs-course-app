// pages/[id].jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
// import Link from 'next/link'

const Page = ({ note }) => {
  // console.log('[id]')
  const router = useRouter()
  const { id } = router.query
  console.log(router.query)

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note: {note.title}</h1>
    </div>
  )
}
export default Page

export async function getServerSideProps({ params, res }) {
  const response = await fetch(`${process.env.API_URL}/api/notes/${params.id}`)
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {
      props: {},
    }
  }

  const { note } = await response.json()

  return {
    props: { note },
  }
}
