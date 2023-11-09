import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  // useRef,
} from "react";
// import Axios from "axios";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const storeContext = createContext();

function useProvideAuth() {
  const [allInvoices, setAllInvoices] = useState([
    {
      name: "rat farms",
      date: dayjs(new Date()),
      client: "bill musk",
      details: [],
      price: 3000,
      status: "pending",
    }
  ])

  const handleInvoiceDetailsChange = (index, name, value) => {
    let currentInvoices = [...allInvoices]
    currentInvoices[index] = {
      ...currentInvoices[index],
      [name]: value
    }
    setAllInvoices(currentInvoices)
  }

  const addNewInvoiceToList = (newInvoice) => {
    let currentInvoices = [...allInvoices]
    currentInvoices.push(newInvoice)
    setAllInvoices(currentInvoices)
  }

  return {
    allInvoices,
    handleInvoiceDetailsChange,
    addNewInvoiceToList
  };
}

export function ProvideInvoiceStore({ children }) {
  const storeData = useProvideAuth();
  return <storeContext.Provider value={storeData}>{children}</storeContext.Provider>;
}
ProvideInvoiceStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UseInVoiceStore = () => useContext(storeContext);
