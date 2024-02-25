import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-item-center'>
          <Link to="/" className='mb-3 me-2 mb-md-0 text-mouted text-decoration-none 1h-1'>
            Home
          </Link>
          <span className='text-muted'>@ 2024 Food, Inc</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer