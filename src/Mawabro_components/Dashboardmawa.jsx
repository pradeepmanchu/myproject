import React from 'react'
import "./Myprojects.css"

export const Dashboardmawa = () => {
  return (
    <>
    <div className=''>
    <div className='mt-3'>
       <h1 className='fw-bold fs-2 fontcolor'>My Profile<span className='text-body-tertiary fs-3'> ...Projects</span></h1>
        <h2 className='mt-4'><span className='fs-1 text-body-tertiary'>Good Morning  </span > <span className='fw-bold fs-1 fontcolor'>Akhila</span></h2>

        <hr className='mt-3'></hr>

    </div>

    <div className='grid grid-cols-3 mt-4  '>
        <div className='rounded-3 bgColor m-2'>
            <div className='d-flex justify-around py-3'>
              <p className='fw-bold'>Project Applied</p>
              <div>
              <button  class="btn btn-warning">Apply Now</button></div>
            </div>
            <div className='px-3 py-3'>
              <p>This Month</p>
              <p>$  0</p>
              <p>Last 15 days</p>
              <p>$  0</p>
            </div>
          </div>

          <div className='rounded-3 bgColor m-2 '>
            <div className='d-flex justify-around py-3'>
              <p className='fw-bold'>Profile Views</p>
              <div>
              <button  class="btn btn-warning">Share</button></div>
            </div>
            <div className='px-3 py-3'>
              <p>This Month</p>
              <p>$  0</p>
              <p>Last 15 days</p>
              <p>$  0</p>
            </div>
          </div>


          <div className='rounded-3 bgColor m-2'>
            <div className=' py-3'>
              <p className='fw-bold text-start px-1'>Earnings</p>
              
            </div>
            <div className='px-3 py-3'>
              <p>Life time</p>
              <p>$  0</p>
              <p>This Month</p>
              <p>$  0</p>
            </div>
          </div>

          <div className='rounded-3 bgColor '>
            <div className='d-flex justify-around py-3'>
              <p className='fw-bold'>Posted Jobs</p>
              <div>
              <button  class="btn btn-warning">Press a job</button></div>
            </div>
            <div className='px-3 py-3'>
              <p>This Month</p>
              <p>$  0</p>
              <p>Last 3 months</p>
              <p>$  0</p>
            </div>
          </div>
    </div>
    </div>
    </>
  )
}
