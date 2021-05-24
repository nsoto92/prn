import './styles/nav-btn.css'

export default function NavBtn(props) {
    // Add '/' before links other than home
    const pathFormat = () => props.link[0] !== '/' ? '/' + props.link : props.link
    return (
        <a className="navLinks" href={props.link}>
            <p 
            className= "navBtns">
            {props.title}
            </p>
            {/* Add underscore to button when on that page */}
            <div className={`${window.location.pathname === pathFormat()  && "currentPage"}`}></div>
        </a>
    )
}
