import './App.css';
import './common.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ProvideInvoiceStore } from './Utils/invoiceDataStore';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <ProvideInvoiceStore>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
          </Routes>
          </ProvideInvoiceStore>
       </Router>
    </div>
  );
}

export default App;
