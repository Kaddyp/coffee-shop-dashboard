import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from "./pages/routes";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Employees from "./pages/Employees";
import Products from "./pages/Products";
import NoMatch from "./pages/NoMatch";
//import Nav from './nav';
import Layout from './component/mainLayout/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>        
        <Routes>
            <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.ORDERS} element={<Orders />} />
            <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.NoMatch} element={<NoMatch />} />           
        </Routes>      
      </Layout>    
    </BrowserRouter>
  );
}

export default App;
