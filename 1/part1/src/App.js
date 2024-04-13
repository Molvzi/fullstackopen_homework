
const Hello=(props)=>{
  return(
    <div>
      <p>Hello {props.name},you are{props.age}</p>
    </div>
  )
}


const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}


const App = () => {

  const name='Peter'
  const age='12'

  return (
    <>
      <h1>Greetings</h1>
      <Hello />
      <Hello name='Jack' age={12+23}/>
      <Hello name={name} age={age}/>
      <Footer/>
    </>
  )
}

export default App