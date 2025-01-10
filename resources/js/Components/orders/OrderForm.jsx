import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, updateOrder } from "../../Redux/slices/ordersSlice";

const OrderForm = ({ order = null }) => {
  const [customerId, setCustomerId] = useState(order ? order.customer_id : "");
  const [total, setTotal] = useState(order ? order.total : "");
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = { customer_id: customerId, total };

    if (order) {
      dispatch(updateOrder({ id: order.id, ...orderData }));
    } else {
      dispatch(createOrder(orderData));
    }

    setCustomerId("");
    setTotal("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{order ? "Modifier une Commande" : "Créer une Commande"}</h2>
      <select
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        required
      >
        <option value="">Sélectionner un client</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        required
      />
      <button type="submit">{order ? "Mettre à jour" : "Ajouter"}</button>
    </form>
  );
};

export default OrderForm;
