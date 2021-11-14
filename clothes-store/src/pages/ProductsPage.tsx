import React from "react";
import { Outlet } from "react-router-dom";
const ProductsPage = () => {
  return (
    <div>
      Products Page
      <Outlet />
    </div>
  );
};

export default ProductsPage;
