'use client';
import {
  Box,
  MenuButton,
  Menu,
  Stack,
  Dropdown,
  MenuItem,
  Typography,
  LinearProgress,
} from '@mui/joy';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import { LinkWithLine } from '../layout/link-with-line';
import { IoIosLogOut, IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { GoPerson, GoPersonFill } from 'react-icons/go';
import { IoHome, IoHomeOutline } from "react-icons/io5";
import {
  MdAdminPanelSettings,
  MdOutlineAdminPanelSettings,
} from 'react-icons/md';

export const NavbarLinks = () => {
  const { handleLogout, isAuthenticated, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      setIsLoading(false);
    }
  }, [isAuthenticated, isAdmin]);

  const iconProps = { color: 'white', size: 20 };

  const links = [
    {
      label: 'Admin',
      to: '/admin',
      icons: [
        <MdOutlineAdminPanelSettings {...iconProps} />,
        <MdAdminPanelSettings {...iconProps} />,
      ],
      condition: isAdmin,
    },
    {
      label: 'Roupas',
      to: '/home',
      icons: [<IoHomeOutline  {...iconProps} />, <IoHome {...iconProps} />],
    },
    {
      label: 'Favoritos',
      to: '/favourites',
      icons: [
        <IoIosHeartEmpty {...iconProps} />,
        <IoIosHeart {...iconProps} />,
      ],
    },
    {
      label: 'Perfil',
      to: '/profile',
      icons: [<GoPerson {...iconProps} />, <GoPersonFill {...iconProps} />],
    },
  ];

  return (
    <Stack
      component="section"
      sx={{
        pr: { xs: 2, lg: 10 },
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'right',
      }}
    >
      {!isAuthenticated ? (
        <>
          {/* DESKTOP */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            <LinkWithLine
              to="/signup"
              children="Criar Conta"
              level="title-md"
            />
            <LinkWithLine to="/login" children="Entrar" level="title-md" />
          </Box>

          {/* MOBILE */}
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <Dropdown>
              <MenuButton variant="plain" sx={{ p: 0 }}>
                <GoPerson color="white" size={25} />
              </MenuButton>

              <Menu
                placement="bottom-end"
                sx={{
                  backgroundColor: 'neutral.800',
                  p: 1,
                  borderColor: 'neutral.700',
                }}
              >
                <MenuItem>
                  <LinkWithLine
                    to="/signup"
                    children="Criar Conta"
                    level="title-md"
                  />
                </MenuItem>

                <MenuItem>
                  <LinkWithLine
                    to="/login"
                    children="Entrar"
                    level="title-md"
                  />
                </MenuItem>
              </Menu>
            </Dropdown>
          </Box>
        </>
      ) : (
        <>
          {/* DESKTOP */}
          {isLoading ? (
            <Box sx={{ width: '20%' }}>
              <LinearProgress variant="plain" color="neutral" thickness={2} />
            </Box>
          ) : (
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
              {links.map(
                ({ to, icons, condition = true }, index) =>
                  condition && (
                    <Link key={index} to={to}>
                      <Stack>
                        {location.pathname.startsWith(to) ? icons[1] : icons[0]}
                      </Stack>
                    </Link>
                  ),
              )}
              <Link to="/home" onClick={handleLogout}>
                <Stack>
                  <IoIosLogOut color="white" size={20} />
                </Stack>
              </Link>
            </Box>
          )}

          {/* MOBILE */}
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <Dropdown>
              <MenuButton variant="plain" sx={{ p: 0 }}>
                <GoPerson color="white" size={25} />
              </MenuButton>

              <Menu
                placement="bottom-end"
                sx={{
                  backgroundColor: 'neutral.800',
                  p: 1,
                  borderColor: 'neutral.700',
                }}
              >
                {links.map(
                  ({ to, icons, label, condition = true, onClick }, index) =>
                    condition && (
                      <MenuItem key={index}>
                        <Link to={to} onClick={onClick}>
                          <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                            {location.pathname.startsWith(to)
                              ? icons[1]
                              : icons[0]}
                            <Typography>{label}</Typography>
                          </Stack>
                        </Link>
                      </MenuItem>
                    ),
                )}
                <MenuItem>
                  <Link to="/home" onClick={handleLogout}>
                    <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                      <IoIosLogOut color="white" size={20} />
                      <Typography>Sair</Typography>
                    </Stack>
                  </Link>
                </MenuItem>
              </Menu>
            </Dropdown>
          </Box>
        </>
      )}
    </Stack>
  );
};
