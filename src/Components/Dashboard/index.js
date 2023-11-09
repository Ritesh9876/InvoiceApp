import React,{useState} from 'react'
import './dashboard.css'
import InvoiceTable from './Components/InvoiceTable'
import { Button} from '@mui/material'
import AddNewInvoice from './Components/AddNewInvoice'
function Dashboard() {
	const [addInvoiceDrawerOpen,setAddInvoiceDrawerOpen] = useState(false)

    const handleAddInvoiceDrawerOpen = () =>{
        setAddInvoiceDrawerOpen(!addInvoiceDrawerOpen)
    }
    return (
        <div className="dashboard-container">
            <AddNewInvoice
            open={addInvoiceDrawerOpen}
            toggleDrawer={handleAddInvoiceDrawerOpen}
            />
            <div className="dashboard-left-container">
                <div className="dashboard-add-invoice-button"> 
                <Button
                onClick={() =>{
                    setAddInvoiceDrawerOpen(true)
                }}
                variant="contained" 
                size="large">
                    Add new Invoice
                </Button>
                </div>
            </div>
            <div className="dashboard-right-container">
            <InvoiceTable />
            </div>
        </div>
    )
}

export default Dashboard