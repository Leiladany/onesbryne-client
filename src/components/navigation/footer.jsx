import { Link } from 'react-router-dom';
import { Stack, Typography, Divider } from '@mui/joy';
import { LinkWithLine } from '../layout/link-with-line';

export const Footer = () => {
  return (
    <Stack component="footer">
      <Divider sx={{ mx: { xs: 2, md: 10 } }} />

      <Stack
        sx={{
          py: 2,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          zIndex: '1000',
          gap: { xs: 2, md: 0 },
        }}
      >
        <Stack
          component="section"
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        />

        <Stack
          component="section"
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 1,
            gridColumn: { xs: '1', md: '2' },
            gridRow: { xs: '2', md: '1' },
          }}
        >
          <Typography
            level="body-sm"
            sx={{
              fontWeight: 'lighter',
            }}
          >
            Copyright© 2024
          </Typography>

          <Typography
            level="body-sm"
            sx={{
              fontFamily: 'italiana, sans-serif',
              fontWeight: 'lighter',
            }}
          >
            ONESBRYNE
          </Typography>
        </Stack>

        <Stack
          component="section"
          sx={{
            pr: { xs: 0, md: 10 },
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'right' },
            gap: 1,
            gridColumn: { xs: '1', md: '3' },
            gridRow: { xs: '1', md: '1' },
          }}
        >
          <LinkWithLine
            to="/guide"
            children="Guia"
            level="body-xs"
          />
          <Divider orientation="vertical" />
          <LinkWithLine
            component={Link}
            children="Contacto"
            level="body-xs"
          />
          <Divider orientation="vertical" />
          <LinkWithLine
            to="/"
            children="Entregas"
            level="body-xs"
          />
          <Divider orientation="vertical" />
          <LinkWithLine
            to="/"
            children="Política de privacidade"
            level="body-xs"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
