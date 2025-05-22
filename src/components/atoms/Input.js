export default function Input({
  id,
  type = 'text',
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded bg-gray-50 dark:bg-green-700 text-green-900 dark:text-white border-gray-300 dark:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 ${
          error ? 'border-green-500' : ''
        }`}
        {...props}
      />
      {error && <p className='text-green-600 text-sm mt-1'>{error}</p>}
    </div>
  )
}
