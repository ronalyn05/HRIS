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
        <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12">
                  <div className="card shadow mb-4">
                    {/* Card Header -  */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">EXIT CLEARANCE PROCESSING</h6>
                    </div>
                    {/* Card Body - */}
                    <div className="card-body">
                      <div className="tab-content">
                          <div className="card-body">
                            <div className="d-flex justify-content-center">
                              <form id="uploadForm" className="user" encType="multipart/form-data">
                                <div className="form-group">
                                  
                                </div>
                              </form>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Page content ends here */}
        
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default ExitClearance;
