'use client'

import { useState } from 'react'

export default function Contact() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!fields.name.trim()) newErrors.name = 'Name is required'
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!fields.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      setSubmitted(true)
      // Handle form submission (e.g., send to API)
      // setFields({ name: '', email: '', message: '' })
    }
  }

  return (
    <section
      id='contact'
      className='py-12 bg-green-100 dark:bg-green-800 text-center p-5'
    >
      <div className='max-w-6xl mx-auto py-12'>
        <h1 className='text-lg font-bold text-green-700 dark:text-white mb-4'>
          Reach Out
        </h1>
        <h2 className='text-3xl sm:text-4xl font-black text-green-700 dark:text-white mb-6'>
          Get In Touch
        </h2>
        <p className='sm:text-lg font-semibold text-green-700 dark:text-white mb-8 mx-4'>
          We value your feedback and inquiries. <br />
          Please fill out the form below to contact us.
        </p>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch'>
          <form
            onSubmit={handleSubmit}
            className='bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow-lg flex flex-col justify-center'
          >
            <h3 className='text-2xl font-bold text-green-700 dark:text-white mb-4'>
              Contact Form
            </h3>
            <div className='mb-4 text-left'>
              <label
                htmlFor='name'
                className='block text-green-900 dark:text-white font-semibold mb-1'
              >
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                value={fields.name}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 dark:border-green-700 rounded bg-white dark:bg-green-800 text-green-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400'
                autoComplete='name'
              />
              {errors.name && (
                <p className='text-green-500 text-xs mt-1'>{errors.name}</p>
              )}
            </div>
            <div className='mb-4 text-left'>
              <label
                htmlFor='email'
                className='block text-green-900 dark:text-white font-semibold mb-1'
              >
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={fields.email}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 dark:border-green-700 rounded bg-white dark:bg-green-800 text-green-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400'
                autoComplete='email'
              />
              {errors.email && (
                <p className='text-green-500 text-xs mt-1'>{errors.email}</p>
              )}
            </div>
            <div className='mb-6 text-left'>
              <label
                htmlFor='message'
                className='block text-green-900 dark:text-white font-semibold mb-1'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                value={fields.message}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 dark:border-green-700 rounded bg-white dark:bg-green-800 text-green-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400'
              />
              {errors.message && (
                <p className='text-green-500 text-xs mt-1'>{errors.message}</p>
              )}
            </div>
            <button
              type='submit'
              className='w-full bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-800 transition font-bold'
            >
              Send Message
            </button>
            {submitted && (
              <div className='mt-4 text-green-700 dark:text-green-200 font-semibold'>
                Thank you for reaching out! We&apos;ll get back to you soon.
              </div>
            )}
          </form>
          <div className='bg-green-50 dark:bg-green-900 p-0 rounded-lg shadow-lg overflow-hidden flex items-center justify-center'>
            <iframe
              title='Avoenga Location'
              src='https://www.google.com/maps?q=Keroka,+Kenya&output=embed'
              width='100%'
              height='100%'
              className='w-full h-96 border-0'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
