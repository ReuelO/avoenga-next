'use client'

import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselItem = ({ item }) => (
  <div className='relative w-full h-screen'>
    <Image
      className='bg-green-700 opacity-60'
      src={item.src}
      alt={item.alt}
      layout='fill'
      objectFit='cover'
      quality={100}
    />
    <div className='absolute bottom-20 left-0 w-full p-4'>
      <p className='text-white text-xl font-bold'>{item.legend}</p>
    </div>
  </div>
)

const CarouselButton = ({ direction, onClickHandler, label }) => {
  const positionClass = direction === 'prev' ? 'left-0' : 'right-0'
  const arrow = direction === 'prev' ? '‹' : '›'

  return (
    <button
      type='button'
      onClick={onClickHandler}
      title={label}
      className={`absolute top-1/2 ${positionClass} transform -translate-y-1/2 h-12 w-12 mx-4 items-center justify-center text-2xl bg-gray-800 text-white rounded-full z-10`}
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
    <section className='relative w-screen h-screen'>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10'>
        <h2 className='text-4xl font-bold text-white text-center'>
          AVOENGA Lavish Cooking Oil
        </h2>
        <p className='mt-4 text-xl text-white text-center'>
          Pure Avocado Oil for a Healthier You!
        </p>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={1000}
        swipeable={false}
        emulateTouch={false}
        useKeyboardArrows
        showArrows
        dynamicHeight
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
      >
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Carousel>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
        <a
          href='#products'
          className='mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700'
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
