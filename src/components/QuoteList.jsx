import React from 'react';
import Quote from './Quote';

export default function QuoteList({quotes}) {
  return (
    <div className="quotes-wrapper">
      {/* <h1 className='title'>Quotes</h1> */}
      <div className="quotes">
        {quotes.map(quote => {
            return <Quote key={quote.id} {...quote}/>
          })
        }
      </div> 
    </div>
  )
}
