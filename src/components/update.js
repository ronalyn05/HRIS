import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import TopNavbar from './topnavbar';
import Footer from './footer';
import '../App.css';
// import { useLocation } from "react-router-dom";

function UpdateEmployeeInfo(props) {
  
  // Get user data from location state
  // const location = useLocation();
  // const data = location.state;
  // Access the data object passed from the Link component
   const data = props.location.state;
 
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);
  const [formData, setFormData] = useState({
    // Initialize form data state with empty values
    lastName: '',
    firstName: '',
    middleName: '', // Add middleName field
    maidenName: '', // Add maidenName field
    birthdate: '', // Add birthdate field
    age: '', // Add age field
    birthMonth: '', // Add birthMonth field
    ageBracket: '', // Add ageBracket field
    gender: '', // Add gender field
    maritalStatus: '', // Add maritalStatus field
    SSS: '', // Add SSS field
    PHIC: '', // Add PHIC field
    HDMF: '', // Add HDMF field
    TIN: '', // Add TIN field
    HRANID: '', // Add HRANID field
    contactNumber: '', // Add contactNumber field
    emailAddress: '', // Add emailAddress field
  });

  useEffect(() => {
    async function fetchEmployee() {
      try {
        // Make a GET request to fetch employee data based on employeeId
        const response = await fetch(`http://localhost:5000/newHireEmp/${employeeId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }

        const data = await response.json();
        setEmployee(data);
        
        // Populate form data with fetched employee data
        setFormData({
          lastName: data.lastName || '', 
          firstName: data.firstName || '',
          middleName: data.middleName || '', 
          maidenName: data.maidenName || '', 
          birthdate: data.birthdate || '', 
          age: data.age || '', 
          birthMonth: data.birthMonth || '', 
          ageBracket: data.ageBracket || '', 
          gender: data.gender || '', 
          maritalStatus: data.maritalStatus || '', 
          SSS: data.SSS || '', 
          PHIC: data.PHIC || '', 
          HDMF: data.HDMF || '', 
          TIN: data.TIN || '', 
          HRANID: data.HRANID || '', 
          contactNumber: data.contactNumber || '', 
          emailAddress: data.emailAddress || '', 
        });

        // Preserve user's first name and last name if available
        if (data.firstName && data.lastName) {
          setFormData(prevState => ({
            ...prevState,
            firstName: data.firstName,
            lastName: data.lastName
          }));
        }
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    }

    fetchEmployee();
  }, [employeeId]);


  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make a PUT request to update employee data with formData
    try {
      const response = await fetch(`http://localhost:5000/newHireEmp/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update employee data');
      }
      
      // Optionally, handle success action (e.g., show success message, redirect)
    } catch (error) {
      console.error('Error updating employee data:', error);
      // Optionally, handle error action (e.g., show error message)
    }
  };

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
      {employee ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" className="form-control" id="middleName" name="middleName" value={formData.middleName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="maidenName">Maiden Name</label>
            <input type="text" className="form-control" id="maidenName" name="maidenName" value={formData.maidenName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate</label>
            <input type="date" className="form-control" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="birthMonth">Birth Month</label>
            <input type="month" className="form-control" id="birthMonth" name="birthMonth" value={formData.birthMonth} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ageBracket">Age Bracket</label>
            <input type="text" className="form-control" id="ageBracket" name="ageBracket" value={formData.ageBracket} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="maritalStatus">Marital Status</label>
            <input type="text" className="form-control" id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="SSS">SSS No.</label>
            <input type="text" className="form-control" id="SSS" name="SSS" value={formData.SSS} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="PHIC">PHIC</label>
            <input type="text" className="form-control" id="PHIC" name="PHIC" value={formData.PHIC} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="HDMF">HDMF</label>
            <input type="text" className="form-control" id="HDMF" name="HDMF" value={formData.HDMF} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="TIN">TIN</label>
            <input type="text" className="form-control" id="TIN" name="TIN" value={formData.TIN} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="HRANID">HRANID</label>
            <input type="text" className="form-control" id="HRANID" name="HRANID" value={formData.HRANID} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input type="text" className="form-control" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Update Employee</button>
        </form>
      ) : (
        <p className="text-center">Loading employee data...</p>
      )}
      
      
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

