import React, { useState } from 'react'
import tw from 'twin.macro'
import { FaCheck, FaPencilAlt } from 'react-icons/fa'

export default () => {
  const [text, setText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const handleEditing = e => setText(e.currentTarget.value)
  const toggleMode = () => setIsEditing(!isEditing)

  return (
    <>
      {isEditing ? <Input value={text} onChange={handleEditing} /> : text}
      <Toggle val={isEditing} onToggle={toggleMode} />
    </>
  )
}

const Input = tw.input`mx-2 px-2 py-1 shadow-sm rounded-sm`

const Toggle = ({ val, onToggle }) =>
  val ? (
    <>
      <FaCheck tw="ml-2" onClick={onToggle} />
    </>
  ) : (
    <FaPencilAlt tw="ml-2" onClick={onToggle} />
  )
