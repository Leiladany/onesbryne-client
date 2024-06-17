import { Link } from '@mui/joy';
import { Link as LinkReact } from 'react-router-dom';

export const LinkWithLine = ({
  to,
  children,
  level,
  onClick,
  disabled,
  isActive,
  sx,
}) => {
  return (
    <Link
      component={LinkReact}
      to={to}
      onClick={onClick}
      color="neutral"
      level={level}
      disabled={disabled}
      underline="none"
      sx={{ ...style, ...sx, ...(isActive ? activeStyle : notActiveStyle) }}
    >
      {children}
    </Link>
  );
};

const style = {
  display: 'flex',
  border: 'none',
  width: 'fit-content',
  position: 'relative',
  overflow: 'hidden',
  transition: '0.3s',
  color: 'inherit',
};

const activeStyle = {
  color: 'neutral.100',
  borderBottom: '1px solid',
};

const notActiveStyle = {
  '&:before': {
    backgroundColor: 'gray',
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '1px',
    transition: 'width 0.5s',
  },
  '&:hover:before': {
    width: '100%',
  },
};
