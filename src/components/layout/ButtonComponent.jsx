import { Button } from '@mui/joy';

export const ButtonComponent = ({
  component = 'button',
  to = null,
  type,
  onClick,
  disabled = false,
  children,
  className,
}) => {
  return (
    <Button
      variant="plain"
      component={component}
      to={to}
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      sx={{
        color: 'common.white',
        border: '1px solid',
        borderRadius: '2px',
        borderColor: 'neutral.600',
        transition: 'ease 0.3s',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: 'common.white',
        },
      }}
    >
      {children}
    </Button>
  );
};
