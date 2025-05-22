import NextLink from 'next/link'
import PropTypes from 'prop-types'

export default function Link({ href, children, className, size }) {
  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }

  return (
    <NextLink
      href={href}
      className={`${sizes[size]} ${className} hover:underline`}
    >
      {children}
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Link.defaultProps = {
  className: '',
  size: 'medium',
}
