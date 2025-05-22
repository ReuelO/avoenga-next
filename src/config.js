import {
  FaAppleAlt,
  FaConciergeBell,
  FaFire,
  FaHeart,
  FaLeaf,
  FaShieldAlt,
  FaSpa,
  FaStethoscope,
  FaTable,
  FaTint,
  FaUtensils,
} from 'react-icons/fa'

const config = {
  siteName: 'Avoenga Lavish',
  logo: '/images/logo.png',
  slogan: 'Pure & Organic Avoenga Lavish',
  siteDescription:
    'Discover the benefits of pure and organic avocado oil for your skin, hair, and cooking.',
  keywords: ['avocado oil', 'organic', 'skin care', 'hair care', 'cooking oil'],
  author: 'ReuelO',
  socialMedia: {
    facebook: 'https://www.facebook.com/avoenga-lavish',
    twitter: 'https://twitter.com/avoenga-lavish',
    instagram: 'https://www.instagram.com/avoenga-lavish',
  },
  contact: {
    email: 'info@avoenga-lavish.com',
    phone: '+254-717-101-257',
    address: '24-40202, Keroka, Kenya',
  },
  apiEndpoints: {
    products: 'https://api.avoenga-lavish.com/products',
    orders: 'https://api.avoenga-lavish.com/orders',
  },
  theme: {
    default: 'light',
    options: ['light', 'dark'],
  },
  navigationLinks: [
    { name: 'Who We Are', href: '#about' },
    { name: 'Why Choose Us', href: '#benefits' },
    { name: 'What We Sell', href: '#products' },
    { name: 'Place Order', href: '#order' },
    { name: 'Reach Out', href: '#contact' },
  ],
  carouselItems: [
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
  ],
  products: [
    {
      id: 1,
      name: 'Cold-Pressed Avocado Oil',
      image: '/images/product1.jpg',
      description: 'Rich in vitamins, perfect for skin, hair, and cooking.',
      price: '$20.00',
    },
    {
      id: 2,
      name: 'Organic Avocado Oil',
      image: '/images/product2.jpg',
      description: 'Pure and organic, ideal for a healthy lifestyle.',
      price: '$25.00',
    },
    {
      id: 3,
      name: 'Avocado Oil Blend',
      image: '/images/product3.jpg',
      description: 'A perfect blend of avocado and other essential oils.',
      price: '$30.00',
    },
  ],
  benefits: [
    // Product Features
    {
      id: 1,
      title: '100% Pure & Cold-Pressed',
      description: 'Retains all the natural nutrients and antioxidants.',
      icon: FaLeaf,
    },
    {
      id: 2,
      title: 'Rich in Healthy Fats',
      description: 'Packed with heart-friendly monounsaturated fats.',
      icon: FaHeart,
    },
    {
      id: 3,
      title: 'High Smoke Point',
      description: 'Perfect for frying, roasting, and sautéing (up to 271°C).',
      icon: FaFire,
    },
    {
      id: 4,
      title: 'Versatile & Delicious',
      description: 'Great for cooking, salads, and even skincare.',
      icon: FaUtensils,
    },
    // Usage
    {
      id: 5,
      title: 'Cooking',
      description: 'Use it for frying, grilling, or baking.',
      icon: FaConciergeBell,
    },
    {
      id: 6,
      title: 'Salads & Dressings',
      description: 'A perfect drizzle for fresh salads.',
      icon: FaTable,
    },
    {
      id: 7,
      title: 'Skincare',
      description: 'Apply directly for deep skin hydration.',
      icon: FaTint,
    },
    // Health Benefits
    {
      id: 8,
      title: 'Supports Heart Health',
      description: 'Lowers bad cholesterol and boosts good cholesterol.',
      icon: FaStethoscope,
    },
    {
      id: 9,
      title: 'Boosts Immunity',
      description: 'High in Vitamin E and antioxidants.',
      icon: FaShieldAlt,
    },
    {
      id: 10,
      title: 'Aids Digestion',
      description: 'Gentle on the stomach, promoting gut health.',
      icon: FaAppleAlt,
    },
    {
      id: 11,
      title: 'Enhances Skin & Hair',
      description: 'Natural nourishment for glowing skin and strong hair.',
      icon: FaSpa,
    },
  ],
}

export default config
