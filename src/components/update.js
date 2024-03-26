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
        const response = await fetch(`http://localhost:5000/update/${employeeId}`, {
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
    <body id="page-top">      
      <div id="wrapper">
         {/* Sidebar */}
         <Navbar />
            {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
         {/* Topbar */}
         <TopNavbar />
            {/* Start of Page Content */}
      {/* {employee ? ( */}
      {/* Start of Page Content */}
      <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-9">
              <div className="card shadow mb-4">
                <div className="card-body">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Update Employee Information</h6>
                </div>
                <br/>
                  <form onSubmit={handleFormSubmit}>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="HRANID">Employee ID</label>
                      <label htmlFor="HRANID" className="form-control">{employeeData.EmpID}</label>
                      {/* <input type="text" className="form-control" id="HRANID" name="HRANID" value={employeeData.EmpID} onChange={handleInputChange} readOnly/>      */}
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
                        <label htmlFor="lastName">Middle Name</label>
                        <input type="text" className="form-control" id="lastName" name="LastName" value={employeeData.MiddleName} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="firstName">Maiden Name</label>
                        <input type="text" className="form-control" id="firstName" name="FirstName" value={employeeData.MaidenName} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="lastName">Middle Name</label>
                        <input type="text" className="form-control" id="lastName" name="LastName" value={employeeData.MiddleName} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="firstName">Maiden Name</label>
                        <input type="text" className="form-control" id="firstName" name="FirstName" value={employeeData.MaidenName} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label htmlFor="birthdate">Birthdate</label>
                      <input type="date" className="form-control" id="birthdate" name="birthdate" value={employeeData.Birthdateirthdate} onChange={handleInputChange} />
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
                      <input type="month" className="form-control" id="birthMonth" name="birthMonth" value={employeeData.BirthMonth} onChange={handleInputChange} />      
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
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* End of Page Content */}
        </div>
        {/* Footer */}
      <Footer />
        {/* End of Content Wrapper */}
      </div>
      </div>
      {/* End of Page Wrapper */}
    </body>
  );
}

export default UpdateEmployeeInfo;

