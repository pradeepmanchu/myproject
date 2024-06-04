import React from 'react';
import './Myprojects.css'

const Myprojects = () => {
  return (
    <div className='whole mt-5'>

        <h1 className='fw-bold fs-2 fontcolor'>My Profile<span className='text-body-tertiary fs-3'> ...Projects</span></h1>
        <h2 className='mt-4 mb-3'><span className='fs-1 text-body-tertiary'>Good Morning  </span > <span className='fw-bold fs-1 fontcolor'> Akhila</span></h2>
         <hr className='link-underline-dark'></hr>
        <p className='fs-4 text-middle mt-3'>My Jobs</p> 

       

        <center>



        <div className="row mt-5 box p-3">
                    
        <div className='col-md-3 mx-3'>
                    <label for="inputPassword5"  className="form-label fw-bold fs-4">Id</label>
                    <select className="form-select form-select-lg mb-3" aria-label="Small select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                    <option value="2">4</option>
                    <option value="2">5</option>
                    <option value="2">6</option>
                    </select>

                    
                    
                    </div>

                    <div className='col-md-3 mx-3 '>
                    <label for="inputPassword5" className="form-label fw-bold fs-4">Status</label>
                    <select className="form-select form-select-lg mb-3" aria-label="Small select example">
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                    </select>

                    
                    
                    </div>

                    <div className='col-md-3 mx-3 '>
                    <label for="inputPassword5" className="form-label fw-bold fs-4">Record</label>
                    <select className="form-select form-select-lg mb-3" aria-label="Small select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                    <option value="2">4</option>
                    <option value="2">5</option>
                    <option value="2">6</option>
                    </select>

                    
                    
                    </div>
       </div>

        </center>

    </div>
  )
}

export default Myprojects