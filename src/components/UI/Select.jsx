import React from 'react'

const Select = ({ name, options, setOptions }) => {
  return (
    <select 
      name={name} 
      id={name}
      onChange={e => setOptions({...options, selected: e.target.value})}
    >
      <option value="" selected disabled>Choose an option</option>
      {
        options.list.map(opation => 
          <option 
            key={opation.key}
            value={opation.value}
          >
            {opation.value}
          </option>
        )
      }
    </select>
  )
}

export default Select