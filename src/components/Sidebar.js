import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUpload,
    FaFileInvoiceDollar,
    FaCalendarAlt,
    FaNewspaper,
    FaBell,
    FaCog,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import ExcelUploadEnhanced from './ExcelUploadEnhanced';
import DisplayTable from './DisplayTable';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/upload",
            name:"Upload",
            icon:<FaUpload/>
        },
        {
            path:"/invoice",
            name:"Invoice",
            icon:<FaFileInvoiceDollar/>
        },
        {
            path:"/schedule",
            name:"Schedule",
            icon:<FaNewspaper/>
        },
        {
            path:"/calender",
            name:"Calender",
            icon:<FaCalendarAlt/>
        },
        {
            path:"/notification",
            name:"Notification",
            icon:<FaBell/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaCog/>
        }
    ]
    return (
        <div>
            <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                <img style={{display: isOpen ? "block" : "none"}} className='logo1' src={`${process.env.PUBLIC_URL}/base12.png`} alt="Login" />
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Base</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
            </div>

             <div className='base3'> 
                <div className='excel1'>
                <ExcelUploadEnhanced/>
                <div className='display1'>
                    <DisplayTable/>
                </div>
                </div>
            </div>  
        </div>
    );
};

export default Sidebar;