'use client'

import { useState, useEffect, useRef } from 'react'
import { FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa'
import Input from './Input'

export default function CheckoutModal({
  isOpen,
  closeModal,
  cartItems,
  totalPrice,
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [errors, setErrors] = useState({})

  const modalRef = useRef(null)

  const validateForm = () => {
    const newErrors = {}
    if (!name) newErrors.name = 'Name is required'
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!phone) newErrors.phone = 'Phone number is required'
    if (!address) newErrors.address = 'Address is required'
    if (!paymentMethod) newErrors.paymentMethod = 'Payment method is required'
    return newErrors
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      // Handle order placement logic
      console.log('Order placed:', {
        name,
        email,
        phone,
        address,
        paymentMethod,
        cartItems,
        totalPrice,
      })
      closeModal()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, closeModal])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex items-center justify-center'>
      <div
        ref={modalRef}
        className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 max-h-full overflow-y-auto'
        style={{ width: '80%' }} // Make the container smaller by 20%
      >
        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
          Checkout
        </h2>
        <form onSubmit={handlePlaceOrder}>
          <Input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
          <Input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            type='tel'
            placeholder='Your Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
          />
          <Input
            type='text'
            placeholder='Your Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={errors.address}
          />
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-gray-300 mb-2'>
              Payment Method
            </label>
            <div className='flex justify-around'>
              <div className='flex flex-col items-center'>
                <FaCreditCard className='text-4xl text-gray-700 dark:text-gray-300' />
                <input
                  type='radio'
                  name='paymentMethod'
                  value='Credit/Debit Card'
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className='mt-2'
                />
                <label className='text-gray-700 dark:text-gray-300'>
                  Credit/Debit Card
                </label>
              </div>
              <div className='flex flex-col items-center'>
                <FaPaypal className='text-4xl text-gray-700 dark:text-gray-300' />
                <input
                  type='radio'
                  name='paymentMethod'
                  value='PayPal'
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className='mt-2'
                />
                <label className='text-gray-700 dark:text-gray-300'>
                  PayPal
                </label>
              </div>
              <div className='flex flex-col items-center'>
                <FaUniversity className='text-4xl text-gray-700 dark:text-gray-300' />
                <input
                  type='radio'
                  name='paymentMethod'
                  value='Bank Transfer'
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className='mt-2'
                />
                <label className='text-gray-700 dark:text-gray-300'>
                  Bank Transfer
                </label>
              </div>
            </div>
          </div>
          <div className='mt-6 border-t pt-4'>
            <h3 className='text-lg font-semibold'>
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <button
              type='submit'
              className='mt-4 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700'
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
