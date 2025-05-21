'use client'

import { useEffect, useState } from 'react'
import config from '../../config'
import Cart from '../molecules/Cart'

export default function OrderForm({ initialProduct }) {
  const [products, setProducts] = useState([{ product: '', quantity: 1 }])
  const [cartItems, setCartItems] = useState([])
  const [errors, setErrors] = useState({})

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

  const validateForm = () => {
    const newErrors = {}
    products.forEach((item, index) => {
      if (!item.product) newErrors[`product${index}`] = 'Product is required'
      if (!item.quantity || isNaN(item.quantity) || item.quantity <= 0)
        newErrors[`quantity${index}`] = 'Quantity must be a positive number'
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
          addToCart(selectedProduct, Number(item.quantity))
        }
      })
      // Handle form submission (e.g., send to API)
      // Reset form if needed
      // console.log('Form submitted:', { products })
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
    setProducts(products.filter((_, i) => i !== index))
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

  // Add this function to update quantity in Cart
  const updateQuantity = (index, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const totalCost = products.reduce((total, item) => {
    const selectedProduct = config.products.find(
      (p) => p.id === parseInt(item.product)
    )
    return (
      total +
      (selectedProduct
        ? Number(selectedProduct.price.replace('$', '')) * item.quantity
        : 0)
    )
  }, 0)

  return (
    <section
      id='order'
      className='py-12 bg-green-100 dark:bg-green-700 text-center p-5'
    >
      <div className='max-w-4xl mx-auto py-12'>
        <h1 className='text-lg font-bold text-green-700 dark:text-green-100 mb-4'>
          Order Now
        </h1>
        <h2 className='text-4xl font-black text-green-700 dark:text-green-100 mb-6'>
          Place Your Order
        </h2>

        <div className='bg-white dark:bg-green-900 p-6 rounded-lg shadow-lg mx-6'>
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
