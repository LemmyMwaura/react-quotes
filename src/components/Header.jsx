import React, { useContext, useState } from 'react'
import { QuoteContext } from './App';

export default function Header() {
  const {setShowForm} = useContext(QuoteContext)
  const [value, setValue] = useState('Open')

  return (
    <div className='header'>
      <h1>QuoteMeApp</h1>
      <button 
        className='btn'
        onClick={() => {
          setShowForm(prevValue => !prevValue)
          setValue(prevValue => {
            if (prevValue === 'Open') return 'Close'
            else return 'Add'
          })
        }
      }
      >{value}</button>
    </div>
  )
}
