import React from 'react'

export default function FormComponent() {
  return (
    <>
      <form action="" className='quote-form'>
        <div className="formgroup">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" placeholder="Author" id='author' className='form-input'/>
        </div>
        <div className="formgroup">
          <label htmlFor="message" className="form-label">Message</label>
          <input type="text" placeholder="message" id="message"/>
        </div>
      </form>
    </>
  )
}
