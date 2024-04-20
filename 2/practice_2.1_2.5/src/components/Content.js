import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {

  const sumExercises=parts.reduce((total,part)=>total+part.exercises,0)

  return (
    <div>
      {
        parts.map((part) => {
          return <Part key={part.id} part={part} />
        })
      }
      <div>
        <p>total of {sumExercises} exercises</p>
      </div>
    </div>
  )
}

export default Content