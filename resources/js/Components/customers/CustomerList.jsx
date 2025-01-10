import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers, deleteCustomer } from "../../Redux/slices/customersSlice";

const CustomerList = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce client ?")) {
      dispatch(deleteCustomer(id));
    }
  };

  return (
    <div>
      <h2>Liste des Clients</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
            <button onClick={() => handleDelete(customer.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
