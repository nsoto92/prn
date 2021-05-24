import './styles/button.css'

export default function Button(props) {
    return (
        <button className={props.type}>{props.label}</button>
    )
}
