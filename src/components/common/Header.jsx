import React, { useState } from "react";
import "./Header.css"; // Import the CSS file
import { LinkData } from "../assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { SiChatbot } from "react-icons/si";
import logo from "../assets/images/logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-gray-900 py-4 text-white sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo flex items-center gap-6 text-blue-500 font-bold">
            <img src={logo} className="w-27.5 h-10" alt="Logo" />
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary nav-link active" : "nav-link"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flex items-center gap-5">
            <Link to="/sign-up" className="auth-button">
              SignUp
            </Link>
            <Link to="/sign-in" className="auth-button">
              SignIn
            </Link>
            <Link to="/chatbot">
              <SiChatbot size={25} />
            </Link>
            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
