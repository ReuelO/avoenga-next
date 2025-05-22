'use client'

import config from '@/config'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselItem = ({ item }) => (
  <div className='relative w-full h-screen'>
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes='100vw'
      className='object-cover brightness-50'
      quality={100}
      priority
    />
    <div className='absolute bg-green-800 p-5 bottom-20 left-0 w-full flex justify-center'>
      <p className='text-white sm:text-xl font-bold drop-shadow-lg'>
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
      className={`hidden sm:flex absolute top-1/2 ${positionClass} -translate-y-1/2 h-12 w-12 items-center justify-center text-3xl bg-green-900/80 hover:bg-green-700 focus:bg-green-800 focus:outline-none text-white rounded-full shadow-lg z-20 transition`}
      tabIndex={0}
    >
      {arrow}
    </button>
  )
}

export default function Hero() {
  const carouselItems = config.carouselItems.map((item) => ({
    src: item.src,
    alt: item.alt,
    legend: item.legend,
  }))

  return (
    <section className='relative'>
      <div className='absolute px-5 top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 pointer-events-none'>
        <h2 className='text-3xl sm:text-6xl font-black text-green-500 dark:text-green-700 text-center drop-shadow-lg'>
          AVOENGA Lavish
        </h2>
        <p className='mt-4 text-2xl sm:text-3xl font-bold text-white text-center drop-shadow-lg'>
          Pure Avocado Oil <br />
          For a Healthier You!
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
            className={`inline-block mx-1 w-3 h-3 rounded-full cursor-pointer border-2 border-green-100 transition ${
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
