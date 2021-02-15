import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc()
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    }
    notes.push(note)
    const a = res.json({
      status: res.statusCode,
      success: true,
      data: note,
    })
    console.log(a)
  })
  .get((req, res) => {
    res.json({
      status: res.statusCode,
      success: true,
      notes: notes,
    })
  })

export default handler
