import React, { useState, useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faCalendarCheck, faShoppingBag, faComment, faCreditCard, faQuestion, faGear, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

function NavBar({content}) {
    const [navStatus, setNavStatus] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setNavStatus(true);
        } else {
            setNavStatus(false);
        }
    }, [window.innerWidth]);

    const handleNav = () => {
        setNavStatus(!navStatus);
    };

    return (
        <div className="container">
            <div className="nav-container bg-dark-subtle ">
                {navStatus ? (
                    <div
                        onMouseEnter={handleNav}
                        className='nav flex-column small-nav'
                    >
                        <p className='nav-link mt-4'><FontAwesomeIcon icon={faTv} /></p>
                        <p className='nav-link'><FontAwesomeIcon icon={faCalendarCheck} /></p>
                        <p className='nav-link'><FontAwesomeIcon icon={faShoppingBag} /></p>
                        <p className='nav-link'><FontAwesomeIcon icon={faComment} /></p>
                        <p className='nav-link'><FontAwesomeIcon icon={faCreditCard} /></p>
                        <p className='nav-link'><FontAwesomeIcon icon={faGear} /></p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <p className='nav-link'><FontAwesomeIcon icon={faQuestion} /></p>
                    </div>
                ) : (
                    <div
                        onMouseLeave={handleNav}
                        className='nav flex-column nav-div'
                    >
                        <h2>Guvi sales</h2>
                        <p className='nav-link'><FontAwesomeIcon icon={faTv} /> Dashboard</p>
                        <p className='nav-link'><FontAwesomeIcon icon={faCalendarCheck} /> Appointment</p>
                        <p className='nav-link'><FontAwesomeIcon icon={faShoppingBag} /> Medicine Order</p>
                        <p className='nav-link'><FontAwesomeIcon icon={faComment} /> Message</p>
                        <p className='nav-link'><FontAwesomeIcon icon={faCreditCard} /> Payment</p>
                        <p className='nav-link'><FontAwesomeIcon icon={faGear} /> Settings</p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <p className='nav-link'><FontAwesomeIcon icon={faQuestion} /> Help</p>
                    </div>
                )}
            </div>

            <div className="content-container">
                <div className="search-container">
                    <div className="search">
                        <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search..." />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                    <FontAwesomeIcon icon={faBell} className="alarm-icon" />
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="d-flex flex-column">
                                <label for="customer">Customer</label>
                                <input type="text" id="customer" class="form-control" placeholder="Customer" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex flex-column">
                                <label for="invoice-id">Invoice ID</label>
                                <input type="text" id="invoice-id" class="form-control" placeholder="Invoice ID" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex flex-column">
                                <label for="start-date">Start Date</label>
                                <input type="text" id="start-date" class="form-control" placeholder="Start Date" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex flex-column">
                                <label for="end-date">End Date</label>
                                <input type="text" id="end-date" class="form-control" placeholder="End Date" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="table-responsive bg-light ">
                    <table className="table table-striped table-layout-fixed">
                        <thead>
                            <tr className='p-3'>
                                <th scope="col" className='p-3'>Select</th>
                                <th scope="col" className='p-3'>Invoice ID</th>
                                <th scope="col" className='p-3'>Date</th>
                                <th scope="col" className='p-3'>Customer</th>
                                <th scope="col" className='p-3'>Payable Amount</th>
                                <th scope="col" className='p-3'>Paid Amount</th>
                                <th scope="col" className='p-3'>Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.map((item, index) => (
                                <tr key={index} className='p-3'>
                                    <td className='p-3'><input type="checkbox" /></td>
                                    <td className='p-3'>{item.InvoiceID}</td>
                                    <td className='p-3'>{item.Date}</td>
                                    <td className='p-3'>{item.Customer}</td>
                                    <td className='p-3'>{item.PayableAmount}</td>
                                    <td className='p-3'>{item.PaidAmount}</td>
                                    <td className='p-3'>{item.Due}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default NavBar;
