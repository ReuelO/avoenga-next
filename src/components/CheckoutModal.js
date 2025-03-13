'use client'

import { useState } from 'react'
import { FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa'

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

  const handlePlaceOrder = () => {
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

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 max-h-75 overflow-y-auto'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
          Checkout
        </h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-gray-300 mb-2'>
              Name
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-gray-300 mb-2'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-gray-300 mb-2'>
              Phone
            </label>
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-gray-300 mb-2'>
              Address
            </label>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
            />
          </div>
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
              type='button'
              className='mt-4 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700'
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
