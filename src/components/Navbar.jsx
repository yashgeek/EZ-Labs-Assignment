import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import menuOpenImg from "../assets/menu-open.png";
import menuCloseImg from "../assets/menu-close.svg";
import logo from "../assets/logo.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about-team", label: "Their Stories" },
  { to: "/portfolio", label: "Varnan" },
];

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block text-sm tracking-wide transition-colors ${
        isActive
          ? "text-[#F47A43] font-semibold"
          : "text-gray-800 hover:text-[#F47A43]"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // ✅ Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="w-full bg-transparent z-50 relative">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* LEFT: Logo */}
        <Link to="/" onClick={close}>
          <img
            src={logo}
            alt="V Films Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* RIGHT: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={close}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={close}
            className="ml-3 inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "#F47A43" }}
          >
            Let’s Talk
          </Link>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="md:hidden relative inline-flex items-center justify-center p-2 rounded focus:outline-none"
        >
          <img
            src={menuOpenImg}
            alt="open menu"
            className={`w-6 h-6 transition-opacity duration-200 ${
              open ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
          <img
            src={menuCloseImg}
            alt="close menu"
            className={`w-6 h-6 absolute transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        </button>
      </div>

      {/* ✅ MOBILE MENU (works perfectly now) */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg w-full absolute top-full left-0 z-40">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((L) => (
              <NavLink key={L.to} to={L.to} onClick={close}>
                {L.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={close}
              className="mt-2 inline-block text-center px-4 py-2 rounded-full text-white text-sm font-semibold"
              style={{ background: "#F47A43" }}
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
