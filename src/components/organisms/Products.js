'use client'

import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import config from '../../config'
import ProductCardGrid from '../molecules/ProductCardGrid'

const { products } = config
const OrderForm = dynamic(() => import('../organisms/OrderForm'), {
  ssr: false,
})

export default function Products() {
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [initialProduct, setInitialProduct] = useState(null)
  const orderFormRef = useRef(null)

  const handleBuyNow = (product) => {
    setInitialProduct(product)
    setShowOrderForm(true)
    setTimeout(() => {
      orderFormRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <section
        id='products'
        className='py-12 bg-green-100 dark:bg-green-900 text-center'
      >
        <h2 className='text-4xl font-bold text-green-700 dark:text-green-100 mb-8'>
          Our Products
        </h2>
        <div className='mt-6 mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product) => (
            <ProductCardGrid
              key={product.id}
              product={product}
              onBuyNow={handleBuyNow}
            />
          ))}
        </div>
      </section>
      <div ref={orderFormRef}>
        {showOrderForm && <OrderForm initialProduct={initialProduct} />}
      </div>
    </>
  )
}
