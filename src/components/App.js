import React, { useState } from 'react';
import '../styles/App.css';
import FormComponent from './FormComponent';
import QuoteList from './QuoteList';
import Header from './Header';
import { v4 as uuid } from 'uuid';

export const QuoteContext = React.createContext()
function App() {
  const [quotes, setQuotes] = useState(sampleQuotes)

  const quoteContextValue = {
    handleDelete
  }
  
  function handleDelete(id){
    setQuotes(quotes.filter(quote => {
      return quote.id !== id
    }))
  }

  return (
    <QuoteContext.Provider value={quoteContextValue}>
      <div className='app-container'>
        <div className="wrapper">
          <Header/>
          <FormComponent/>
          <QuoteList quotes={quotes}/>
        </div>
      </div>
    </QuoteContext.Provider>
  );
}

const sampleQuotes = [
  {
    id:uuid(),
    author:'Mahatma Gandhi',
    message:'Live as if you were to die tomorrow. Learn as if you were to live forever.'
  },
  {
    id:uuid(),
    author:'Friedrich Nietzsche',
    message:'That which does not kill us makes us stronger.'
  },
  {
    id:uuid(),
    author:'Virginia Satir',
    message:'We must not allow other people’s limited perceptions to define us.'
  },
  {
    id:uuid(),
    author:'Theodore Roosevelt',
    message:'Do what you can, with what you have, where you are.'
  }
]

export default App;
