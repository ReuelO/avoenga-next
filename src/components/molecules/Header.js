'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'
import config from '../../config'

export default function Header() {
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileNavRef = useRef(null)

  // On mount, check localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      setTheme(systemTheme)
    }
  }, [])

  // Keep <html> class in sync with theme state and persist to localStorage
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Close mobile nav on click outside
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(e.target) &&
        !e.target.closest('[aria-label="Open Menu"]')
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
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
          <span className='text-2xl font-extrabold tracking-tight group-hover:text-white transition'>
            {config.siteName}
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-6 items-center'>
          {config.navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='relative text-lg font-medium after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100 after:mt-1'
            >
              {link.name}
            </a>
          ))}
          {/* Theme Toggle inside nav */}
          <button
            onClick={toggleTheme}
            className={`ml-6 flex items-center gap-2 px-4 py-2 rounded-full border-2 transition font-semibold shadow-sm
              ${
                theme === 'dark'
                  ? 'bg-white border-green-200 text-green-700 hover:bg-green-100'
                  : 'bg-green-800 border-green-700 text-yellow-300 hover:bg-green-700'
              }
            `}
            aria-label='Toggle Theme'
          >
            {theme === 'light' ? (
              <>
                <FaSun className='h-5 w-5' />
                <span>
                  <span className='font-bold'>Light</span> Mode
                </span>
              </>
            ) : (
              <>
                <FaMoon className='h-5 w-5' />
                <span>
                  <span className='font-bold'>Dark</span> Mode
                </span>
              </>
            )}
          </button>
        </nav>
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
        <nav
          ref={mobileNavRef}
          className='md:hidden bg-green-700 dark:bg-green-800 px-4 pb-4 pt-2 space-y-2 z-50'
        >
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
          {/* Theme Toggle inside mobile nav */}
          <button
            onClick={toggleTheme}
            className={`mt-2 flex items-center gap-2 w-full justify-center px-4 py-2 rounded-full border-2 transition font-semibold shadow-sm
              ${
                theme === 'dark'
                  ? 'bg-white border-green-200 text-green-700 hover:bg-green-100'
                  : 'bg-green-900 border-green-700 text-yellow-300 hover:bg-green-800'
              }
            `}
            aria-label='Toggle Theme'
          >
            {theme === 'light' ? (
              <>
                <FaSun className='h-5 w-5' />
                <span>
                  <span className='font-bold'>Light</span> Mode
                </span>
              </>
            ) : (
              <>
                <FaMoon className='h-5 w-5' />
                <span>
                  <span className='font-bold'>Dark</span> Mode
                </span>
              </>
            )}
          </button>
        </nav>
      )}
    </header>
  )
}
