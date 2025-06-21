import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Login from "./pages/Login/Login.jsx";
import ProductProvider from "./context/contextBank";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import Product from "./pages/Product/Product.jsx";
import ShowProduct from "./pages/Product/ShowProduct/ShowProduct.jsx";
import Matn from "./pages/Product/Matn/Matn.jsx";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />}>
            <Route path="show" element={<ShowProduct />} />
            <Route path="matn" element={<Matn />} />
          </Route>
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;