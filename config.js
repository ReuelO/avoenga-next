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
    { name: 'Products', href: '#products' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Order', href: '#order' },
    { name: 'Contact', href: '#contact' },
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
    {
      id: 1,
      title: 'Heart Health',
      description: 'Rich in monounsaturated fats, helps lower cholesterol.',
    },
    {
      id: 2,
      title: 'Skin & Hair',
      description: 'Deeply moisturizes and nourishes skin & scalp.',
    },
    {
      id: 3,
      title: 'High Smoke Point',
      description: 'Great for high-heat cooking without breaking down.',
    },
  ],
}

export default config
