import "./Link.css";
import { Link } from "react-router-dom";

const LinkComponent = ({ to, children, className, size, onClick }) => {

    const handleLinkClass = () => {
        let classes = [className ? `ui-control-link-${className}` : "", size ? `ui-control-link-size-${size}` : ""].filter(Boolean).join(" ");
        return classes;
    };

    return (
        <Link to={to} onClick={onClick} className={handleLinkClass()}>
            {children}
        </Link>
    );
}

export default LinkComponent;
