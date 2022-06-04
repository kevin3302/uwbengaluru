import React from 'react'
import './CoordinatorPage.css'

const CoordinatorPage = () => {
  return (
    <div id="main" style={{backgroundColor: "#ede7f6"}}>
        <div className = "container">
            <form  className="w-100 mx-auto border border-secondary rounded bg-light px-5 m-5">

                <div className="row mt-3 mb-3 pt-3" >
                    <div className="form-floating col-sm-6">
                        <input type="text" id="name" placeholder="Name" className="form-control ml-10 border-0 border-bottom rounded-0 bg-light text-dark"/>
                        <label htmlFor="name" className="form-label text-dark">Name</label> 
                    </div>
                    <div className="form-floating col-sm-6">
                        <input type="number" id="contact"placeholder="Age" className="form-control border-0 border-bottom rounded-0 bg-light text-dark"/>
                        <label htmlFor="contact" className="form-label text-dark">Age</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-6 form-floating">
                        <input type="number"  id="weight" placeholder="Weight" className='form-control border-0 border-bottom rounded-0 bg-light text-dark' />
                        <label htmlFor="name" className="form-label text-dark">Weight</label>
                    </div>
                    <div className="col-sm-6 form-floating">
                        <input type="number"  id="height" placeholder="Height" className='form-control border-0 border-bottom rounded-0 bg-light text-dark' />
                        <label htmlFor="pname" className="form-label text-dark">Height</label>
                    </div>
                </div>

                
                <div className="mb-3">
                    <label htmlFor="pname" className="form-label text-dark">Start Date</label>
                    <input type="date"  id="date" className='form-control border-0 border-bottom rounded-0 bg-light text-dark' />
                </div>

                <div className="row mb-3">
                    <div className="col-sm-6 form-floating">
                        <input type="number"  id="dose" placeholder="Dosage" className='form-control border-0 border-bottom rounded-0 bg-light text-dark' />
                        <label htmlFor="pname" className="form-label text-dark">Dosage</label>
                    </div>
                    <div className="col-sm-6 form-floating">
                        <input type="number"  placeholder="Amount" id="amt" className='form-control border-0 border-bottom rounded-0 bg-light text-dark' />
                        <label htmlFor="pname" className="form-label text-dark">Amount</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="text-dark">Product Description</label>
                    <textarea  id="description" cols="30" rows="10" className="form-control bg-light text-dark"></textarea>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-4">
                        <label htmlFor="upload" className="form-label text-dark">Upload Spreadsheet</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="file" id="upload" className="form-control bg-light text-light" />
                    </div>
                </div>

                <div className="mb-3">
                    <button type="submit" className='btn btn-block btn-success w-100'>Add Item</button>
                </div>
        </form>
        </div>
    </div>
  )
}

export default CoordinatorPage;