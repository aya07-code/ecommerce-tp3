import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, deleteOrder } from "../../Redux/slices/ordersSlice";

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette commande ?")) {
      dispatch(deleteOrder(id));
    }
  };

  return (
    <div>
      <h2>Liste des Commandes</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Commande #{order.id} - {order.total}€
            <button onClick={() => handleDelete(order.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
