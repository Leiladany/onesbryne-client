import { LinkWithLine } from '../layout/link-with-line';
import {
  Stack,
  Typography,
  Divider,
} from '@mui/joy';

export const Footer = () => {
  return (
    <Stack component="footer">
      <Stack
        component="section"
        sx={{
          backgroundColor: 'common.white',
          mx: { xs: 2, md: 10 },
          height: '1px',
        }}
      />
      <Stack
        sx={{
          py: 2,
          flexDirection: { sx: 'column', md: 'row' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          zIndex: '1000',
          gap: { xs: 2, md: 0 },
        }}
      >
        <Stack
          component="section"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        />

        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 'lighter',
            }}
          >
            Copyright© 2024
          </Typography>

          <Typography
            sx={{
              fontFamily: 'italiana, sans-serif',
              fontSize: '12px',
              fontWeight: 'lighter',
            }}
          >
            ONESBRYNE
          </Typography>
        </Stack>

        <Stack
          sx={{
            pr: { xs: 0, md: 10 },
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'right' },
            gap: 1,
          }}
        >
          <LinkWithLine children="Contacto" className="line" level="body-xs" />
          <Divider
            orientation="vertical"
            sx={{ backgroundColor: 'common.white' }}
          />
          <LinkWithLine children="Entregas" className="line" level="body-xs" />
          <Divider
            orientation="vertical"
            sx={{ backgroundColor: 'common.white' }}
          />
          <LinkWithLine
            children="Política de Privacidade"
            className="line"
            level="body-xs"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
