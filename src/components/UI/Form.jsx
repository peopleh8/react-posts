import React from 'react'
import Button from './Button'
import Input from './Input'
import Title from './Title'

const Form = ({ state, setSate, handler }) => {
  return (
    <form 
      className='from'
      autoComplete='off'
      onSubmit={handler}
    >
      <Title>Post creation</Title>
      {
        Object.keys(state).map(key => 
          <Input
            key={key}
            type="text" 
            placeholder={`Enter ${key}`}
            value={state[key]}
            onChange={e => setSate({ ...state, [key]: e.target.value })}
          />
        )
      }
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Form