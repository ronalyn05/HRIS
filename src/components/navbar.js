import React from "react";
import { Link, useLocation } from 'react-router-dom';
 import '../App.css';


 function Navbar() {

  // Get user data from location state
  const location = useLocation();
  const data = location.state;

     return (
         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
             {/* Sidebar - Brand */}
             <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                 <div className="sidebar-brand-icon">
                     <img src="/img/hris1.png" alt="companyLogo" className="logo1" />
                 </div>
                 <div className="sidebar-brand-text">
                     <img src="/img/hris2.png" alt="companyLogo" className="logo2" />
                 </div>
             </a>
             {/* Divider */}
             <hr className="sidebar-divider my-0" />
             {/* Nav Item - Dashboard */}
             <li className="nav-item">
                <Link className="nav-link" to={{ pathname: "/dashboard"}} state={data}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                  </Link>
             </li>
             {/* Divider */}
             <hr className="sidebar-divider" />
             {/* Heading */}
             <div className="sidebar-heading">
                 MAIN
             </div>
             {/* Nav Item - New Hire Upload */}
             <li className="nav-item">
                 {/* <a className="nav-link" href="/newHireUpload"> */}
                 <Link className="nav-link" to={{ pathname: "/newHireUpload"}} state={data}>
                  <i className="fas fa-fw fa-upload"></i>
                  <span>New Hire Upload</span>
                </Link>
                 {/* </a> */}
             </li>
             {/* Nav Item - Self Service Movement */}
             <li className="nav-item">
             <Link className="nav-link" to={{ pathname: "/movement"}} state={data} >
                <i className="fas fa-fw fa-handshake"></i>
                <span>Self Service Movement</span>
              </Link>
             </li>
             {/* Nav Item - Exit Clearance Processing */}
             <li className="nav-item">
             <Link className="nav-link" to={{ pathname: "/exitclearance"}} state={data}>
                <i className="fas fa-fw fa-sign-out-alt"></i>
                <span>Exit Clearance Processing</span>
            </Link>
             </li>
             {/* Nav Item - HR/Admin Module */}
             <li className="nav-item">
             <Link className="nav-link" to={{ pathname: "/adminModule"}} state={data} >
                <i className="fas fa-fw fa-user-tie"></i>
                <span>HR/Admin Module</span>
              </Link>
             </li>
             {/* Sidebar Toggler (Sidebar) */}
             <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
             {/* <div id="sidebar" className="text-center d-none d-md-inline">
                 <button id="sidebarToggle" className="rounded-circle border-0">
                     <i id="sidebarIcon" className="fas fa-chevron-left"></i>
                 </button>
             </div> */}
         </ul>
     );
 }
 
 export default Navbar;
 


  