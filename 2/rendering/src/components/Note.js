import React from 'react'

const Note = ({ note, ToggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li className='note'>
      {note.content}
      <button onClick={ToggleImportance}>{label}</button>
    </li>
  )
}

export default Note