import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import config from '../../config'
import Link from '../atoms/Link'

function SocialMediaLink({ href, ariaLabel, Icon, color }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      size='medium'
      className='hover:scale-110 transition-transform'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon className={`h-8 w-8 ${color} drop-shadow`} />
    </Link>
  )
}

const socialMediaIcons = {
  facebook: { icon: FaFacebook, color: 'text-green-400' },
  instagram: { icon: FaInstagram, color: 'text-green-500' },
  twitter: { icon: FaTwitter, color: 'text-green-300' },
}

export default function Footer() {
  return (
    <footer className='bg-green-600 dark:bg-green-900 text-green-200 dark:text-green-200 shadow-inner pt-10 pb-4'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4'>
        <div className='flex flex-col items-start gap-2 font-semibold'>
          <span className='text-2xl font-bold text-white dark:text-green-300 mb-1'>
            Contact Us
          </span>
          <span>
            Email:{' '}
            <Link
              href={`mailto:${config.contact.email}`}
              size='medium'
              className='underline hover:text-white transition'
            >
              {config.contact.email}
            </Link>
          </span>
          <span>
            Phone:{' '}
            <Link
              href={`tel:${config.contact.phone}`}
              size='medium'
              className='underline hover:text-white transition'
            >
              {config.contact.phone}
            </Link>
          </span>
          <span>Address: {config.contact.address}</span>
        </div>
        <div className='flex items-center gap-6 mt-6 md:mt-0'>
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
      <div className='mt-8 border-t border-white/20 pt-4 text-center text-sm font-black text-white/80'>
        &copy; 2025 {config.siteName}. All rights reserved.
      </div>
    </footer>
  )
}
