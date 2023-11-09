import React,{useState} from 'react'
import './invoiceTable.css'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import InvoiceDetailsDrawer from '../InvoiceDetailsDrawer';
import { Button } from '@mui/material';
import { UseInVoiceStore } from '../../../../Utils/invoiceDataStore';
function InvoiceTable() {
	const {allInvoices}= UseInVoiceStore()
	const [invoiceDetailsDrawerOpen,setInvoiceDetailsDrawerOpen] = useState(false)
	const [activeInvoiceIndex,setActiveInvoiceIndex] = useState(0)

	const handleInvoiceDetailsDrawer = (val) =>{
		if(!invoiceDetailsDrawerOpen)
		{
			setActiveInvoiceIndex(val)
		}
		setInvoiceDetailsDrawerOpen(!invoiceDetailsDrawerOpen)
	}

	return (
		<div className="invoiceTable-container d-flex justify-content-start mt-50">
			<InvoiceDetailsDrawer
				open={invoiceDetailsDrawerOpen}
				toggleDrawer={handleInvoiceDetailsDrawer}
				invoiceDetailsDrawerData={allInvoices[activeInvoiceIndex]}
				index={activeInvoiceIndex}
			/>
			<table className="invoiceTable-table">
				<thead className="invoiceTable-table-head">
					<tr className="invoice-table-row">
						<th className="font_16_600"></th>
						<th className="font_16_600 d-flex justify-content-left">Name</th>
						<th className="font_16_600 d-flex justify-content-left">Date</th>
						<th className="font_16_600 d-flex justify-content-left" >Client</th>
						<th className="font_16_600 d-flex justify-content-left">Price</th>
						<th className="font_16_600 d-flex justify-content-left" >Status</th>
						<th className="font_16_600 d-flex justify-content-left" >
							<p>View</p>
						</th>

					</tr>
				</thead>
				<tbody >
					{
						allInvoices.map((currentInvoice, rowIndex) => {
							return (
								<tr
									key={"row" + rowIndex}
									className="invoice-table-row mt-20">
									<td className="d-flex justify-content-end align-items-center">
										<div className="mr-10">
											<ArticleOutlinedIcon />
										</div>
									</td>
									<td className="d-flex justify-content-left align-items-center">
										<p className="font_14_600 invoice-table-row-title">Name: </p>
										<p className="font_14_400">{" "}{currentInvoice.name}</p>
									</td>
									<td className="d-flex justify-content-left align-items-center">
										<p className="font_14_400">
											{currentInvoice.date["$D"]}/{currentInvoice.date["$M"]}/{currentInvoice.date["$y"]}
										</p>
									</td>
									<td className="d-flex justify-content-left align-items-center">
										<p className="font_14_400">
											{currentInvoice.client}
										</p>
									</td>
									<td className=" d-flex justify-content-left align-items-center">
										<p className="font_14_400">
											Rs {currentInvoice.price}
										</p>
									</td>
									<td className="font_14_400 d-flex justify-content-left align-items-center">
										<p className="orange-chip">pending</p>
									</td>
									<td className="font_14_400 d-flex justify-content-center align-items-center">
									<Button 
									onClick= {() =>{
										handleInvoiceDetailsDrawer(rowIndex)
									}}
									variant="outlined" 
									size="small">
										Details
									</Button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default InvoiceTable;