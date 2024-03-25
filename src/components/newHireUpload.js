import React, {useState, useEffect} from 'react';
import '../App.css';
import * as XLSX from 'xlsx';
import Navbar from './navbar';
import TopNavbar from './topnavbar'; 
import Footer from './footer';
import $ from 'jquery'; // Import jQuery
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript

const NewHireUpload = () => {

  const [file, setFile] = useState('');
  const [excelData, setExcelData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false); 


  // Inside handleFileChange function
  const handleFileChange = async (e) => {
  const selectedFile = e.target.files[0];
  setFile(selectedFile);

  try {
    const data = await readFile(selectedFile);
    const parsedData = parseExcelData(data);
    setExcelData(parsedData);
  } catch (error) {
    console.error('Error occurred:', error);
    // Reset excelData state in case of error
    setExcelData([]);
    alert("Error occurred while reading the file. Please try again.");
  }
}
 // Inside handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!file) {
    console.log("No File Selected");
    alert("No File Selected");
    return;
  }

  const fileType = file.type;
  if (fileType !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    console.log("Please select an Excel file.");
    alert("Please select an Excel file.");
    return;
  }

  try {
    await sendDataToServer(excelData);
    console.log('Uploading Data: Successful');

    // Reset file state to clear the input field
    setFile('');

    // Clear the list
    setExcelData([]);
    
    alert("Data Upload Successful.");
  } catch (error) {
    console.error('Error occurred while sending data:', error);
    alert("Error occurred while uploading data. Please try again later.");
  }
}

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(new Uint8Array(e.target.result));
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
}

const parseExcelData = (data) => {
  const workbook = XLSX.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0]; // Assuming there's only one sheet
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet, { header: 1 }).slice(1); // Exclude the first row (header)
}

const sendDataToServer = async (data) => {
  try {
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ excelData: data }), // Send the Excel data as JSON
    });
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
  } catch (error) {
    throw error;
  }
}

//retrieve the new hire employee data 
useEffect(() => {
  async function fetchData() {
    try {
      // Make a GET request to fetch new hire employees from the server
      const response = await fetch('http://localhost:5000/newHireEmp');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Extract the data from the response
      const data = await response.json();
      
      // Set the retrieved data in your component state
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Call the fetchData function when the component mounts
  fetchData();
}, []); // Empty dependency array to run only once when the component mounts

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
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
            <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" id="upload-tab" data-toggle="tab" href="#uploadForm" role="tab" aria-controls="uploadForm" aria-selected="false">New Hire</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="reports-tab" data-toggle="tab" href="#newHireReports" role="tab" aria-controls="uploadForm" aria-selected="false">Reports</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="uploadForm" role="tabpanel" aria-labelledby="upload-tab">
                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <form className="user" encType="multipart/form-data" >
                        <div className="form-group">
                          <input type="file" className="form-control-file" aria-describedby="fileHelp" onChange={handleFileChange} />
                          <small id="fileHelp" className="form-text text-muted">Choose a file to upload new hire.</small>
                        </div>
                        <div className="text-center">
                          <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-user btn-block col-md-6">Upload File</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="newHireReports" role="tabpanel" aria-labelledby="reports-tab">
                  <div className="card-body">
                    <div className="table-responsive">
                    {/* {excelData.length > 0 ? ( */}
                      <table className="table">
                        <thead>
                          <tr>
                            {/* <th scope="col" className='center'>EMPLOYEE ID</th> */} 
                            <th scope="col">ACTION</th>
                            <th scope="col">EMPLOYEE ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">FIRST NAME</th>
                            <th scope="col">MIDDLE NAME</th>
                            <th scope="col">LAST NAME</th>
                            <th scope="col">MAIDEN NAME</th>
                            <th scope="col">BIRTHDATE</th>
                            <th scope="col">AGE</th>
                            <th scope="col">BIRTH MONTH</th>
                            <th scope="col">AGE BRACKET</th>
                            <th scope="col">GENDER</th>
                            <th scope="col">MARITAL STATUS</th>
                            <th scope="col">SSS</th>
                            <th scope="col">PHIC</th>
                            <th scope="col">HDMF</th>
                            <th scope="col">TIN</th>
                            {/* <th scope="col">ADDRESS</th> */}
                            <th scope="col">HRANID</th>
                            <th scope="col">CONTACT NUMBER</th>
                            <th scope="col">EMAIL ADDRESS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {employees.length > 0 ? (
                            employees.map(employee => (
                              <tr key={employee.EmpID}>
                                <td>
                                <td>
                                  <button
                                    className="update-button"
                                    onClick={() => openModal()} // Open modal on button click
                                  >
                                    <i className="fas fa-pencil-alt"></i> Update
                                  </button>
                                </td>
                                {/* <button
                                  className="update-button" onClick={openModal}
                                  // onClick={() => {
                                  //   // Handle update action here, e.g., navigate to update page
                                  //   console.log(`Update employee with ID ${employee.EmpID}`);
                                  // }}
                                >
                                  <i className="fas fa-pencil-alt"></i> Update
                                </button> */}
                              </td>
                                <td>{employee.EmpID}</td>
                                <td>{employee.Name}</td>
                                <td>{employee.FirstName}</td>
                                <td>{employee.MiddleName}</td>
                                <td>{employee.LastName}</td>
                                <td>{employee.MaidenName}</td>
                                <td>{employee.Birthdate}</td>
                                <td>{employee.Age}</td>
                                <td>{employee.BirthMonth}</td>
                                <td>{employee.AgeBracket}</td>
                                <td>{employee.Gender}</td>
                                <td>{employee.MaritalStatus}</td>
                                <td>{employee.SSS}</td>
                                <td>{employee.PHIC}</td>
                                <td>{employee.HDMF}</td>
                                <td>{employee.TIN}</td>
                                {/* <td>{employee.AddressID}</td> */}
                                <td>{employee.HRANID}</td>
                                <td>{employee.ContactNumber}</td>
                                <td>{employee.EmailAddress}</td> 
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="20">No data available</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                       {/* ) : (
                        <div>No File Selected</div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            {/* /.container-fluid */}
          </div>
          {/* Footer */}
          <Footer />
           {/* Modal for Update */}
    {showModal && (
      <div className="modal fade show" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Employee</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Add your update form content here */}
              <p>Update employee information here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
              {/* Add your update action button here if needed */}
            </div>
          </div>
        </div>
      </div>
    )}

          {/* End of Page Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
      {/* Scroll to Top Button*/}
      {/* <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a> */}
      {/* Logout Modal*/}
      {/* <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>  */}
    </body>
  );
}

export default NewHireUpload;
