'use client'

import { useState } from 'react'
import config from '../../config'
import Cart from './Cart'
import ProductCard from './ProductCard'

export default function OrderForm() {
  const [products, setProducts] = useState([{ product: '', quantity: 1 }])
  const [cartItems, setCartItems] = useState([])
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    products.forEach((item, index) => {
      if (!item.product) {
        newErrors[`product${index}`] = 'Product is required'
      }
      if (!item.quantity || isNaN(item.quantity) || item.quantity <= 0) {
        newErrors[`quantity${index}`] = 'Quantity must be a positive number'
      }
    })
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      products.forEach((item) => {
        const selectedProduct = config.products.find(
          (p) => p.id === parseInt(item.product)
        )
        if (selectedProduct) {
          addToCart(selectedProduct, item.quantity)
        }
      })
      // Handle form submission
      console.log('Form submitted:', { products })
    }
  }

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products]
    newProducts[index][field] = value
    setProducts(newProducts)
  }

  const addProduct = () => {
    setProducts([...products, { product: '', quantity: 1 }])
  }

  const removeProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index)
    setProducts(newProducts)
  }

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      )
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prevItems, { product, quantity }]
      }
    })
  }

  const totalCost = products.reduce((total, item) => {
    const selectedProduct = config.products.find(
      (p) => p.id === parseInt(item.product)
    )
    return total + (selectedProduct ? selectedProduct.price * item.quantity : 0)
  }, 0)

  return (
    <section
      id='order'
      className='py-12 bg-gray-100 dark:bg-gray-900 text-center'
    >
      <h2 className='text-3xl font-bold text-green-700 dark:text-green-300'>
        Place Your Order
      </h2>
      <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
        Experience the benefits of pure and organic avocado oil. Place your
        order now!
      </p>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <form
          onSubmit={handleSubmit}
          className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
            Available Products
          </h3>
          {products.map((item, index) => (
            <ProductCard
              key={index}
              index={index}
              product={item.product}
              quantity={item.quantity}
              handleProductChange={handleProductChange}
              removeProduct={removeProduct}
              errors={errors}
            />
          ))}
          <button
            type='button'
            onClick={addProduct}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
          >
            Add Another Product
          </button>
          <p className='text-lg text-gray-700 dark:text-gray-300 mb-4'>
            Total Cost: ${totalCost.toFixed(2)}
          </p>
          <button
            type='submit'
            className='bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-800'
          >
            Order Now
          </button>
        </form>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
          <Cart
            cartItems={cartItems}
            removeFromCart={(index) =>
              setCartItems(cartItems.filter((_, i) => i !== index))
            }
          />
        </div>
      </div>
    </section>
  )
}
