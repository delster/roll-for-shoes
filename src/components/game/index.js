import React, {useState} from 'react'
import tw from 'twin.macro'
import CharacterSheet from '@components/character'
import NewCharForm from '@components/character/new'
import Card from '@layout/card'
import CardHeading from '@layout/cardheading'
import EditableText from '@layout/editabletext'
import Rules from '@components/rules'


export default () => {
  const [gameName, setGameName] = useState('')
  const [characters, setCharacters] = useState([])

  const handleNewCharacter = name => {
    setCharacters([
      ...characters,
      { name, skills: [{ level: 1, name: 'Do Nothing', subskills: [] }] }
    ])
  }

  return (
    <GameWrap>
      <GameTitle>Roll for Shoes Manager PWA v1.0</GameTitle>
      <RulesCol>
        <CardHeading>Rules of {gameName}</CardHeading>
        <Card>
          <Rules />
        </Card>
        <CreateCharacterButton onClick={() => handleNewCharacter('Ted')}>
          Add Character
        </CreateCharacterButton>
      </RulesCol>
      <CharsCol>
        <CardHeading>Add New Character</CardHeading>
        <Card>
          <NewCharForm onSubmit={handleNewCharacter} />
        </Card>
        <CardHeading>
          Characters of <EditableText />
        </CardHeading>
        <CharList>

          {characters.map(c => (
            <CharacterSheet key={c.name} char={c} />
          ))}

          {/* <NewCharacterForm onCreate={handleNewCharacter} /> */}
        </CharList>
      </CharsCol>
    </GameWrap>
  )
}

const GameWrap = tw.div`container mx-auto grid grid-cols-12 gap-4`
const RulesCol = tw.aside`col-span-8`
const CharsCol = tw.main`col-span-4`
const GameTitle = tw.h1`col-span-12 flex items-center justify-center font-sans font-medium text-3xl tracking-wider uppercase mt-12 mb-4`

const CharList = tw.ul``
const CreateCharacterButton = tw.button`mt-4 px-4 py-2 bg-gray-400 text-gray-800 text-xs font-black tracking-wide font-sans uppercase`
