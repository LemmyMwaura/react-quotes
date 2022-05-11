import React from 'react'

export default function Quote({message, author}) {
  return (
    <div>
      <h6 className="message">{message}</h6>
      <h1 className="author">{author}</h1>
    </div>
  )
}
