/* eslint-disable react/no-unescaped-entities */
'use client';
import { Link } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/joy';
import { PageContainer } from '../components/layout/containers';
import homeIcon1 from '../assets/home-icon-1.png';
import homeIcon2 from '../assets/home-icon-2.png';
import homeIcon3 from '../assets/home-icon-3.png';
import homeIcon4 from '../assets/home-icon-4.png';

const sectionData = [
  {
    icon: homeIcon1,
    title: 'Cria a tua conta',
    content: 'Começa por criar a tua conta para te conhecer-mos um pouco.',
  },
  {
    icon: homeIcon2,
    title: 'Procura a roupa que queres',
    content: 'Explora o nosso catálogo com vários tipos de roupa.',
  },
  {
    icon: homeIcon3,
    title: 'Vê os detalhes da peça que gostaste',
    content:
      'Clica nas peça que te chamaram mais a atenção para veres se são do teu agrado! Se gostares podes contactar o vendedor ou guardar primeiro nos favoritos.',
  },
  {
    icon: homeIcon4,
    title: 'Contacta o vendedor',
    content:
      'Envia um email ao vendedor com o código da peça de roupa que escolheste.',
  },
];

export const GuidePage = () => {
  return (
    <PageContainer sx={{ gap: 10 }}>
      <Stack component="section" sx={{ alignItems: 'center' }}>
        <Typography level="h3">Como utilizar</Typography>
      </Stack>
      <Stack
        component="section"
        sx={{
          maxWidth: { xs: 'md', md: 'lg' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr);' },
          gridGap: { xs: '64px', md: '32px' },
        }}
      >
        {sectionData.map((section, index) => (
          <Stack
            key={index}
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              backgroundColor: 'primary.darkBlue',
              border: '1px solid #1e242c',
              borderRadius: '8px',
              mx: { xs: 2, lg: 0 },
            }}
          >
            <Stack sx={{ alignItems: 'center', p: 2 }}>
              <img
                src={section.icon}
                alt={`Home Icon ${index + 1}`}
                style={{ width: '80px' }}
              />
            </Stack>

            <Stack sx={{ p: 2, gap: 1 }}>
              <Typography
                level="title-lg"
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                {section.title}
              </Typography>

              <Typography
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {section.content}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Stack component="section">
        <Button component={Link} to="/clothes">
          Explorar
        </Button>
      </Stack>
    </PageContainer>
  );
};
