import React, {useState} from 'react'
import createPersistedState from 'use-persisted-state'
import tw from 'twin.macro'
import CharacterSheet from '@components/character'
import NewCharForm from '@components/character/new'
import Card from '@layout/card'
import CardHeading from '@layout/cardheading'
import EditableText from '@layout/editabletext'
import Skill from '@components/skill'
import Rules from '@components/rules'

const useCharactersState = createPersistedState('chars')

export default () => {
  const [gameName, setGameName] = useState('')
  const [characters, setCharacters] = useCharactersState([])

  const handleNewCharacter = name => {
    setCharacters([
      ...characters,
      { name, skills: [{ level: 1, name: 'Do Nothing' }] }
    ])
  }

  return (
    <GameWrap>
      <GameTitle>
        Adventures in <EditableText onSave={setGameName} />
      </GameTitle>
      <RulesCol>
        <CardHeading>Rules</CardHeading>
        <Card>
          <Rules />
        </Card>
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
          <Card>
            <CharName>
              <CharNameLabel>
                Name: <EditableText />
              </CharNameLabel>
            </CharName>
            <SkillsHeading>Skills</SkillsHeading>
            <Skill level="1" name="Do Nothing" />
            <CreateCharacterButton onClick={handleNewCharacter}>
              Add Character
            </CreateCharacterButton>
          </Card>

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
const GameTitle = tw.h1`col-span-12 flex items-center justify-center font-serif font-semibold text-3xl tracking-wider uppercase mt-12 mb-4`

const CharList = tw.ul``
const CharName = tw.h3`flex items-center`
const CharNameLabel = tw.label`flex items-center`
const SkillsHeading = tw.h3`mt-2 text-gray-800 text-xs font-black font-mono uppercase`
const CreateCharacterButton = tw.button`mt-4 px-4 py-2 bg-gray-400 text-gray-800 text-xs font-black tracking-wide font-sans uppercase`
