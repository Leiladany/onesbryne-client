/* eslint-disable react/no-unescaped-entities */
import { NavbarLinks } from './navbar-links';
import { Link } from 'react-router-dom';
import { Divider, Stack, Typography } from '@mui/joy';

export const Navbar = () => {
  return (
    <Stack component="nav">
      <Stack
        sx={{
          py: 1,
          flexDirection: 'row',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          zIndex: '1000',
        }}
      >
        <Stack component="section" />

        <Stack component="section" sx={{ alignItems: 'center' }}>
          <Link to="/" underline="none">
            <Typography
              level="h1"
              sx={{
                fontFamily: 'italiana, sans-serif',
                fontWeight: 'lighter',
                fontSize: { xs: '32px', lg: '64px' },
                textAlign: 'center',
              }}
            >
              ONESBRYNE
            </Typography>
          </Link>
        </Stack>

        <NavbarLinks />
      </Stack>

      <Divider sx={{ mx: { xs: 2, lg: 10 } }} />
    </Stack>
  );
};
