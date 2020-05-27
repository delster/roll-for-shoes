import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'
import { FaPlusCircle } from 'react-icons/fa'
import CharacterSheet from '@components/character'
import CardHeading from '@layout/cardheading'
import EditableText from '@layout/editable'
import Rules from '@components/rules'
import { gameName, gameDescription } from '@store/game-meta'

export default () => {
  const gameTitle = useRecoilValue(gameName)
  const gameDesc = useRecoilValue(gameDescription)
  const [characters, setCharacters] = useState([])

  const getDummyCharacter = name => {
    /* Using `created` as a unique ID until we decide on a backend. */
    const now = new Date().toJSON()

    return {
      created: now,
      name,
      skills: [{ level: 1, name: 'Do Nothing', subSkills: [] }]
    }
  }

  const handleNewCharacter = name =>
    setCharacters([...characters, getDummyCharacter(name)])

  return (
    <GameWrap>
      <MetaCol>
        <GameTitle>
          <EditableText placeholder={gameTitle} />
        </GameTitle>
        <GameSummary>
          <EditableText placeholder={gameDesc} />
        </GameSummary>
      </MetaCol>
      <RulesCol>
        <CardHeading>Rules of {gameTitle}</CardHeading>
        <Rules />
      </RulesCol>
      <CharsCol>
        <CharHeadingWrap>
          <CardHeading>Characters of {gameTitle}</CardHeading>
          <CreateCharacterButton onClick={() => handleNewCharacter('Ted')}>
            <FaPlusCircle /> Add
          </CreateCharacterButton>
        </CharHeadingWrap>
        <CharList>
          {characters.map(c => (
            <CharacterSheet key={c.created} char={c} />
          ))}
        </CharList>
      </CharsCol>
    </GameWrap>
  )
}

const GameWrap = tw.div`grid grid-cols-12 gap-4`
const MetaCol = tw.div`col-span-12 flex flex-col`
const RulesCol = tw.aside`col-span-4`
const CharsCol = tw.main`col-span-8`

const GameTitle = tw.h1`font-sans text-lg tracking-wider`
const GameSummary = tw.p`font-serif font-semibold text-teal-700 text-sm`

const CharHeadingWrap = tw.div`flex items-center justify-between`
const CreateCharacterButton = tw.button`flex items-center justify-around w-20 mb-2 px-3 py-1 bg-gray-400 font-bold text-gray-800 text-sm rounded shadow`
const CharList = tw.ul`grid grid-cols-2 gap-4 grid-flow-row-dense`
