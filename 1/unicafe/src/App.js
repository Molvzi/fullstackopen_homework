import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = ({ text, value }) => {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Total = ({ good, neutral, bad }) => {

  const total = good + neutral + bad;
  const average = ((good - bad) / total).toFixed(2);
  const positive = ((good / total) * 100).toFixed(2);

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={total} />
      <Statistics text='average' value={average} />
      <Statistics text='positive' value={positive} />
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <Header text='give feedback' />

      <div>
        <Button onClick={handleGoodClick} text="good"></Button>
        <Button onClick={handleNeutralClick} text="neutral"></Button>
        <Button onClick={handleBadClick} text="bad"></Button>
      </div>

      <h2>statistics</h2>

      <Total good={good} neutral={neutral} bad={bad} />


    </div>
  )
}
export default App