import { Link } from "react-router-dom";
import "./FormComponent.css";
import React, { useState } from "react";
import eyeIcon1 from "/eye1.png";
import eyeIcon2 from "/eye2.png";

const FormComponent = ({ type, inputs, handleSubmit, buttonText }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-inputs-container">
        {inputs.map((input, index) => (
          <label key={index} className="form-label">
            {input.label}

            <div className="form-input-container">
              <input
                type={input.type}
                value={input.value}
                onChange={input.onChange}
                placeholder={input.placeholder}
                required={input.required}
                className="form-input"
              />

              {input.icon && (
                <img
                  src={input.iconSrc}
                  alt="show password"
                  onClick={input.onIconClick}
                  className="toggle-password-icon"
                />
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
