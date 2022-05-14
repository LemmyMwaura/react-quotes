import React, { useContext } from "react"
import { QuoteContext } from "./App"
import { useForm } from "react-hook-form"

export default function FormComponent() {
  const { handleQuoteAdd } = useContext(QuoteContext)
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    const {author, message} = data
    handleQuoteAdd(author, message)
    reset()
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="quote-form">
        <h1>FORM</h1>
        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            placeholder="Author"
            id="author"
            className="form-input"
            {...register('author', { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            type="text"
            placeholder="message"
            id="message"
            className="form-input"
            {...register('message', { required: true })}
          />
        </div>
        <input type="submit" className="btn submit-btn" value="Save Quote" />
      </form>
    </div>
  )
}
