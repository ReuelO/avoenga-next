'use client'

import { useState } from 'react'
import CheckoutModal from './CheckoutModal'

export default function Cart({ cartItems = [], removeFromCart }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0

  return (
    <div className='p-4 w-full h-full'>
      <h2 className='text-xl font-bold text-green-700 dark:text-green-300'>
        Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className='text-gray-500 mt-4'>No items in cart.</p>
      ) : (
        <ul className='mt-4'>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className='flex justify-between items-center mb-2 border-b pb-2'
            >
              <div>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-sm text-gray-600'>
                  Qty: {item.quantity} × ${item.price}
                </p>
              </div>
              <p className='font-bold text-gray-800'>
                ${item.price * item.quantity}
              </p>
              <button
                className='text-red-600 font-bold'
                onClick={() => removeFromCart(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Total Price & Checkout Button */}
      <div className='mt-6 border-t pt-4'>
        <h3 className='text-lg font-semibold'>
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <button
          className='mt-4 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700'
          onClick={() => setIsCheckoutOpen(true)}
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        closeModal={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />
    </div>
  )
}
