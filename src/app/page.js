import Footer from '@/components/molecules/Footer'
import Header from '@/components/molecules/Header'
import Hero from '@/components/molecules/Hero'

import About from '@/components/organisms/About'
import Benefits from '@/components/organisms/Benefits'
import Contact from '@/components/organisms/Contact'
import Products from '@/components/organisms/Products'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}
