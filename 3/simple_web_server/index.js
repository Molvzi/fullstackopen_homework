require('dotenv').config()
const express = require('express')
const app = express()
const Note = require('./models/note')
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.use(express.static('build'))

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response) => {
  // const id = Number(request.params.id)
  // const note = notes.find(note => note.id === id)
  // if (note) {
  //   response.json(note)
  // } else {
  //   response.status(404).end()
  // }
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    // date: new Date(),
    // id: generateId(),
  })

  // notes = notes.concat(note)
  // response.json(note)

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
