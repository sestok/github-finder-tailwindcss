import React from 'react'
import { PropTypes } from 'prop-types'

function Navbar({ title }) {
  return (
    <div className='navbar bg-base-100 shadow-lg'>
      <a className='btn btn-ghost normal-case text-xl align-middle'>{title}</a>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
