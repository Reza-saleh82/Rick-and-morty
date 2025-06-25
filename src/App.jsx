import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import ProductProvider from "./context/contextBank";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import Product from "./pages/Product/Product.jsx";
import ShowProduct from "./pages/Product/ShowProduct/ShowProduct.jsx";
import Like from "./pages/Like/Like.jsx";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Product />}>
            <Route index element={<ShowProduct />} />
          </Route>
          <Route path="like" element={<Like />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;