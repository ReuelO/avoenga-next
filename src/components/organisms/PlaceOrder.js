'use client'

import { useEffect, useState } from 'react'
import Cart from '../molecules/Cart'

export default function PlaceOrder({ initialProduct }) {
  const [cartItems, setCartItems] = useState([])

  // Add initialProduct to cart on mount or when it changes
  useEffect(() => {
    if (initialProduct) {
      setCartItems((prev) => {
        if (prev.some((item) => item.product.id === initialProduct.id))
          return prev
        return [...prev, { product: initialProduct, quantity: 1 }]
      })
    }
  }, [initialProduct])

  // Add this function to update quantity in Cart
  const updateQuantity = (index, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return (
    <section
      id='order'
      className='py-12 bg-white dark:bg-green-700 text-center p-5'
    >
      <div className='max-w-4xl mx-auto py-12'>
        <h1 className='text-lg font-bold text-green-700 dark:text-white mb-4'>
          Place Order
        </h1>
        <h2 className='text-3xl sm:text-4xl font-black text-green-700 dark:text-white mb-6'>
          Order Now
        </h2>
        <p className='sm:text-lg font-semibold text-green-700 dark:text-white mb-8 mx-4'>
          Complete your order by reviewing your cart below. <br />
          We will process your order and ship it to you as soon as possible.
        </p>
        <div className='bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow-lg mx-6'>
          <Cart
            cartItems={cartItems}
            removeFromCart={(index) =>
              setCartItems(cartItems.filter((_, i) => i !== index))
            }
            updateQuantity={updateQuantity}
          />
        </div>
      </div>
    </section>
  )
}
