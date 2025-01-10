import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/produits">Produits</NavLink></li>
          <li><NavLink to="/customers">Clients</NavLink></li>
          <li><NavLink to="/orders">Commandes</NavLink></li>
          <li><NavLink to="/cart">Panier</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;