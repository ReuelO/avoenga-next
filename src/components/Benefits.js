import config from '../../config'

export default function Benefits() {
  return (
    <section
      id='benefits'
      className='py-12 bg-white dark:bg-gray-900 text-center'
    >
      <h2 className='text-4xl font-bold text-green-700 dark:text-green-300 mb-8'>
        Why Choose Avocado Oil?
      </h2>
      <div className='mt-6 mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {config.benefits.map((benefit) => (
          <div
            key={benefit.id}
            className='bg-green-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'
          >
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
              {benefit.title}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mt-4'>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
