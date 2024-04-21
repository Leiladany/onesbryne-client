import "./Link.css";
import { Link } from "react-router-dom";

const LinkControl = ({ to, children, className, size }) => {

    const handleLinkClass = () => {
        let classes = [className ? `ui-control-link-${className}` : "", size ? `ui-control-link-size-${size}` : ""].filter(Boolean).join(" ");
        return classes;
    };

    return (
        <Link to={to} className={handleLinkClass()}>
            {children}
        </Link>
    );
}

export default LinkControl;
