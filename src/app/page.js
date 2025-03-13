import Benefits from '@/components/Benefits'
import Cart from '@/components/Cart'
import CheckoutModal from '@/components/CheckoutModal'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OrderForm from '@/components/OrderForm'
import Products from '@/components/Products'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <OrderForm />
      <CheckoutModal />
      <Cart />
      <Footer />
    </div>
  )
}
