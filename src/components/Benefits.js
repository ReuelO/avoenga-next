import config from '../../config'
const { benefits } = config

const BenefitCard = ({ title, description, Icon }) => {
  return (
    <div className='bg-green-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
      <div className='flex items-center mb-4'>
        <Icon className='text-green-600 dark:text-green-300 text-3xl mr-3' />
        <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
          {title}
        </h3>
      </div>
      <p className='text-gray-600 dark:text-gray-400'>{description}</p>
    </div>
  )
}

export default function Benefits() {
  return (
    <section
      id='benefits'
      className='py-12 bg-white dark:bg-gray-900 text-center'
    >
      <h2 className='text-4xl font-bold text-green-700 dark:text-green-300 mb-8'>
        Why Choose AVOENGA Avocado Oil
      </h2>
      <div className='mt-6 mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            Icon={benefit.icon}
          />
        ))}
      </div>
    </section>
  )
}
