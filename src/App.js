import './App.css';
import FormComponent from './components/FormComponent';
import QuoteList from './components/QuoteList';

function App() {
  return (
    <>
      <h2>Form</h2>
      <FormComponent/>
      <QuoteList quotes={sampleQuotes}/>
    </>
  );
}

const sampleQuotes = [
  {
    id:1,
    author:'Mahatma Gandhi',
    message:'Live as if you were to die tomorrow. Learn as if you were to live forever.'
  },
  {
    id:2,
    author:'Friedrich Nietzsche',
    message:'That which does not kill us makes us stronger.'
  },
  {
    id:3,
    author:'Virginia Satir',
    message:'We must not allow other people’s limited perceptions to define us.'
  },
  {
    id:4,
    author:'Theodore Roosevelt',
    message:'Do what you can, with what you have, where you are.'
  }
]

export default App;
