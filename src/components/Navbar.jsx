import React, { useState } from "react";
import Logo from "./Logo";
import "../styles/navbar.css";

export default function Navbar() {
  const paths = [
    "Home",
    "Patients",
    "Caregivers",
    "Nurses",
    "Healthcare Providers",
    "About",
    "Contact",
  ];
  // State for mobile menu
  const [isOpen, setOpen] = useState(false);
  // Toggle open/close for mobile menu
  const expand = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="navBar">
        <Logo />
        <div className="navBtnLyt">
          {!isOpen ? (
            <svg className="icon" viewBox="0 0 24 24" onClick={expand}>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          ) : (
            <svg className="icon" viewBox="0 0 24 24" onClick={expand}>
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          )}
        </div>
        <div className="test">
          <h1>YO</h1>
        </div>
      </nav>
      {isOpen ? (
        <div className="mobileNav">
          {paths.map((p, i) => {
            return (
              <p className="navBtns" key={i}>
                {p}
              </p>
            );
          })}
          <button className="button">Sign Up / Log In</button>
        </div>
      ) : null}
    </>
  );
}
