import React from 'react';

export default function Quote({message, author}) {
  return (
    <>
      <div className="quote">
        <blockquote className="message">
          <cite>"{message}"</cite>
        </blockquote>
        <h1 className="author">{author}</h1>
        <div className="footer">
          <div className="like">
            <button>Upvote</button>
            <i class='bx bx-upvote'></i>
            <button>Downvote</button>
          </div>
          <div className="total">Total Votes: {1}</div>
        </div>
      </div>
    </>
  )
}
