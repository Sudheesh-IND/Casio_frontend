import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';


function Adminsidebar() {
    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3">

                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-md">
                    <div className="container-fluid p-2">
                        <a className="navbar-brand text-primary mr-0">
                            <img
                                src='https://th.bing.com/th?id=OIP.YLJ48aJgmqA4LOzklbbaugHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
                                height='40'
                                alt=''
                                loading='lazy'
                            />
                        </a>
                        <div className="form-inline ml-auto">
                            <div className="btn btn-primary" onClick={ToggleSidebar} >
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">Sidebar Header</h4>
                        <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <li><a className="sd-link">Menu Item 1</a></li>
                            <li><a className="sd-link">Menu Item 2</a></li>
                            <li><a className="sd-link">Menu Item 3</a></li>
                            <li><Link to={'/addproducts'}><a className="sd-link">Add Product</a></Link></li>
                            <li><Link to={'/viewadminproducts'}><a className="sd-link">View products</a></Link></li>
                            <li><Link to={'/vieworders'}><a className="sd-link">View Orders</a></Link></li>

                            <li><Link to={'/shippedorders'}><a className="sd-link">Shipped Orders</a></Link></li>

                            <li><Link to={'/outfordelivery'}><a className="sd-link">out for delivery</a></Link></li>

                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </>
    )
}

export default Adminsidebar