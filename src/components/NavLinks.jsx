import { useContext } from "react";
import { NavContext } from "../NavContext";
import NavBtn from "./NavBtn";
import Button from "./Button";
import './styles/nav-links.css'

export default function NavLinks(props) {
    const { paths, values, webArr } = useContext(NavContext);
    return(
      <>
      {/* Check for version to return. Only accepted versions are 'mobile' & 'web' */}
      {props.view === "mobile" ?
        (
        <div className="mobileMenu">
          {paths.map((p, i) => {
          return <NavBtn key={i} title={p} link={values[i]} />;
          })}
          <Button type="mobile-btn" label="Sign Up / Log In" />
        </div>
        ) : null}
        {props.view === 'desktop' ?
        (
        <div className="desktopMenu">
            {webArr.map((p, i) => {
            return <NavBtn key={i} title={p} link={values[i + 1]} />;
            })}
           <Button type="web-btn" label="Sign Up / Log In" />
        </div>
        ) : null}
      </>
    )
}
