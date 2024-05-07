const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

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



const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name,
  number,
})

//save the note to the database
person.save().then(result => {
  console.log(`added ${name} number ${number} to phonebook`)
  mongoose.connection.close()
})

//fetch all notes from the database
// Person.find({}).then(result=>{
//   result.forEach(person=>{
//     console.log(person);
//   })
//   mongoose.connection.close()
// })