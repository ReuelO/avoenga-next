'use client'

import { useState } from 'react'
import { FaCartPlus, FaMinus, FaPlus, FaTimes } from 'react-icons/fa'
import CheckoutModal from './CheckoutModal'

export default function Cart({
  cartItems = [],
  removeFromCart,
  updateQuantity,
}) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce(
        (sum, item) =>
          sum +
          (item.product?.price
            ? Number(item.product.price.replace('$', '')) * item.quantity
            : item.price * item.quantity),
        0
      )
    : 0

  const handleDecrease = (index) => {
    if (cartItems[index].quantity > 1) {
      updateQuantity(index, cartItems[index].quantity - 1)
    }
  }

  const handleIncrease = (index) => {
    updateQuantity(index, cartItems[index].quantity + 1)
  }

  return (
    <div className='w-full h-full p-5'>
      <h2 className='text-2xl font-bold text-green-700 dark:text-green-300 mb-4'>
        Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-lg font-semibold text-green-700 dark:text-white mb-4'>
            Your cart is empty. Add some items to your cart!
          </p>
          <FaCartPlus className='text-6xl text-green-700 dark:text-white mb-4' />
        </div>
      ) : (
        <div className='text-center sm:text-left'>
          <ul className='divide-y divide-green-100 dark:divide-green-800'>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-2 border-green-200 dark:border-green-800 rounded-lg p-5 my-2'
              >
                <div className='flex flex-col sm:flex-row sm:items-center gap-4 flex-1 min-w-0 w-full'>
                  <div className='flex-1 min-w-0'>
                    <p className='text-lg sm:text-2xl font-bold text-green-900 dark:text-white truncate'>
                      {item.product?.name || item.name}
                    </p>
                    <p className='text-base sm:text-lg font-bold text-green-700 dark:text-green-300 truncate'>
                      Unit Price: $
                      {item.product?.price
                        ? Number(item.product.price.replace('$', '')).toFixed(2)
                        : Number(item.price).toFixed(2)}
                    </p>
                    <div className='flex justify-center sm:justify-start gap-2 sm:gap-4 mt-4 sm:mt-3'>
                      <button
                        className='bg-green-600 dark:bg-green-700 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold hover:bg-green-700 dark:hover:bg-green-800 transition'
                        onClick={() => handleDecrease(index)}
                        aria-label='Decrease quantity'
                        type='button'
                      >
                        <FaMinus />
                      </button>
                      <input
                        type='number'
                        min={0}
                        value={item.quantity === 0 ? '' : item.quantity}
                        onChange={(e) => {
                          // Remove leading zeros and allow empty string for editing
                          const val = e.target.value.replace(/^0+(?=\d)/, '')
                          // If input is empty, treat as zero for editing
                          updateQuantity(
                            index,
                            val === '' ? 0 : Math.max(0, Number(val))
                          )
                        }}
                        className='w-14 text-center font-bold text-lg text-green-800 dark:text-white bg-transparent border border-green-300 dark:border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400'
                        aria-label='Edit quantity'
                      />
                      <button
                        className='bg-green-600 dark:bg-green-700 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold hover:bg-green-700 dark:hover:bg-green-800 transition'
                        onClick={() => handleIncrease(index)}
                        aria-label='Increase quantity'
                        type='button'
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row sm:flex-col items-center sm:items-end justify-center sm:justify-start gap-2 min-w-[100px]'>
                  <span className='text-lg sm:text-2xl font-bold text-green-700 dark:text-green-200'>
                    $
                    {item.product?.price
                      ? (
                          Number(item.product.price.replace('$', '')) *
                          item.quantity
                        ).toFixed(2)
                      : (item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className='flex items-center gap-1 bg-green-600 dark:bg-green-700 text-white font-bold text-base px-3 py-2 rounded-md hover:bg-green-700 dark:hover:bg-green-800 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400'
                    onClick={() => removeFromCart(index)}
                    aria-label='Remove item'
                    type='button'
                  >
                    <FaTimes />
                    <span className='hidden xs:inline sm:inline'>Remove</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className='my-2 pt-2 flex flex-col justify-center sm:justify-start'>
            <h3 className='text-lg sm:text-2xl font-bold text-center sm:text-right text-green-800 dark:text-white'>
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <button
              className='mt-6 bg-green-600 dark:bg-green-700 text-lg text-white w-full py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition font-bold shadow'
              onClick={() => {
                if (totalPrice > 0) setIsCheckoutOpen(true)
              }}
              disabled={cartItems.length === 0 || totalPrice === 0}
            >
              Proceed to Checkout
            </button>
          </div>

          <CheckoutModal
            isOpen={isCheckoutOpen}
            closeModal={() => setIsCheckoutOpen(false)}
            cartItems={cartItems}
            totalPrice={totalPrice}
          />
        </div>
      )}
    </div>
  )
}
