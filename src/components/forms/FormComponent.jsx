/* eslint-disable react/prop-types */
import "./FormComponent.css";
import InputControl from "../ui-controls/input/Input";
import SelectControl from "../ui-controls/select/Select";
import ButtonForm from "../ui-controls/button/ButtonForm";
import LinkControl from "../ui-controls/link/Link"

const FormComponent = ({ type, controls, handleSubmit, buttonText, error }) => {
  return (
    <form>
      <div className="form-inputs-container">
        {controls.map((control, index) => (
          <label key={index} className="form-label">
            {control.label}

            <div className="form-input-container">
              {control.type === "dropdown" ? (
                <SelectControl
                  type={control.type}
                  value={control.value}
                  onChange={control.onChange}
                  required={control.required}
                  options={control.options}
                />

              ) : (
                <InputControl
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
        <ButtonForm
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
          <LinkControl to="/login" children="Clique Aqui" className="line" />
        </div>
      )}

      {/* Handler if you don't have an account */}
      {type === "login" && (
        <div className="form-question-container">
          <p>Ainda não tem conta?</p>
          <LinkControl to="/signup" children="Clique Aqui" className="line" />
        </div>
      )}
    </form>
  );
};

export default FormComponent;
