import { Stack, Divider } from '@mui/joy';
import LinkComponent from '../../../layout/link/Link';

const Section3 = () => {
  return (
    <Stack
      sx={{
        pr: { xs: 0, md: 10 },
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'right' },
        gap: 1,
      }}
    >
      <LinkComponent children="Contacto" className="line" size="sm" />
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: 'common.white' }}
      />
      <LinkComponent children="Entregas" className="line" size="sm" />
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: 'common.white' }}
      />
      <LinkComponent
        children="Política de Privacidade"
        className="line"
        size="sm"
      />
    </Stack>
  );
};

export default Section3;
