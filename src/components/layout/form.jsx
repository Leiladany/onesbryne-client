/* eslint-disable react/prop-types */
import { Inputs } from './inputs';
import { LinkWithLine } from './link-with-line';
import { Button, Stack, Typography } from '@mui/joy';

export const Form = ({
  type,
  controls,
  handleSubmit,
  buttonText,
  isLoading,
}) => {
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
        <Button type="submit" loading={isLoading}>
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
            <Typography level='title-sm'>Já tem uma conta?</Typography>
            <LinkWithLine
              to="/login"
              children="Clique Aqui"
              level="title-sm"
            />
          </>
        )}

        {type === 'login' && (
          <>
            <Typography level='title-sm'>Ainda não tem conta?</Typography>
            <LinkWithLine
              to="/signup"
              children="Clique Aqui"
              level="title-sm"
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};
