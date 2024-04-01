import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import TopNavbar from './topnavbar';
import Footer from './footer';
import '../App.css';
// import { useLocation } from "react-router-dom";

 function UpdateEmployeeInfo() {
   
    const { employeeId } = useParams();
    const [employeeData, setEmployeeData] = useState({
      LastName: '',
      FirstName: '',
      MiddleName: '',
      MaidenName: '',
      Birthdate: '',
      Age: '',
      BirthMonth: '',
      AgeBracket: '',
      Aender: '',
      MaritalStatus: '',
      SSS: '',
      PHIC: '',
      HDMF: '',
      TIN: '',
      HRANID: '',
      ContactNumber: '',
      EmailAddress: ''
    });
  
    useEffect(() => {
      // Fetch employee data based on employeeId
      const fetchEmployeeData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/newHireEmp/${employeeId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch employee data');
          }
          const data = await response.json();
          setEmployeeData(data);
        } catch (error) {
          console.error('Error fetching employee data:', error);
        }
      };
  
      fetchEmployeeData();
    }, [employeeId]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEmployeeData({
        ...employeeData,
        [name]: value
      });
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:5000/updateEmployee/${employeeId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(employeeData)
        });
        if (!response.ok) {
          throw new Error('Failed to update employee');
        }
        // Handle successful update
        console.log('Employee updated successfully');
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    };
  
    if (!employeeData) {
      return <div>Loading...</div>;
    }
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
                  <h6 className="m-0 font-weight-bold text-primary">Employee Details</h6>
                </div>
                 <br/>
                  <form onSubmit={handleFormSubmit}>
                  <div className="row justify-content-center">
                  <div className="col-md-4">
                      <div className="form-group">
                        <label>Employee ID</label>
                        <span className="form-control">{employeeData.EmpID}</span>
                      </div>
                    </div>
                    {/* <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="EmpId">Employee ID</label>
                      <label htmlFor="EmpId" className="form-control">{employeeData.EmpID}</label>
                      </div>
                    </div> */}
                  </div>
                  <div className="row justify-content-center">
                  <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <label htmlFor="name" className="form-control">{employeeData.Name}</label>
                        {/* <input type="text" className="form-control" id="Name" name="Name" value={employeeData.Name} onChange={handleInputChange} /> */}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="emailAddress">Email Address</label>
                      <input type="text" className="form-control" id="emailAddress" name="emailAddress" value={employeeData.EmailAddress} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="LastName" value={employeeData.LastName} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="FirstName" value={employeeData.FirstName} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="middleName">Middle Name</label>
                        <input type="text" className="form-control" id="middleName" name="MiddleName" value={employeeData.MiddleName} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="maidenName">Maiden Name</label>
                        <input type="text" className="form-control" id="maidenName" name="maidenName" value={employeeData.MaidenName} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="birthdate">Birthdate</label>
                      <input type="text" className="form-control" id="birthdate" name="birthdate" value={employeeData.Birthdate} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input type="number" className="form-control" id="age" name="age" value={employeeData.Age} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="birthMonth">Birth Month</label>
                      <input type="text" className="form-control" id="birthMonth" name="birthMonth" value={employeeData.BirthMonth} onChange={handleInputChange} />      
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="ageBracket">Age Bracket</label>
                      <input type="text" className="form-control" id="ageBracket" name="ageBracket" value={employeeData.AgeBracket} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <input type="text" className="form-control" id="gender" name="gender" value={employeeData.Gender} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="maritalStatus">Marital Status</label>
                      <input type="text" className="form-control" id="maritalStatus" name="maritalStatus" value={employeeData.MaritalStatus} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="SSS">SSS No.</label>
                      <input type="text" className="form-control" id="SSS" name="SSS" value={employeeData.SSS} onChange={handleInputChange} />     
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="PHIC">PHIC</label>
                      <input type="text" className="form-control" id="PHIC" name="PHIC" value={employeeData.PHIC} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="HDMF">HDMF</label>
                      <input type="text" className="form-control" id="HDMF" name="HDMF" value={employeeData.HDMF} onChange={handleInputChange} />      
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="TIN">TIN</label>
                      <input type="text" className="form-control" id="TIN" name="TIN" value={employeeData.TIN} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="HRANID">HRANID</label>
                      <input type="text" className="form-control" id="HRANID" name="HRANID" value={employeeData.HRANID} onChange={handleInputChange} />     
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={employeeData.ContactNumber} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto">Update Employee</button>
                  </form>
                  <br />
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

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Clearance and Release Confirmed by:</h6>
                </div>
                <p className='paragraph' >
                  Remarks/Notes:
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of HR HEAD/HR Representative/Date</h6>
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
                  <h6 className="m-0 font-weight-bold text-primary">FINANCE CLEARANCE</h6>
                </div>
                <p className='paragraph' >
                  Any outstanding loan/advances? Yes No
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of Finance (Accounting)/Date</h6>
                <p className='paragraph' >
                Other details/computations/etc.:
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of Finance (Payroll)/Date</h6>
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
                  <h6 className="m-0 font-weight-bold text-primary">ACKNOWLEDGEMENT</h6>
                </div>
                <p className='paragraph' >
                I hereby acknowledge the accuracy and completeness of this clearance. I will not disclose any or all company's confidential information upon separation from company.
                </p>
                <br />
                <h6 className="exit-item-D" >Name and Signature of Employee/Date</h6>
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
                  <h6 className="m-0 font-weight-bold text-primary">Received by HR/Date:</h6>
                </div>
                <br />
                <br />
                <br />
                <h6 className="exit-item-D" >Name and Signature of Employee/Date</h6>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        <p style={{ textAlign: 'center' }}>      
          NOTE:
          Please affix your signature after you have completed the items from section A, B, C & Accounting Clearance.
        </p>
        {/* Page content ends here */}       
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
      
    );
 
}

export default UpdateEmployeeInfo;

