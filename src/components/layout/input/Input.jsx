import "./Input.css"

const InputComponent = ({ label, type, value, onChange, placeholder, required }) => {
    return (
        <label className="ui-control-input-label">
            {label}
            <div className="ui-control-input-container">
                <input
                    className="ui-control-input"
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        </label>
    );
}

export default InputComponent;