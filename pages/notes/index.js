// pages/notes/index.jsx
/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import Link from 'next/link'

const Page = ({ notes }) => {
  console.log(notes)
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map((note) => (
          <div key={note.id} sx={{ width: '33%', p: 2 }}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <Button variant="secondary">Add note</Button>
    </div>
  )
}
export default Page
export async function getServerSideProps(/*context*/) {
  const res = await fetch(`${process.env.API_URL}/api/notes`)
  const { notes } = await res.json()
  console.log(notes)
  return {
    props: { notes },
  }
}
