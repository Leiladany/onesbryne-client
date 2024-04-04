import "./FormComponent.css";
import { Link } from "react-router-dom";

const FormComponent = ({ type, inputs, handleSubmit, buttonText, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inputs-container">
        {inputs.map((input, index) => (
          <label key={index} className="form-label">
            {input.label}

            <div className="form-input-container">
              {input.type !== "dropdown" ? (
                <input
                  type={input.type}
                  value={input.value}
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                  required={input.required}
                  className="form-input"
                />
              ) : (
                <select
                  value={input.value}
                  onChange={input.onChange}
                  required={input.required}
                  className="form-input"
                >
                  <option value="">Select...</option>
                  {input.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {input.icon && (
                <div
                  onClick={input.onIconClick}
                  className="toggle-password-icon"
                >{input.iconSrc}</div>
              )}
            </div>
          </label>
        ))}
      </div>

      <div>
        <button type="submit" className="form-button">
          {buttonText}
        </button>
      </div>

      <div>{error && <p>{error}</p>}</div>

      {type === "signup" && (
        <div className="form-question-container">
          <p>Já tem uma conta?</p>
          <Link to="/login">
            <p>Clique aqui</p>
          </Link>
        </div>
      )}

      {type === "login" && (
        <div className="form-question-container">
          <p>Ainda não tem conta?</p>
          <Link to="/signup">
            <p>Clique aqui</p>
          </Link>
        </div>
      )}
    </form>
  );
};

export default FormComponent;
