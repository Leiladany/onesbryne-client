/* eslint-disable react/prop-types */
import "./Form.css";
import InputComponent from "../input/Input";
import SelectComponent from "../select/Select";
import ButtonComponent from "../button/Button";
import LinkComponent from "../link/Link"

const FormComponent = ({ type, controls, handleSubmit, buttonText, error }) => {
  return (
    <form>
      <div className="form-inputs-container">
        {controls.map((control, index) => (
          <label key={index} className="form-label">
            {control.label}

            <div className="form-input-container">
              {control.type === "dropdown" ? (
                <SelectComponent
                  type={control.type}
                  value={control.value}
                  onChange={control.onChange}
                  required={control.required}
                  options={control.options}
                />

              ) : (
                <InputComponent
                  type={control.type}
                  value={control.value}
                  onChange={control.onChange}
                  placeholder={control.placeholder}
                  required={control.required}
                />
              )}

              {control.icon && (
                <div onClick={control.onIconClick} className="toggle-password-icon">
                  {control.iconSrc}
                </div>
              )}
            </div>
          </label>
        ))}
      </div>

      {/* Submit button */}
      <div>
        <ButtonComponent
          type="submit"
          onCLick={handleSubmit}
          disabled={false}
          children={buttonText}
        />
      </div>

      {/* Handler for error */}
      <div>{error && <p>{error}</p>}</div>

      {/* Handler if you have an account */}
      {type === "signup" && (
        <div className="form-question-container">
          <p>Já tem uma conta?</p>
          <LinkComponent to="/login" children="Clique Aqui" className="line" />
        </div>
      )}

      {/* Handler if you don't have an account */}
      {type === "login" && (
        <div className="form-question-container">
          <p>Ainda não tem conta?</p>
          <LinkComponent to="/signup" children="Clique Aqui" className="line" />
        </div>
      )}
    </form>
  );
};

export default FormComponent;
