'use client';
import {
  Box,
  MenuButton,
  Menu,
  Stack,
  Dropdown,
  MenuItem,
  Typography,
} from '@mui/joy';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthContext';
import { LinkComponentWithLine } from '../../../layout/LinkComponentWithLine';
import { IoIosLogOut } from 'react-icons/io';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { GoPerson, GoPersonFill } from 'react-icons/go';
import { PiDress, PiDressFill } from 'react-icons/pi';
import {
  MdAdminPanelSettings,
  MdOutlineAdminPanelSettings,
} from 'react-icons/md';

const Section3 = () => {
  const { handleLogout, isAuthenticated, isAdmin } = useContext(AuthContext);
  const location = useLocation();

  const handleHeartClick = () => {
    (prevState) => !prevState;
  };

  return (
    <Stack
      component="section"
      sx={{
        pr: { xs: 2, md: 10 },
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'right',
      }}
    >
      {!isAuthenticated ? (
        /* IS NOT AUTHENTICATED */
        <>
          {/* DESKTOP */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <LinkComponentWithLine
              to="/signup"
              children="Criar Conta"
              className="line"
            />
            <LinkComponentWithLine
              to="/login"
              children="Entrar"
              className="line"
            />
          </Box>

          {/* MOBILE */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                  <Link
                    to="/signup"
                    children="Criar Conta"
                    className="line"
                    onClick={() => setDropdownOpen(false)}
                  />
                </MenuItem>

                <MenuItem>
                  <Link to="/login" children="Entrar" className="line" />
                </MenuItem>
              </Menu>
            </Dropdown>
          </Box>
        </>
      ) : (
        /* IS AUTHENTICATED */
        <>
          {/* DESKTOP */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {isAdmin && (
              <Link to="/admin">
                <Stack>
                  {location.pathname === '/admin' ? (
                    <MdAdminPanelSettings color="white" size={20} />
                  ) : (
                    <MdOutlineAdminPanelSettings color="white" size={20} />
                  )}
                </Stack>
              </Link>
            )}

            <Link to="/clothes">
              <Stack>
                {location.pathname === '/clothes' ? (
                  <PiDressFill color="white" size={20} />
                ) : (
                  <PiDress color="white" size={20} />
                )}
              </Stack>
            </Link>

            <Link to="/favourites">
              <Stack onClick={handleHeartClick}>
                {location.pathname === '/favourites' ? (
                  <IoIosHeart color="white" size={20} />
                ) : (
                  <IoIosHeartEmpty color="white" size={20} />
                )}
              </Stack>
            </Link>

            <Link to="/profile">
              <Stack>
                {location.pathname === '/profile' ? (
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

          {/* MOBILE */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                        {location.pathname === '/admin' ? (
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
                      {location.pathname === '/clothes' ? (
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
                      {location.pathname === '/favourites' ? (
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
                      {location.pathname === '/profile' ? (
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

export default Section3;
