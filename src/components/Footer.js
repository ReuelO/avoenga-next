import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import config from '../../config'
import Link from './Link'

function SocialMediaLink({ href, ariaLabel, Icon, color }) {
  return (
    <Link href={href} aria-label={ariaLabel} size='medium'>
      <Icon className={`h-8 w-8 ${color}`} />
    </Link>
  )
}

const socialMediaIcons = {
  facebook: { icon: FaFacebook, color: 'text-blue-400' },
  twitter: { icon: FaTwitter, color: 'text-blue-300' },
  instagram: { icon: FaInstagram, color: 'text-red-400' },
}

export default function Footer() {
  return (
    <footer className='bg-green-600 dark:bg-gray-800 text-white text-center py-6 mt-10'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        <div className='flex flex-col space-y-2 items-start'>
          <p className='h3 text-bold'>Contact Us</p>
          <p>
            Email:{' '}
            <Link href={`mailto:${config.contact.email}`} size='medium'>
              {config.contact.email}
            </Link>
          </p>
          <p>
            Phone:{' '}
            <Link href={`tel:${config.contact.phone}`} size='medium'>
              {config.contact.phone}
            </Link>
          </p>
          <p>Address: {config.contact.address}</p>
        </div>
        <div className='flex space-x-4'>
          {Object.entries(config.socialMedia).map(([key, href]) => (
            <SocialMediaLink
              key={key}
              href={href}
              ariaLabel={key.charAt(0).toUpperCase() + key.slice(1)}
              Icon={socialMediaIcons[key].icon}
              color={socialMediaIcons[key].color}
            />
          ))}
        </div>
      </div>
      <p className='py-6'>
        &copy; 2025 {config.siteName}. All rights reserved.
      </p>
    </footer>
  )
}
