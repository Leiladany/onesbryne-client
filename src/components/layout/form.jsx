/* eslint-disable react/prop-types */
import { Inputs } from './inputs';
import { LinkWithLine } from './link-with-line';
import { Button, Stack, Typography } from '@mui/joy';

export const Form = ({ type, controls, handleSubmit, buttonText }) => {
  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: { xs: '80%', md: '600px' }, gap: 4 }}
    >
      <Stack component="section" sx={{ gap: 8 }}>
        {controls.map((control, index) => (
          <Stack
            key={index}
            sx={{ alignItems: 'center', gap: 2, position: 'relative' }}
          >
            {control.label}

            <Stack sx={{ width: '100%' }}>
              <Inputs
                type={control.type}
                value={control.value}
                setValue={control.setValue}
                placeholder={control.placeholder}
                required={control.required}
                onIconClick={control.onIconClick}
                iconSrc={control.iconSrc}
                options={control.options}
              />
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Stack component="section" sx={{ alignItems: 'center', gap: 2 }}>
        <Button type="submit" disabled={false}>
          {buttonText}
        </Button>
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
        {type === 'signup' && (
          <>
            <Typography sx={{ color: 'common.white' }}>
              Já tem uma conta?
            </Typography>
            <LinkWithLine to="/login" children="Clique Aqui" className="line" />
          </>
        )}

        {type === 'login' && (
          <>
            <Typography sx={{ color: 'common.white' }}>
              Ainda não tem conta?
            </Typography>
            <LinkWithLine
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
