import React, { useState } from 'react'
import { Button, Drawer } from '@mui/material'
import TextInput from '../../../../CommonComponents/TextInput'
import DateSelector from '../../../../CommonComponents/DateSelector'
import NumberInput from '../../../../CommonComponents/NumberInput'
import SelectInputType from '../../../../CommonComponents/SelectInput'
import { UseInVoiceStore } from '../../../../Utils/invoiceDataStore'
import dayjs from 'dayjs'

function AddNewInvoice(props) {
    const {addNewInvoiceToList} = UseInVoiceStore()
    const [invoiceDetails, setInvoiceDetails] = useState({
        name:"",
        date:dayjs(new Date()),
        client:"",
        details:[],
        price:0,
        status:"pending",
    })

    const handleInvoiceDetailsChange = (index, name, value) => {
        let currentInvoices = { ...invoiceDetails }
        currentInvoices = {
            ...currentInvoices,
            [name]: value
        }
        setInvoiceDetails(currentInvoices)
    }

    const handleDescriptionChange = (index, name, val) => {
        let currentInvoiceDescription = { ...invoiceDetails }
        currentInvoiceDescription[name][index] = val;
        setInvoiceDetails(currentInvoiceDescription)
    }

    const addNewDescription = () => {
        let currentInvoiceDescription = { ...invoiceDetails }
        currentInvoiceDescription["details"].push("")
        setInvoiceDetails(currentInvoiceDescription)
    }

    const removeDescription = (index) => {
        let currentInvoiceDescription = { ...invoiceDetails }
        currentInvoiceDescription["details"].splice(index, 1)
        setInvoiceDetails(currentInvoiceDescription)

    }
    return (
        <Drawer
            anchor={"right"}
            open={props.open}
            onClose={props.toggleDrawer}
            PaperProps={{
                sx: { width: "40%" },
            }}
        >
            <div className="mt-50 ml-30 mr-50">
                <p className="font_24_600">Invoice Details</p>

                <div className="mt-20">
                    <p className="font_16_600">Name:</p>

                    <div className="mt-10">
                        <TextInput
                            value={invoiceDetails.name}
                            handleInputChange={handleInvoiceDetailsChange} index={props.index}
                            name={"name"}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="font_16_600">Due Date:</p>

                    <div className="mt-10">

                        <DateSelector
                            value={invoiceDetails.dueDate}
                            handleInputChange={handleInvoiceDetailsChange} index={props.index}
                            name={"date"}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="font_16_600">Client Name:</p>

                    <div className="mt-10">
                        <TextInput
                            value={invoiceDetails.client}
                            handleInputChange={handleInvoiceDetailsChange} index={props.index}
                            name={"client"}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="font_16_600">Price:</p>

                    <div className="mt-10">
                        <NumberInput
                            value={invoiceDetails.price}
                            handleInputChange={handleInvoiceDetailsChange}
                            index={props.index}
                            name={"price"}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="font_16_600">Status:</p>

                    <div className="mt-10">

                        <SelectInputType
                            value={invoiceDetails.status}
                            handleInputChange={handleInvoiceDetailsChange}
                            index={props.index}
                            name={"status"}
                            options={[
                                "paid",
                                "pending",
                                "unpaid"
                            ]}
                        />
                    </div>
                </div>


                <div className="mt-20">
                    <p className="font_16_600">Description:</p>

                    <div className="mt-10">

                        {
                            invoiceDetails.details && invoiceDetails.details.map((currentPoint, pointIndex) => {
                                return (
                                    <div
                                        key={"point" + pointIndex}
                                        className="d-flex mt-10">

                                        <div className='flex-grow-1'>
                                            <TextInput
                                                value={invoiceDetails.details[pointIndex]}
                                                handleInputChange={handleDescriptionChange} 
                                                index={pointIndex}
                                                name={"details"}
                                            />
                                        </div>

                                        <Button
                                            className="ml-20"
                                            onClick={() => {
                                                removeDescription(pointIndex)
                                            }}
                                            variant='outlined' size="small">
                                            Remove
                                        </Button>
                                    </div>
                                )
                            })
                        }
                        <Button
                            className="mt-20"
                            onClick={() => {
                                addNewDescription()
                            }}
                            variant={"outlined"} size="small">
                            Add new point +
                        </Button>

                    </div>
                </div>
                

                <div className="d-flex justify-content-end align-items-center mt-20">
                            <Button
                            onClick={() =>{
                                addNewInvoiceToList(invoiceDetails)
                            }}
                            variant="contained"
                            size="large"
                            >
                                Save
                            </Button>
                </div>
            </div>
        </Drawer>
    )
}

export default AddNewInvoice