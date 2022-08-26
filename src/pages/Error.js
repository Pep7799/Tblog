import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='errorpage'>
        <h1>Error 404 | PAGE NOT FOUND</h1>
        <br />
        <div className='btn'>
        <Link to = '/'> <button> Back to my page </button></Link>
        </div>
    </div>
  )
}
