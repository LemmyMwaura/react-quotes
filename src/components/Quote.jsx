import React,{ useContext } from 'react';
import { useState } from 'react';
import { BiLike, BiDislike} from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { QuoteContext } from './App';

export default function Quote({id,author,message}) {
  const [upvote, setUpvote] = useState(1)
  const [downvote, setDownvote] = useState(0)
  const {handleDelete} = useContext(QuoteContext)

  return (
    <>
      <div className="quote">
        <blockquote className="message">
          <cite>"{message}"</cite>
        </blockquote>
        <h1 className="author">{author}</h1>
        <div className="footer">
          <div className="like">
            <button 
              className="btn like-btn"
              onClick={() => { setUpvote(prevUpvote => prevUpvote + 1) }}
              ><BiLike color='green'/><span>{upvote}</span> 
            </button>
            <button 
              className="btn like-btn"
              onClick={() => { setDownvote(prevDownvote => prevDownvote + 1) }}
              ><BiDislike color='red'/><span>{downvote}</span> 
            </button>
          </div>
          <div 
            className="total"
            > <span>Total Votes: {upvote + downvote}</span> 
              <button 
                className='btn delete-btn'
                onClick={() => {handleDelete(id)}}
              >
                <FaTrashAlt color='#9391ff' size="1rem"/>
              </button>
          </div>
        </div>
      </div>
    </>
  )
}
