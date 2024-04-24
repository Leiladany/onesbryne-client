import "./Button.css"

const ButtonComponent = ({ type, onClick, disabled, children }) => {
    return (
        <button type={type} onClick={onClick} className={`ui-control-button-form`} disabled={disabled}>
            {children}
        </button>
    );
}

export default ButtonComponent;