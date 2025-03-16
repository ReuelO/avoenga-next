'use client'

import config from '../../config'
import Input from './Input'

export default function ProductCard({
  index,
  product,
  quantity,
  handleProductChange,
  removeProduct,
  errors,
}) {
  return (
    <div className='mb-4 flex space-x-4'>
      <select
        value={product}
        onChange={(e) => handleProductChange(index, 'product', e.target.value)}
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
        <p className='text-red-500 text-sm py-2'>{errors[`product${index}`]}</p>
      )}
      <div className='max-w-20'>
        <Input
          type='number'
          placeholder='Quantity'
          value={quantity}
          onChange={(e) =>
            handleProductChange(index, 'quantity', e.target.value)
          }
          error={errors[`quantity${index}`]}
        />
        {index > 0 && (
          <button
            type='button'
            onClick={() => removeProduct(index)}
            className='text-red-500'
          >
            Remove
          </button>
        )}
      </div>
    </div>
  )
}
