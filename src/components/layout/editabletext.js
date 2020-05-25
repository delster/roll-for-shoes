import React, { useReducer, useState, useEffect } from 'react'
import tw from 'twin.macro'
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa'

/*
 * Okay, I gave up on this but it's almost done so I'm leaving a note for future me:
 * Dude, all you have to do is..
 *   Edit->Change->Edit needs to use the input's value as a buffer
 *   Edit->Save->Saving needs to push the buffer to the state.text
 *   Edit->Cancel->View needs to clear the buffer
 *   ..then check for polish/QA things like Saving -> View should also flush buffer.
 */

/* "States" for our FSM. */
const EditableTextModes = Object.freeze({
  Edit: 'EDIT',
  View: 'VIEW',
  Saving: 'SAVING'
})
/* Actions that can be dispatched to declaratively transition between states. */
const EditableTextActions = Object.freeze({
  Cancel: 'CANCEL',
  Change: 'CHANGE',
  Save: 'SAVE',
  Start: 'START'
})
/* State transitions described as [startState][action]:[endState] */
const EditableTextTransitions = Object.freeze({
  EDIT: {
    CANCEL: EditableTextModes.View,
    SAVE: EditableTextModes.Saving
  },
  VIEW: {
    START: EditableTextModes.Edit
  },
  SAVING: {
    SAVE: EditableTextModes.View
  }
})
/* The reducer / brain of the thing */
const EditableReducer = (state, { action, text = '' }) => {
  const { mode } = state
  const transitionResult = (EditableTextTransitions[mode] || {})[action] || mode
  // Only relevant for { mode: saving, action: save }
  const newText = text ? text : state.text
  return { ...state, mode: transitionResult, text: newText }
}

export default () => {
  const initialState = { mode: EditableTextModes.View, text: '' }
  const [state, stateTo] = useReducer(EditableReducer, initialState)
  return (
    <>
      {state.mode === EditableTextModes.Edit && (
        <Input
          value={state.text}
          onChange={e =>
            stateTo({
              action: EditableTextActions.Change,
              text: e.currentTarget.value
            })
          }
        />
      )}
      {state.mode === EditableTextModes.View && state.text}
      {state.mode === EditableTextModes.Saving && <Saving dispatch={stateTo} />}
      <Toggle mode={state.mode} dispatch={stateTo} />
    </>
  )
}

const Saving = props => {
  const { dispatch } = props
  const [seconds, setSeconds] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1)

      if (seconds <= 0) {
        clearInterval(timer)
        dispatch({ action: EditableTextActions.Save })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [dispatch, seconds])

  return <span>..saving...</span>
}

/* Toggles between Pencil icon and Check/Close Icons */
const Toggle = props =>
  props.mode === EditableTextModes.Edit ? (
    <>
      <FaCheck
        tw="ml-2"
        onClick={() => props.dispatch({ action: EditableTextActions.Save })}
      />
      <FaTimes
        tw="ml-2"
        onClick={() => props.dispatch({ action: EditableTextActions.Cancel })}
      />
    </>
  ) : props.mode === EditableTextModes.View ? (
    <FaPencilAlt
      tw="ml-2"
      onClick={() => props.dispatch({ action: EditableTextActions.Start })}
    />
  ) : (
    <FaPencilAlt
      tw="ml-2"
      onClick={() => props.dispatch({ action: EditableTextActions.Start })}
    />
  )

const Input = tw.input`mx-2 px-2 py-1 shadow-sm rounded-sm`
