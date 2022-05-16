import React, { useContext, useState } from 'react'
import { QuoteContext } from './App';

export default function Header() {
  const {setShowForm} = useContext(QuoteContext)
  const [value, setValue] = useState('Open')

  return (
    <div className='header'>
      <h1 className='title'>QuoteMeApp</h1>
      <button 
        className='btn header-btn'
        onClick={() => {
          setShowForm(prevValue => !prevValue)
          setValue(prevValue => {
            if (prevValue === 'Open') return 'Close'
            else return 'Open'
          })
        }
      }
      >{value}</button>
    </div>
  )
}
