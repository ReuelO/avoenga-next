'use client'

import { useState } from 'react'
import { FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa'
import config from '../../config'

const Input = ({ type, placeholder, value, onChange, error }) => {
  return (
    <div className='mb-4'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
      />
      {error && <p className='text-red-500 text-sm py-2'>{error}</p>}
    </div>
  )
}

export default function OrderForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [products, setProducts] = useState([{ product: '', quantity: 1 }])
  const [paymentMethod, setPaymentMethod] = useState('')
  const [errors, setErrors] = useState({})

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
      // Handle form submission
      console.log('Form submitted:', {
        name,
        email,
        phone,
        address,
        products,
        paymentMethod,
      })
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
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <form
          onSubmit={handleSubmit}
          className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
            Order Details
          </h3>
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
          {products.map((item, index) => (
            <div key={index} className='mb-4'>
              <select
                value={item.product}
                onChange={(e) =>
                  handleProductChange(index, 'product', e.target.value)
                }
                className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
              >
                <option value='' disabled>
                  Select A Product
                </option>
                {config.products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
              {errors[`product${index}`] && (
                <p className='text-red-500 text-sm py-2'>
                  {errors[`product${index}`]}
                </p>
              )}
              <Input
                type='number'
                placeholder='Quantity'
                value={item.quantity}
                onChange={(e) =>
                  handleProductChange(index, 'quantity', e.target.value)
                }
                error={errors[`quantity${index}`]}
              />
              {products.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeProduct(index)}
                  className='text-red-500'
                >
                  Remove
                </button>
              )}
            </div>
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
          <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
            Delivery Information
          </h3>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            We offer fast and reliable delivery to your doorstep. Please ensure
            your address is correct when placing your order.
          </p>
          <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
            Payment Options
          </h3>
          <div className='flex justify-around mb-4'>
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
              <label className='text-gray-700 dark:text-gray-300'>PayPal</label>
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
      </div>
    </section>
  )
}
