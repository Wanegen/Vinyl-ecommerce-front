import Layout from "./layouts/layout";
import Vinyls from "./pages/vinyls";
import VinylDetail from "./pages/vinylDetail";
import Orders from "./pages/orders";
import CurrentOrder from "./pages/currentOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Vinyls />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/vinyls/:id" element={<VinylDetail />} />
          <Route path="/orders/current" element={<CurrentOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
