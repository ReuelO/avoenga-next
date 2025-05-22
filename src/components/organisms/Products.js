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
  const [initialProduct, setInitialProduct] = useState(null)
  const orderFormRef = useRef(null)

  const handleBuyNow = (product) => {
    setInitialProduct(product)
    setTimeout(() => {
      orderFormRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <section
        id='products'
        className='py-12 bg-green-100 dark:bg-green-900 text-center p-5'
      >
        <div className='max-w-6xl mx-auto py-12'>
          <h1 className='text-lg font-bold text-green-700 dark:text-green-100 mb-4'>
            What We Sell
          </h1>
          <h2 className='text-3xl sm:text-4xl font-black text-green-700 dark:text-green-100 mb-6'>
            Our Products
          </h2>
          <p className='sm:text-xl font-semibold text-green-700 dark:text-green-300 mx-4'>
            Discover our premium avocado oil products, <br />
            carefully crafted for your health and wellness.
          </p>
          <div className='mt-6 mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product) => (
              <ProductCardGrid
                key={product.id}
                product={product}
                onBuyNow={handleBuyNow}
              />
            ))}
          </div>
        </div>
      </section>
      <div ref={orderFormRef}>
        <OrderForm initialProduct={initialProduct} />
      </div>
    </>
  )
}
