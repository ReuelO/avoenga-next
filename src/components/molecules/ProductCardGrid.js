import Image from 'next/image'

export default function ProductCardGrid({ product, onBuyNow }) {
  return (
    <div className='bg-white dark:bg-green-700 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
      <Image
        src={product?.image}
        alt={product?.name}
        height={100}
        width={100}
        className='w-24 h-24 object-cover mx-auto rounded-full'
      />
      <h3 className='mt-4 text-2xl font-semibold text-green-800 dark:text-green-100'>
        {product?.name}
      </h3>
      <p className='text-green-600 dark:text-green-400 mt-4'>
        {product?.description}
      </p>
      <p className='text-green-700 dark:text-green-100 mt-4 text-xl font-bold'>
        {product?.price}
      </p>
      <button
        onClick={() => onBuyNow(product)}
        className='m-5 bg-green-600 dark:bg-green-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 dark:hover:bg-green-900 transition'
      >
        Buy Now
      </button>
    </div>
  )
}
