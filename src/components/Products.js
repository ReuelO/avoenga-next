import Image from 'next/image'
import config from '../../config'

export default function Products() {
  return (
    <section id='products' className='py-12 bg-gray-100 dark:bg-gray-900 text-center'>
      <h2 className='text-4xl font-bold text-green-700 dark:text-green-300 mb-8'>Our Products</h2>
      <div className='mt-6 mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {config.products.map((product) => (
          <div
            key={product.id}
            className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'
          >
            <Image
              src={product.image}
              alt={product.name}
              height={200}
              width={200}
              className='w-48 h-48 object-cover mx-auto rounded-full'
            />
            <h3 className='mt-6 text-2xl font-semibold text-gray-800 dark:text-gray-200'>
              {product.name}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mt-4'>{product.description}</p>
            <p className='text-green-700 dark:text-green-300 mt-4 text-xl font-bold'>
              {product.price}
            </p>
            <button className='mt-6 bg-green-600 dark:bg-green-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 dark:hover:bg-green-900'>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}