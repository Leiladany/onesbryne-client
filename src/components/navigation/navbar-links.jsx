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
import { IoIosLogOut } from 'react-icons/io';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { GoPerson, GoPersonFill } from 'react-icons/go';
import { PiDress, PiDressFill } from 'react-icons/pi';
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

  const handleHeartClick = () => {
    (prevState) => !prevState;
  };

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
        /* IS NOT AUTHENTICATED */
        <>
          {/* DESKTOP */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            <LinkWithLine
              to="/signup"
              children="Criar Conta"
              level="title-md"
            />
            <LinkWithLine
              to="/login"
              children="Entrar"
              level="title-md"
            />
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
        /* IS AUTHENTICATED */
        <>
          {/* DESKTOP */}
          {isLoading ? (
            <Box sx={{ width: '20%' }}>
              <LinearProgress variant="plain" color="neutral" thickness={2} />
            </Box>
          ) : (
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
              {isAdmin && (
                <Link to="/admin">
                  <Stack>
                    {location.pathname.startsWith('/admin') ? (
                      <MdAdminPanelSettings color="white" size={20} />
                    ) : (
                      <MdOutlineAdminPanelSettings color="white" size={20} />
                    )}
                  </Stack>
                </Link>
              )}

              <Link to="/clothes">
                <Stack>
                  {location.pathname.startsWith('/clothes') ? (
                    <PiDressFill color="white" size={20} />
                  ) : (
                    <PiDress color="white" size={20} />
                  )}
                </Stack>
              </Link>

              <Link to="/favourites">
                <Stack onClick={handleHeartClick}>
                  {location.pathname.startsWith('/favourites') ? (
                    <IoIosHeart color="white" size={20} />
                  ) : (
                    <IoIosHeartEmpty color="white" size={20} />
                  )}
                </Stack>
              </Link>

              <Link to="/profile">
                <Stack>
                  {location.pathname.startsWith('/profile') ? (
                    <GoPersonFill color="white" size={20} />
                  ) : (
                    <GoPerson color="white" size={20} />
                  )}
                </Stack>
              </Link>

              <Link to="/" onClick={handleLogout}>
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
                <MenuItem>
                  {isAdmin && (
                    <Link to="/admin">
                      <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                        {location.pathname.startsWith('/admin') ? (
                          <MdAdminPanelSettings color="white" size={20} />
                        ) : (
                          <MdOutlineAdminPanelSettings
                            color="white"
                            size={20}
                          />
                        )}
                        <Typography>Admin</Typography>
                      </Stack>
                    </Link>
                  )}
                </MenuItem>

                <MenuItem>
                  <Link to="/clothes">
                    <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                      {location.pathname.startsWith('/clothes') ? (
                        <PiDressFill color="white" size={20} />
                      ) : (
                        <PiDress color="white" size={20} />
                      )}
                      <Typography>Roupas</Typography>
                    </Stack>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/favourites">
                    <Stack
                      sx={{ flexDirection: 'row', gap: 1 }}
                      onClick={handleHeartClick}
                    >
                      {location.pathname.startsWith('/favourites') ? (
                        <IoIosHeart color="white" size={20} />
                      ) : (
                        <IoIosHeartEmpty color="white" size={20} />
                      )}
                      <Typography>Favoritos</Typography>
                    </Stack>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/profile">
                    <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                      {location.pathname.startsWith('/profile') ? (
                        <GoPersonFill color="white" size={20} />
                      ) : (
                        <GoPerson color="white" size={20} />
                      )}
                      <Typography>Perfil</Typography>
                    </Stack>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/" onClick={handleLogout}>
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
