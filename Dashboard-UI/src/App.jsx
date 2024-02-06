import React from 'react'
import NavBar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  const content = [
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    },
    {
      "InvoiceID": "#AHGA68",
      "Date": "23/9/2022",
      "Customer": "Jacob Marcus",
      "PayableAmount": "$100",
      "PaidAmount": "$0",
      "Due": "$100"
    }
  ];

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar content={content} />} />
        </Routes>
      </Router>
        
    </div>
  )
}

export default App;