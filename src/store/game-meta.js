import { atom } from 'recoil'

export const gameName = atom({ key: 'gameName', default: 'Game Name' })

export const gameDescription = atom({
  key: 'gameDescription',
  default: 'This will be an adventure (edit this and the title).'
})
