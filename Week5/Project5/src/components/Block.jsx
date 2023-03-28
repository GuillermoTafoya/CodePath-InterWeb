import "./Block.scss";
export default function Block(props) {
return (
    <div className={`block ${props.className}`}>
        {props.children}
    </div>
);
}