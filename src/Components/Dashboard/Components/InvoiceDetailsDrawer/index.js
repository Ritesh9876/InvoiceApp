import React, { useState, useEffect } from 'react'
import { Button, Drawer } from '@mui/material'
import TextInput from '../../../../CommonComponents/TextInput'
import DateSelector from '../../../../CommonComponents/DateSelector'
import NumberInput from '../../../../CommonComponents/NumberInput'
import SelectInputType from '../../../../CommonComponents/SelectInput'
import { UseInVoiceStore } from '../../../../Utils/invoiceDataStore'

function InvoiceDetailsDrawer(props) {
    const {handleInvoiceDetailsChange} = UseInVoiceStore
    const [invoiceDescription, setInvoiceDescription] = useState([])

    useEffect(() => {
        setInvoiceDescription(props.invoiceDetailsDrawerData.details)
    }, [props.invoiceDetailsDrawerData])

   
    const handleDescriptionChange = (index, name, val) => {
        let currentInvoiceDescription = [...invoiceDescription]
        currentInvoiceDescription[index] = val;
        setInvoiceDescription(currentInvoiceDescription)
        handleInvoiceDetailsChange(props.index,"details",currentInvoiceDescription)
    }

    const addNewDescription = () => {
        let currentInvoiceDescription = [...invoiceDescription]
        currentInvoiceDescription.push("")
        setInvoiceDescription(currentInvoiceDescription)
        handleInvoiceDetailsChange(props.index,"details",currentInvoiceDescription)
    }

    const removeDescription = (index) => {
        let currentInvoiceDescription = [...invoiceDescription]
        currentInvoiceDescription.splice(index, 1)
        setInvoiceDescription(currentInvoiceDescription)
        handleInvoiceDetailsChange(props.index,"details",currentInvoiceDescription)
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
                            value={props.invoiceDetailsDrawerData.name}
                            handleInputChange={handleInvoiceDetailsChange} index={props.index}
                            name={"name"}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="font_16_600">Due Date:</p>

                    <div className="mt-10">

                        <DateSelector
                            value={props.invoiceDetailsDrawerData.dueDate}
                            handleInputChange={handleInvoiceDetailsChange} index={props.index}
                            name={"date"}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="font_16_600">Client Name:</p>

                    <div className="mt-10">
                        <TextInput
                            value={props.invoiceDetailsDrawerData.client}
                            handleInputChange={handleInvoiceDetailsChange} index={props.index}
                            name={"client"}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="font_16_600">Price:</p>

                    <div className="mt-10">
                        <NumberInput
                            value={props.invoiceDetailsDrawerData.price}
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
                            value={props.invoiceDetailsDrawerData.status}
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
                            invoiceDescription && invoiceDescription.map((currentPoint, pointIndex) => {
                                return (
                                    <div
                                        key={"point" + pointIndex}
                                        className="d-flex mt-10">
                                        
                                        <div className='flex-grow-1'>
                                        <TextInput
                                            value={invoiceDescription[pointIndex]}
                                            handleInputChange={handleDescriptionChange} index={pointIndex}
                                            name={"client"}
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

            </div>
        </Drawer>
    )
}

export default InvoiceDetailsDrawer