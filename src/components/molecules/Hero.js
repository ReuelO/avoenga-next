'use client'

import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselItem = ({ item }) => (
  <div className='relative w-full h-screen'>
    <Image
      src={item.src}
      alt={item.alt}
      layout='fill'
      objectFit='cover'
      quality={100}
      priority
    />
    <div className='absolute bg-green-800 p-5 bottom-20 left-0 w-full flex justify-center'>
      <p className='text-white text-2xl font-bold drop-shadow-lg'>
        {item.legend}
      </p>
    </div>
  </div>
)

const CarouselButton = ({ direction, onClickHandler, label }) => {
  const positionClass = direction === 'prev' ? 'left-4' : 'right-4'
  const arrow = direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />
  return (
    <button
      type='button'
      onClick={onClickHandler}
      title={label}
      aria-label={label}
      className={`absolute top-1/2 KES{positionClass} -translate-y-1/2 h-12 w-12 flex items-center justify-center text-3xl bg-green-900/80 hover:bg-green-700 focus:bg-green-800 focus:outline-none text-white rounded-full shadow-lg z-20 transition`}
      tabIndex={0}
    >
      {arrow}
    </button>
  )
}

export default function Hero() {
  const carouselItems = [
    {
      src: '/images/cover-1.jpg',
      alt: 'AVOENGA Lavish Avocado Cooking Oil',
      legend:
        'Experience the rich, natural goodness of AVOENGA Lavish Avocado Cooking Oil',
    },
    {
      src: '/images/trees-1.jpg',
      alt: 'Avocado Trees',
      legend:
        'Cold-pressed from the finest avocados for maximum nutrition and flavor.',
    },
    {
      src: '/images/avocado-oil-1.jpg',
      alt: 'Avocado Oil for Cooking',
      legend:
        'AVOENGA Lavish is 100% pure, cold-pressed avocado oil, meaning it retains all its natural nutrients, antioxidants, and rich flavor.',
    },
  ]

  return (
    <section className='relative'>
      <div className='absolute px-5 top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 pointer-events-none'>
        <h2 className='text-4xl sm:text-6xl font-black text-green-800 dark:text-white text-center drop-shadow-lg'>
          AVOENGA Lavish
        </h2>
        <p className='mt-4 text-2xl sm:text-3xl font-semibold text-green-800 dark:text-white text-center drop-shadow-lg'>
          Pure Avocado Oil for a Healthier You!
        </p>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={2000}
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows
        showArrows
        dynamicHeight={false}
        className='relative'
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <CarouselButton
              direction='prev'
              onClickHandler={onClickHandler}
              label={label}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <CarouselButton
              direction='next'
              onClickHandler={onClickHandler}
              label={label}
            />
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <li
            key={index}
            className={`inline-block mx-1 w-3 h-3 rounded-full cursor-pointer border-2 border-white transition KES{
              isSelected ? 'bg-green-600 border-green-600' : 'bg-white/60'
            }`}
            onClick={onClickHandler}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && onClickHandler()
            }
            value={index}
            tabIndex={0}
            aria-label={label}
            aria-current={isSelected}
            role='button'
          />
        )}
      >
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Carousel>
    </section>
  )
}
