import { Stack, Typography, Divider } from '@mui/joy';
import { LinkWithLine } from '../layout/link-with-line';

export const Footer = () => {
  return (
    <Stack component="footer">
      <Divider sx={{ mx: { xs: 2, lg: 10 } }} />

      <Stack
        sx={{
          py: 2,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr 1fr' },
          zIndex: '1000',
          gap: { xs: 2, lg: 0 },
        }}
      >
        <Stack
          component="section"
          sx={{
            display: { xs: 'none', lg: 'flex' },
          }}
        />

        <Stack
          component="section"
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 1,
            gridColumn: { xs: '1', lg: '2' },
            gridRow: { xs: '2', lg: '1' },
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
            pr: { xs: 0, lg: 10 },
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: { xs: 'center', lg: 'right' },
            gap: 1,
            gridColumn: { xs: '1', lg: '3' },
            gridRow: { xs: '1', lg: '1' },
          }}
        >
          <LinkWithLine
            to="/guide"
            children="Guia"
            level="body-xs"
          />
          <Divider orientation="vertical" />
          <LinkWithLine
            to="/home"
            children="Contacto"
            level="body-xs"
          />
          <Divider orientation="vertical" />
          <LinkWithLine
            to="/home"
            children="Entregas"
            level="body-xs"
          />
          <Divider orientation="vertical" />
          <LinkWithLine
            to="/home"
            children="Política de privacidade"
            level="body-xs"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
