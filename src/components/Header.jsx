import React, {useState} from "react";
import { useTheme } from "../hooks/ThemeContext";
import { useCart } from "../hooks/CartContext";
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";

import 
logo from "../assets/Infnet-Logo.png"

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from "reactstrap"
  

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { theme, toggleTheme } = useTheme();
    
    const {cart, dispatch } = useCart();
    console.log(cart);

    return (
    <>
    <Navbar color={theme} expand="md">
        <NavbarBrand>
        <img src={logo} width="50px;" style={{paddingRight: "5px"}}/>
        MIT Full Stack 2025
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/users">
                        Users
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/feedback">
                        Feedback
                    </NavLink>
                </NavItem>
            </Nav>
            <NavbarText onClick={toggleTheme}>{theme === 'dark' ? <FaSun/>:<FaMoon/>}</NavbarText>
            <NavbarText><FaShoppingCart></FaShoppingCart>{cart.length}</NavbarText>
        </Collapse>
    </Navbar>
    </>
    );
}


export default Header;