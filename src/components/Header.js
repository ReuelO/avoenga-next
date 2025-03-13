'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import config from '../../config'

export default function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    setTheme(systemTheme)
    document.documentElement.classList.add(systemTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.remove(prevTheme)
      document.documentElement.classList.add(newTheme)
      return newTheme
    })
  }

  return (
    <header className='bg-green-600 dark:bg-gray-800 text-white p-4 shadow-md fixed w-full z-10'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <Image
          src={config.logo}
          alt={config.siteName}
          height={40}
          width={40}
          className='h-10 w-10'
        />
        <h1 className='text-3xl font-extrabold tracking-tight'>
          {config.siteName}
        </h1>
        <nav className='hidden md:flex space-x-8'>
          {config.navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-lg font-medium hover:underline'
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className='ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700'
          aria-label='Toggle Theme'
        >
          {theme === 'light' ? (
            <FaMoon className='h-6 w-6 text-gray-800' />
          ) : (
            <FaSun className='h-6 w-6 text-yellow-500' />
          )}
        </button>
      </div>
    </header>
  )
}
