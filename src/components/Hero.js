'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Hero() {
  return (
    <section className='bg-green-100 text-center py-20 mt-16 h-100'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-green-700'>
          Pure & Organic Avocado Oil
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Perfect for skincare, haircare, and cooking. 100% natural &
          cold-pressed.
        </p>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          className='mt-8'
        >
          <div>
            <img
              src='/images/avocado-oil-skin.jpg'
              alt='Avocado Oil for Skin'
            />
            <p className='legend'>Great for Skin Care</p>
          </div>
          <div>
            <img
              src='/images/avocado-oil-hair.jpg'
              alt='Avocado Oil for Hair'
            />
            <p className='legend'>Improves Hair Health</p>
          </div>
          <div>
            <img
              src='/images/avocado-oil-cooking.jpg'
              alt='Avocado Oil for Cooking'
            />
            <p className='legend'>Perfect for Cooking</p>
          </div>
        </Carousel>
        <a
          href='#products'
          className='mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700'
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
