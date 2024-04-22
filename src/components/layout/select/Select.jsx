import "./Select.css"

const SelectComponent = ({ type, value, onChange, required, options }) => {
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

export default SelectComponent;