
import React from 'react';
import './Myprojects.css'

const Myfavourites = () => {
  return (
    <div mt-2>
      <div>
      <h1 className='fw-bold fs-2 fontcolor'>My Profile<span className='text-body-tertiary fs-3'> ...Projects</span></h1>
        <h2 className='mt-4 mb-3'><span className='fs-1 text-body-tertiary'>Good Morning  </span > <span className='fw-bold fs-1 fontcolor'> Akhila!</span></h2>
         <hr className='link-underline-dark'></hr>
        <p className='fs-4 text-middle mt-3'>My Favourites</p> 
      </div>

      <div className='d-flex mt-5 fw-bold favbox p-4'>
        <div className='px-5 fs-5'>
          <p>Favourite Users</p>
        </div>
        <div className='px-5 fs-5'>
          <p>Saved Praposals</p>
        </div>
      </div>
    </div>
  )
}

export default Myfavourites