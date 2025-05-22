'use client'

import { useEffect, useRef, useState } from 'react'
import { FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa'
import Input from '../atoms/Input'

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
    <div className='fixed inset-0 z-50 bg-transparent backdrop-blur-md flex items-center justify-center'>
      <div
        ref={modalRef}
        className='bg-white dark:bg-green-900 p-8 rounded-lg shadow-2xl w-full max-w-2xl m-4 max-h-full overflow-y-auto border border-green-200 dark:border-green-800'
      >
        <h2 className='text-3xl font-bold text-green-700 dark:text-white mb-6 text-center'>
          Checkout
        </h2>
        <form onSubmit={handlePlaceOrder} className='space-y-4'>
          <div>
            <label
              htmlFor='checkout-name'
              className='block text-green-800 dark:text-green-100 font-semibold mb-1'
            >
              Name
            </label>
            <Input
              id='checkout-name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              placeholder='' // Remove placeholder
            />
          </div>
          <div>
            <label
              htmlFor='checkout-email'
              className='block text-green-800 dark:text-green-100 font-semibold mb-1'
            >
              Email
            </label>
            <Input
              id='checkout-email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              placeholder=''
            />
          </div>
          <div>
            <label
              htmlFor='checkout-phone'
              className='block text-green-800 dark:text-green-100 font-semibold mb-1'
            >
              Phone Number
            </label>
            <Input
              id='checkout-phone'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={errors.phone}
              placeholder=''
            />
          </div>
          <div>
            <label
              htmlFor='checkout-address'
              className='block text-green-800 dark:text-green-100 font-semibold mb-1'
            >
              Address
            </label>
            <Input
              id='checkout-address'
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={errors.address}
              placeholder=''
            />
          </div>
          <div>
            <label className='block text-green-800 dark:text-green-100 font-semibold mb-2'>
              Payment Method
            </label>
            <div className='flex flex-col sm:flex-row gap-4 justify-between'>
              <label className='flex-1 flex flex-col items-center bg-green-50 dark:bg-green-800 rounded-lg p-4 cursor-pointer border border-green-200 dark:border-green-700 hover:border-green-400 transition'>
                <FaCreditCard className='text-3xl text-green-700 dark:text-white mb-2' />
                <input
                  type='radio'
                  name='paymentMethod'
                  value='Credit/Debit Card'
                  checked={paymentMethod === 'Credit/Debit Card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className='mb-1 accent-green-600'
                />
                <span className='text-green-700 dark:text-white text-sm'>
                  Credit/Debit Card
                </span>
              </label>
              <label className='flex-1 flex flex-col items-center bg-green-50 dark:bg-green-800 rounded-lg p-4 cursor-pointer border border-green-200 dark:border-green-700 hover:border-green-400 transition'>
                <FaPaypal className='text-3xl text-green-700 dark:text-white mb-2' />
                <input
                  type='radio'
                  name='paymentMethod'
                  value='PayPal'
                  checked={paymentMethod === 'PayPal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className='mb-1 accent-green-600'
                />
                <span className='text-green-700 dark:text-white text-sm'>
                  PayPal
                </span>
              </label>
              <label className='flex-1 flex flex-col items-center bg-green-50 dark:bg-green-800 rounded-lg p-4 cursor-pointer border border-green-200 dark:border-green-700 hover:border-green-400 transition'>
                <FaUniversity className='text-3xl text-green-700 dark:text-white mb-2' />
                <input
                  type='radio'
                  name='paymentMethod'
                  value='Bank Transfer'
                  checked={paymentMethod === 'Bank Transfer'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className='mb-1 accent-green-600'
                />
                <span className='text-green-700 dark:text-white text-sm'>
                  Bank Transfer
                </span>
              </label>
            </div>
            {errors.paymentMethod && (
              <p className='text-red-600 text-sm mt-2'>
                {errors.paymentMethod}
              </p>
            )}
          </div>
          <div className='mt-6 border-t border-green-200 dark:border-green-800 pt-4'>
            <h3 className='text-lg font-semibold text-green-800 dark:text-white mb-2 text-right'>
              Total: KES {totalPrice.toFixed(2)}
            </h3>
            <button
              type='submit'
              className='mt-2 bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700 transition font-semibold text-lg shadow'
            >
              Place Order
            </button>
            <button
              type='button'
              className='mt-3 w-full py-2 rounded-lg border border-green-300 dark:border-green-700 text-green-700 dark:text-white bg-green-50 dark:bg-green-800 hover:bg-green-100 dark:hover:bg-green-900 transition font-semibold'
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
