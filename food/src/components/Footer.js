import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer mt-auto py-3' style={{ backgroundColor: '#343a40', color: '#fff' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <Link to="/" className='me-3 text-light' aria-label="Home">
              Home
            </Link>
            <span className='text-light'>@ 2024 Food, Inc</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
