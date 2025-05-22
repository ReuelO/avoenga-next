import Image from 'next/image'
import { FaTag, FaWineBottle } from 'react-icons/fa'

export default function ProductCardGrid({ product, onBuyNow }) {
  return (
    <div className='bg-green-50 dark:bg-green-800 p-5 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
      <div className='flex justify-center items-center h-50 w-50 bg-green-200 rounded-full mx-auto m-5'>
        {!product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            height={100}
            width={100}
            className='w-24 h-24 object-cover mx-auto rounded-full'
          />
        ) : (
          <FaWineBottle className='text-6xl text-green-700' />
        )}
      </div>
      <h3 className='text-2xl font-bold text-green-800 dark:text-green-100'>
        {product.name}
      </h3>
      <p className='text-lg font-semibold text-green-700 dark:text-green-300 m-4'>
        {product.description}
      </p>
      <p className='text-xl font-semibold text-green-700 dark:text-green-100'>
        {product.price}
      </p>
      <button
        onClick={() => onBuyNow(product)}
        className='m-5 bg-green-600 hover:bg-green-700 transition text-white font-bold py-2 px-4 rounded-md shadow-md'
      >
        Add to Cart
      </button>
    </div>
  )
}
