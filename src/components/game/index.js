import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FaCheck, FaPencilAlt } from 'react-icons/fa'
import CharacterSheet from '../character'
import Card from '@layout/card'
import CardHeading from '@layout/cardheading'

export default () => {
  const [title, setTitle] = useState('_____')
  const [characters, setCharacters] = useState([])
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const toggleEditMode = () => setIsEditingTitle(!isEditingTitle)
  const handleTitleEdit = e => setTitle(e.currentTarget.value)

  return (
    <Game>
      <CardHeading>
        Characters of {isEditingTitle || title}
        {isEditingTitle && (
          <TitleInput value={title} onChange={handleTitleEdit} />
        )}
        <TitleToggle val={isEditingTitle} onToggle={toggleEditMode} />
      </CardHeading>
      <Card>
      </Card>
      <CharList>
        {characters.map(c => (
          <CharacterSheet key={c.name} char={c} />
        ))}
      </CharList>
    </Game>
  )
}

const Game = tw.div`my-8 container mx-auto`
const CharList = styled.ul``
const TitleInput = tw.input`ml-2`

const TitleToggle = ({ val, onToggle }) =>
  val ? <FaCheck tw='ml-2' onClick={onToggle} /> : <FaPencilAlt tw='ml-2' onClick={onToggle} />
