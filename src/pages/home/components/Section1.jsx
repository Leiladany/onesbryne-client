import { Stack, Typography } from '@mui/joy';

const Section1 = () => {
  return (
    <Stack component="section" sx={{ alignItems: 'center' }}>
      <Typography
        level="h1"
        sx={{ color: 'common.white', fontWeight: 'lighter', fontSize: '32px' }}
      >
        O que é ?
      </Typography>
      <Typography
        level="h3"
        sx={{ color: 'common.white', fontWeight: 'lighter', fontSize: '16px' }}
      >
        Uma loja de venda de roupa em 2º mão !
      </Typography>
    </Stack>
  );
};

export default Section1;
