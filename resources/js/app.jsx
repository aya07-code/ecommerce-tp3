import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerList from "./Components/customers/CustomerList";
import CustomerForm from "./Components/customers/CustomerForm";
import Products from "./Components/products/Products";
import OrderList from "./Components/orders/OrderList";
import OrderForm from "./Components/orders/OrderForm";
import Cart from "./Components/orders/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/customers/add" element={<CustomerForm />} />
      <Route path="/customers/edit/:id" element={<CustomerForm />} />
      <Route path="/orders" element={<OrderList />} />
      <Route path="/orders/add" element={<OrderForm />} />
      <Route path="/orders/edit/:id" element={<OrderForm />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;

