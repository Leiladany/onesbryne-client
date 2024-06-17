import { Divider, Stack } from '@mui/joy';
import { LinkWithLine } from '../layout/link-with-line';
import { types } from '../utils/arrays';

export const NavbarClothes = ({ typeActive }) => {
  return (
    <Stack component="nav">
      <Stack
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          py: 1,
          zIndex: 10,
        }}
      >
        {types.map((type, index) => {
          return (
            <LinkWithLine
              key={index}
              to={`/clothes/${type.type.toLowerCase()}`}
              isActive={typeActive?.toLowerCase() === type?.type.toLowerCase()}
              sx={{ color: 'neutral.600' }}
            >
              {type.type}
            </LinkWithLine>
          );
        })}
      </Stack>
      <Divider sx={{ mx: { xs: 2, lg: 10 } }} />
    </Stack>
  );
};
