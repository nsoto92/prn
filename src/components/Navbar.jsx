import { useState } from "react";
import Logo from "./Logo";
import Hamburger from './icons/Hamburger'
import Close from './icons/Close'
import NavLinks from './NavLinks'
import "./styles/navbar.css";

export default function Navbar() {
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
        {/* Mobile Display - Toggle Menu */}
          {!isOpen ? (
            <Hamburger expand={expand} />
          ) : (
            <Close expand={expand} />
          )}
        </div>
        {/* Web Display */}
        <NavLinks view="desktop"/>
      </nav>
      {/* Mobile menu toggleable list */}
      {isOpen ? (
        <NavLinks view="mobile"/>
      ) : null}
    </>
  );
}
