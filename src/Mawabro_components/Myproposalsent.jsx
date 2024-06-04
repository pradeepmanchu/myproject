import React from 'react';
import './Myprojects.css'


export const Myproposalsent = () => {
  return (
    <div>
        <div>
        <div className='mt-3'>
        <h1 className='fw-bold fs-2 fontcolor'>My Profile<span className='text-body-tertiary fs-3'> ...Praposals sent</span></h1>
          <h2 className='mt-4'><span className='fs-1 text-body-tertiary'>Good Morning  </span > <span className='fw-bold fs-1 fontcolor'>Akhila</span></h2>

          <hr className='m-3'></hr>

          <p className='fs-4 text-body-tertiary'>Praposals sent</p>


      </div>
        </div>
        <div className='mt-4 p-3 propsalbox'>
          
        <div>
          <p className='fs-5 text-dark fw-bold'>I need Some one to Create Design for Esting Portal in Figma</p>
            <p className=' text-body-tertiary'>22 may 2024</p>
        </div>
        <div className='d-flex mt-2 fw-bold mx-2'>
            <div className='px-5'>
            <p className='mb-1'>Project Skills</p>
            <button type="" className="btn btn-success px-5">Active</button>
            </div>

            <div className='px-5'>
            <p className='mb-1'>Praposal Services</p>
            <button type="" class="btn btn-warning px-5">Active</button>
            </div>

            <div className='px-5'>
              <p className='mb-1'>Praposal Rank</p>
              <button type="" class="btn btn-primary px-5">49</button>

            </div>
            </div>

          
          </div>


          <div className='mt-5 p-3 propsalbox'>
          
          <div>
            <p className='fs-5 text-dark fw-bold'>I need Some one to Create Design for Listing Portal in Figma</p>
              <p className=' text-body-tertiary'>22 may 2024</p>
          </div>
          <div className='d-flex mt-2 fw-bold mx-2'>
              <div className='px-5'>
              <p className='mb-1'>Project Skills</p>
              <button type="" className="btn btn-danger px-5">Closed</button>
              </div>
  
              <div className='px-5'>
              <p className='mb-1'>Praposal Status</p>
              <button type="" class="btn btn-warning px-5">Active</button>
              </div>
  
              <div className='px-5'>
                <p className='mb-1'>Praposal Rank</p>
                <button type="" class="btn btn-danger px-5">420</button>
  
              </div>
              </div>
  
            
            </div>
    </div>
  )
}
