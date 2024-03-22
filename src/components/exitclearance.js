import React from 'react';
import '../App.css';
import Navbar from './navbar'; 
import TopNavbar from './topnavbar'; 
import Footer from './footer';

function ExitClearance() {

  return (
    <div id="wrapper">
         {/* Sidebar */}
         <Navbar />
            {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
         {/* Topbar */}
         <TopNavbar />
         {/* page content begin here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Exit Clearance Form</h6>
                </div>
                <p className='paragraph' >
                  To Employee: Kindly return the company issued items and obtain clearance from your respective manager or PM/PIC/DM and other clearing officers, as required in sections A, B, C and Accounting. Please forward the signed and accomplished Exit Clearance Form to HR Department within 24 hours from your last day of work to process your final pay. Please note that approved payments will be processed and released once this form and other requirements are completed and received by HR Ops. Please read the exit clearance processing guide sent to you for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        
        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Employee Details</h6>
                </div>
                
                <div className="exit-container">
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Date Filed</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">User ID</h6>
                    <h6 className="exit-inputbox">000001</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Name</h6>
                    <h6 className="exit-inputbox">Rujie Jopista</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Last Position Held</h6>
                    <h6 className="exit-inputbox">IT</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Department</h6>
                    <h6 className="exit-inputbox">HR</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Project Code</h6>
                    <h6 className="exit-inputbox">123456</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Employee Status</h6>
                    <h6 className="exit-inputbox">Active</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Date Hired</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Effective Data of Separation</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Last Working Date</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Email</h6>
                    <h6 className="exit-inputbox">rujiejopista@gmail.com</h6>
                  </div>
                     
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">A. Project Manager/PIC/Department Manager</h6>
                </div>
                <div className="exit-container-A">
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginLeft: '25px' }}>
                    <h6 className="exit-item" >Yes/ No/ Not applicable(N/A)</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Knowledge Transfer Done</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>
                  
                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Files taken over</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Office Items returned (attach inventory of items returned)</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Keys / Passwords</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Others:</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>
                  
                  {/* <div>
                    <h6 className="exit-item" >Signature here</h6>
                    <h6 className="exit-item" style={{ }}>Name and Signature of PM/PIC/Manager / Date</h6>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">B. Administration Clearance: The following items were returned by the employee:</h6>
                </div>
                <div className="exit-container-B">
                  <h6 className="exit-inputbox-B" style={{ gridColumn: '2 / span 1' }}>Yes/ No/ Not applicable(N/A)</h6>
                  <h6 className="exit-inputbox-B" style={{ gridColumn: '3 / span 1' }}>Item(s) received by / Date:</h6>

                  <h6 className="exit-item-B" >Company ID</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>"Name - 00/00/0000"</h6>
                  
                  <h6 className="exit-item-B" >Exit Interview</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>"Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Deletion of AD Account</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Health card (HMO)</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Store/Canteen Clearance</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Statutory Benefit Clearance</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Laptops and accessories</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">C. Global Technology Clearance</h6>
                </div>
                <div className="exit-container-C">
                  <h6 className="exit-inputbox-C" style={{ gridColumn: '2 / span 1' }}>Yes / No / Not applicable</h6>
                  <h6 className="exit-inputbox-C" style={{ gridColumn: '3 / span 1' }}>Checked by / Date:</h6>

                  <h6 className="exit-item-C" >Deactivate email account</h6>
                  <h6 className="exit-inputbox-C" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>"Name - 00/00/0000"</h6>
                  
                  <h6 className="exit-item-C" >Remove user rights from servers, GAMS, etc.</h6>
                  <h6 className="exit-inputbox-C" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-C" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>"Name and signature of GT personnel:"</h6>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}
        
        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">D. Authority To Deduct</h6>
                </div>
                <p className='paragraph' >
                  I hereby authorize Innodata Knowledge Services, Inc. to deduct from my salary and other remunerations any or all money/ accountabilities due to the company or its officers for my final pay computation and/or check preparation, including but not limited to the following: XEMCO deductions, Loans, EMAP, Dental, Optical, Government/statutory contributions and loan payments and other deductions due to the company.
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of Employee/Date</h6>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* Page content ends here */}
        
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default ExitClearance;
