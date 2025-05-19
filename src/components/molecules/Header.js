'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'
import config from '../../config'

export default function Header() {
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)

  // Set initial theme and keep only one theme class on <html>
  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    setTheme(systemTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(systemTheme)
  }, [])

  // Toggle theme and keep only one theme class on <html>
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(newTheme)
      return newTheme
    })
  }

  return (
    <header className='bg-green-600 dark:bg-green-900 text-white shadow-md fixed w-full z-50 transition-colors'>
      <div className='max-w-6xl mx-auto flex justify-between items-center px-4 py-3'>
        <Link href='/' className='flex items-center gap-3 group'>
          <Image
            src={config.logo}
            alt={config.siteName}
            height={40}
            width={40}
            className='h-10 w-10 rounded-full border-2 border-white group-hover:scale-105 transition'
            priority
          />
          <span className='text-2xl font-extrabold tracking-tight group-hover:text-green-100 transition'>
            {config.siteName}
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-6'>
          {config.navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='relative text-lg font-medium after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100 after:mt-1'
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className='ml-4 p-2 rounded-full bg-white/20 hover:bg-white/40 dark:bg-green-700 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition'
          aria-label='Toggle Theme'
        >
          {theme === 'light' ? (
            <FaMoon className='h-6 w-6 text-white' />
          ) : (
            <FaSun className='h-6 w-6 text-yellow-400' />
          )}
        </button>
        {/* Mobile Hamburger */}
        <button
          className='ml-2 md:hidden p-2 rounded-full bg-white/20 hover:bg-white/40 dark:bg-green-700 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition'
          onClick={() => setMenuOpen((v) => !v)}
          aria-label='Open Menu'
        >
          <FaBars className='h-6 w-6 text-white' />
        </button>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className='md:hidden bg-green-700 dark:bg-green-800 px-4 pb-4 pt-2 space-y-2 z-50'>
          {config.navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='block text-lg font-medium py-2 px-2 rounded hover:bg-green-800 dark:hover:bg-green-700 transition'
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
