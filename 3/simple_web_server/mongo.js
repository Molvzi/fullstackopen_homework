const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://macketels:${password}@macketels.f3zmk4w.mongodb.net/noteApp?
retryWrites=true&w=majority&appName=Macketels`

mongoose.set('strictQuery', false)

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000 // 设置为 30 秒
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});



const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

//save the note to the database
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

//fetch all notes from the database
Note.find({}).then(result=>{
  result.forEach(note=>{
    console.log(note);
  })
  mongoose.connection.close()
})