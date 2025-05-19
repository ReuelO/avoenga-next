import config from '../../config'
const { benefits } = config

const BenefitCard = ({ title, description, Icon }) => (
  <div className='bg-green-50 dark:bg-green-900 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 flex items-center gap-4'>
    <div className='flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-800'>
      <Icon className='text-green-600 dark:text-green-200 text-4xl' />
    </div>
    <div className='text-left'>
      <h3 className='text-lg font-bold text-green-800 dark:text-green-100 mb-1'>
        {title}
      </h3>
      <p className='text-green-700 dark:text-green-300 text-base'>
        {description}
      </p>
    </div>
  </div>
)

export default function Benefits() {
  return (
    <section
      id='benefits'
      className='py-12 bg-white dark:bg-green-800 text-center'
    >
      <h2 className='text-4xl font-bold text-green-700 dark:text-green-100 mb-8'>
        Benefits of AVOENGA Avocado Oil
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
