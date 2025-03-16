import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { default as OrderForm } from '@/components/OrderForm'
import Products from '@/components/Products'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <OrderForm />
      <Footer />
    </div>
  )
}
