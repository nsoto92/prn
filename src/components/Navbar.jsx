import { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./icons/Hamburger"
import Close from "./icons/Close"
import NavLinks from "./NavLinks"
import "./styles/navbar.css";

export default function Navbar() {
  // Open/Close state for mobile nav links
  const [isOpen, setOpen] = useState(false);
  // Toggle open/close
  const expand = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navBar">
        <Logo />
        <div className="navBtnLyt">
          {/* Change icons on menu open/close */}
          {!isOpen ? (
            <Hamburger expand={expand} />
          ) : (
            <Close expand={expand} />
          )}
        </div>
        {/* Desktop nav links */}
        <NavLinks view="desktop"/>
      </nav>
      {/* Mobile nav links */}
      {isOpen ? (
        <NavLinks view="mobile"/>
      ) : null}
    </>
  );
}
