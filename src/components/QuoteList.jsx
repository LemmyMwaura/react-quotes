import React from 'react';
import Quote from './Quote';

export default function QuoteList({quotes}) {
  return (
    <>
      {quotes.map(quote => {
          return <Quote key={quote.id} {...quote}/>
        })
      }
    </>
  )
}
