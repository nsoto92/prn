import NavBtn from "./NavBtn";
import Button from "./Button";
import "./styles/nav-links.css"

export default function NavLinks(props) {
  const pages = [
    "Home",
    "Patients",
    "Caregivers",
    "Nurses",
    "Healthcare Providers",
    "About",
    "Contact",
  ];

  // New array for links replacing "Home" with "/" & spaces with dashes - For line below active page
   const links = pages.map(e => 
     e === "Home" ? e.replace("Home", "/") : e.replace(" ", "-")
   )

  // New array removing "Home" for Desktop version
   const webArr = pages.map(m => m).splice(1,pages.length - 1)
    
   return(
      <>
      {/* Check for version to return. Only accept "mobile" & "web"*/}
      {props.view === "mobile" ?
        (
          <div className="mobileMenu">
            {pages.map((p, i) => {
              return ( 
                <NavBtn 
                key={i} 
                title={p} 
                link={links[i]}               
                />
              )
            })}
            <Button type="mobile-btn" label="Sign Up / Log In" />
          </div>
        ) : null}
        
      {props.view === "desktop" ?
        (
          <div className="desktopMenu">
            {webArr.map((p, i) => {
              return (
                <NavBtn 
                key={i} 
                title={p} 
                link={links[i + 1]}  
                />
              )
            })}
           <Button type="web-btn" label="Sign Up / Log In" />
        </div>
        ) : null}
      </>
    )
}
