import React from 'react'


export default function Form({header, className, options}) {
  return (
      <div className="criteria">
        <h5>{header}</h5>
        <select className={className}>
          {options.map((option, pos) => <option value={option} key={pos}>{option}</option>)}
        </select>
      </div>
  )
}
