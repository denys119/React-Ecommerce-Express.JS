import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import pages
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import ProductsLayout from "./pages/ProductsLayout";
//redux
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const { getProducts } = bindActionCreators(actionCreators, dispatch);
  const { products } = useSelector((state: State) => state.products);

  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/products/123">Product</Link>
          <Link to="/products/newProduct">New Product</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />}>
          <Route index element={<ProductsLayout />} />
          <Route path=":productId" element={<ProductPage />} />
          <Route path="newProduct" element={<CreateProductPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
