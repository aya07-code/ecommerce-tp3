import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer, updateCustomer } from "../../Redux/slices/customersSlice";

const CustomerForm = ({ customer = null }) => {
  const [name, setName] = useState(customer ? customer.name : "");
  const [email, setEmail] = useState(customer ? customer.email : "");
  const [phone, setPhone] = useState(customer ? customer.phone : "");
  const [address, setAddress] = useState(customer ? customer.address : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const customerData = { name, email, phone, address };

    if (customer) {
      dispatch(updateCustomer({ id: customer.id, ...customerData }));
    } else {
      dispatch(createCustomer(customerData));
    }

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{customer ? "Modifier un Client" : "Ajouter un Client"}</h2>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Adresse"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <button type="submit">{customer ? "Mettre à jour" : "Ajouter"}</button>
    </form>
  );
};

export default CustomerForm;
