import "./Button.css"

const ButtonComponent = ({ type, onCLick, disabled, children }) => {
    return (
        <button type={type} onClick={onCLick} className={`ui-control-button-form`} disabled={disabled}>
            {children}
        </button>
    );
}

export default ButtonComponent;