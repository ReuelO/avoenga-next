export default function Input({ type, placeholder, value, onChange, error }) {
  return (
    <div className='mb-4'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-green-700 text-green-900 dark:text-white'
      />
      {error && <p className='text-red-500 text-sm py-2'>{error}</p>}
    </div>
  )
}
