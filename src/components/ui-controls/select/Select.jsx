import "./Select.css"

const SelectControl = ({ type, value, onChange, required, options }) => {
    return (
        <select
        className="controls-select"
            type={type}
            value={value}
            onChange={onChange}
            required={required}
        >
            <option value="">Select...</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default SelectControl;