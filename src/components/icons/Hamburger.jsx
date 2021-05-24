import "../styles/icon.css"

export default function Hamburger(props) {
    return (
        <svg className="icon" viewBox="0 0 24 24" onClick={props.expand}>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
    )
}
