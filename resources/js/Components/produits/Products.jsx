import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../Redux/slices/productsSlice";
import axios from "../axios";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      dispatch(setProducts(response.data));
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
