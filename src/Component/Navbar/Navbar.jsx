import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Navbar.css";
import LogoLight from "./../../assets/LogoLight.png";
import LogoDark from "./../../assets/LogoDark.png";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "My Projects" },
    { id: "clients", label: "Clients" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className={`fixed top-0 w-full z-50 backdrop-blur transition-all ${
          isScrolled
            ? "bg-white/90 dark:bg-[#121929]/90 shadow-sm border-b border-gray-200/60 dark:border-gray-700/60"
            : "bg-white dark:bg-[#121929]"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={LogoLight} className="w-12 dark:hidden" />
            <img src={LogoDark} className="w-12 hidden dark:block" />
          </Link>

          <ul className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={`/${link.id}`}
                className="relative px-1 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors"
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.label}</span>

                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <label className="theme-switch">
              <input
                type="checkbox"
                className="theme-switch__checkbox sr-only"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="theme-switch__container">
                <label className="theme-switch">
                  <input
                    type="checkbox"
                    className="theme-switch__checkbox sr-only"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <div className="theme-switch__container">
                    <div className="theme-switch__clouds" />
                    <div className="theme-switch__stars-container" />
                    <div className="theme-switch__circle-container">
                      <div className="theme-switch__sun-moon-container">
                        <div className="theme-switch__moon">
                          <div className="theme-switch__spot" />
                          <div className="theme-switch__spot" />
                          <div className="theme-switch__spot" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </label>

            <motion.button
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Toggle menu</span>

              <motion.span
                className="absolute w-6 h-[2px] bg-current rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 0 : -6,
                }}
                transition={{ duration: 0.25 }}
              />

              <motion.span
                className="absolute w-6 h-[2px] bg-current rounded-full"
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />

              <motion.span
                className="absolute w-6 h-[2px] bg-current rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? 0 : 6,
                }}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden bg-white/95 dark:bg-[#121929]/95 backdrop-blur border-t border-gray-200/60 dark:border-gray-700/60"
            >
              <ul className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={`/${link.id}`}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition
                      ${
                        isActive
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-16" />
    </>
  );
}
