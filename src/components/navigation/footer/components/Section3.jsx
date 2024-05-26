import { Stack, Divider } from '@mui/joy';
import Link from '../../../layout/LinkComponentWithLine';

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
      <Link children="Contacto" className="line" level="body-xs" />
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: 'common.white' }}
      />
      <Link children="Entregas" className="line" level="body-xs" />
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: 'common.white' }}
      />
      <Link
        children="Política de Privacidade"
        className="line"
        level="body-xs"
      />
    </Stack>
  );
};

export default Section3;
