import React from 'react'

export default function FormComponent() {
  return (
    <div className="form-wrapper">
      <form action="" className='quote-form'>
        <h1>FORM</h1>
        <div className="form-group">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" placeholder="Author" id='author' className='form-input'/>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <input type="text" placeholder="message" id="message" className='form-input'/>
        </div>
      </form>
    </div>
  )
}
