import "./styles/nav-btn.css"

export default function NavBtn(props) {
    // Add "/" before links other than home
    const pathFormat = () => props.link[0] !== "/" ? "/" + props.link : props.link
    return (
        <a className="links" href={props.link}>
            <p 
            className= "navBtns">
            {props.title}
            </p>
            {/* Add line below button for active page */}
            <div className={`${window.location.pathname === pathFormat()  && "currentPage"}`}></div>
        </a>
    )
}
