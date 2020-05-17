import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa'
import CharacterSheet from '../character'

export default () => {
  const [id, setId] = useState(1)
  const [title, setTitle] = useState('')
  const [characters, setCharacters] = useState([])
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const toggleEditMode = () => setIsEditingTitle(!isEditingTitle)
  const handleTitleEdit = e => setTitle(e.currentTarget.value)

  return (
    <Game>
      <GameTitle>
        Game #{id}: {isEditingTitle || title}
        {isEditingTitle && (
          <TitleInput value={title} onChange={handleTitleEdit} />
        )}
        <TitleToggle val={isEditingTitle} onToggle={toggleEditMode} />
      </GameTitle>

      <CharList>
        {characters.map(c => (
          <CharacterSheet key={c.name} char={c} />
        ))}
      </CharList>
    </Game>
  )
}

const Game = tw.div`m-8 p-4 font-mono bg-gray-100 shadow-md container mx-auto`
const GameTitle = styled.h2`
  & svg {
    ${tw`inline-block ml-2`}
  }`
const CharList = styled.ul``
const TitleInput = styled.input``

const TitleToggle = ({ val, onToggle }) =>
  val ? <FaCheck onClick={onToggle} /> : <FaPencilAlt onClick={onToggle} />
