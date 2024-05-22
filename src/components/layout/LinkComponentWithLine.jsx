import { Link } from '@mui/joy';

const style = {
  color: 'common.white',
  display: 'flex',
  border: 'none',
  width: 'fit-content',
  position: 'relative',
  overflow: 'hidden',
  transition: 'color 0.3s, borderBottomColor 0.3s',
  '&:before': {
    backgroundColor: 'white',
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '1px',
    transition: 'width 0.3s',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%) scaleY(0) scaleX(0.2)',
    width: '10px',
    height: '10px',
    border: '1px solid white',
    borderLeft: 'none',
    borderTop: 'none',
    transition: 'transform 0.3s',
  },
  '&:hover:before': {
    width: '100%',
  },
  '&:hover:after': {
    transform: 'translateX(-50%) rotate(45deg) scaleY(1) scaleX(1)',
  },
};

const LinkComponentWithLine = ({
  href,
  children,
  className,
  level,
  onClick,
  disabled,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={className}
      level={level}
      disabled={disabled}
      underline="none"
      sx={style}
    >
      {children}
    </Link>
  );
};

export default LinkComponentWithLine;
