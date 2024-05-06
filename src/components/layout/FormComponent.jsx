/* eslint-disable react/prop-types */
import InputComponent from './input/Input';
import SelectComponent from './select/Select';
import Button from './ButtonComponent';
import Link from './LinkComponentWithLine';
import { Stack, Typography } from '@mui/joy';

const FormComponent = ({ type, controls, handleSubmit, buttonText, error }) => {
  return (
    <Stack component="form" sx={{ width: { xs: '80%', md: '600px' }, gap: 4 }}>
      <Stack component="section" sx={{ gap: 4 }}>
        {controls.map((control, index) => (
          <Stack
            key={index}
            sx={{ alignItems: 'center', gap: 4, position: 'relative' }}
          >
            {control.label}

            <Stack sx={{ width: '100%' }}>
              {control.type === 'dropdown' ? (
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

              {/* Eye icon */}
              {control.icon && (
                <Stack
                  onClick={control.onIconClick}
                  sx={{
                    cursor: 'pointer',
                    position: 'absolute',
                    right: 0,
                  }}
                >
                  {control.iconSrc}
                </Stack>
              )}
            </Stack>
          </Stack>
        ))}
      </Stack>

      {/* Submit button */}
      <Stack component="section" sx={{ alignItems: 'center', gap: 2 }}>
        <Button
          type="submit"
          disabled={false}
          onClick={handleSubmit}
          children={buttonText}
        />

        {/* Handler for error */}
        {error && (
          <Stack sx={{ alignItems: 'center' }}>
            <p>{error}</p>
          </Stack>
        )}
      </Stack>

      <Stack
        component="section"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        {/* Handler if you have an account */}
        {type === 'signup' && (
          <>
            <Typography sx={{ color: 'common.white' }}>
              Já tem uma conta?
            </Typography>
            <Link
              to="/login"
              children="Clique Aqui"
              className="line"
            />
          </>
        )}

        {/* Handler if you don't have an account */}
        {type === 'login' && (
          <>
            <Typography sx={{ color: 'common.white' }}>
              Ainda não tem conta?
            </Typography>
            <Link
              to="/signup"
              children="Clique Aqui"
              className="line"
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default FormComponent;
