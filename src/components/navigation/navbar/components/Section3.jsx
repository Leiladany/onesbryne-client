'use client';
import { Box, MenuButton, Menu, Stack, Dropdown, MenuItem } from '@mui/joy';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthContext';
import LinkComponent from '../../../layout/link/Link';

// Icons
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { GoPerson, GoPersonFill } from 'react-icons/go';
import { PiDress, PiDressFill } from 'react-icons/pi';
import {
  MdAdminPanelSettings,
  MdOutlineAdminPanelSettings,
} from 'react-icons/md';

const Section3 = () => {
  const { handleLogout, isAuthenticated, isAdmin } = useContext(AuthContext);
  const location = useLocation();

  const handleStarClick = () => {
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
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <LinkComponent
              to="/signup"
              children="Criar Conta"
              className="line"
            />
            <LinkComponent to="/login" children="Entrar" className="line" />
          </Box>

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
                  <LinkComponent
                    to="/signup"
                    children="Criar Conta"
                    className="line"
                    onClick={() => setDropdownOpen(false)}
                  />
                </MenuItem>

                <MenuItem>
                  <LinkComponent
                    to="/login"
                    children="Entrar"
                    className="line"
                  />
                </MenuItem>
              </Menu>
            </Dropdown>
          </Box>
        </>
      ) : (
        /* IS AUTHENTICATED */
        <>
          {isAdmin && (
            <LinkComponent to="/admin">
              <Stack>
                {location.pathname === '/admin' ? (
                  <MdAdminPanelSettings color="white" size={20} />
                ) : (
                  <MdOutlineAdminPanelSettings color="white" size={20} />
                )}
              </Stack>
            </LinkComponent>
          )}

          <LinkComponent to="/clothes">
            <Stack>
              {location.pathname === '/clothes' ? (
                <PiDressFill color="white" size={20} />
              ) : (
                <PiDress color="white" size={20} />
              )}
            </Stack>
          </LinkComponent>

          <LinkComponent to="/favourites">
            <Stack onClick={handleStarClick}>
              {location.pathname === '/favourites' ? (
                <IoIosStar color="white" size={20} />
              ) : (
                <IoIosStarOutline color="white" size={20} />
              )}
            </Stack>
          </LinkComponent>

          <LinkComponent to="/profile">
            <Stack>
              {location.pathname === '/profile' ? (
                <GoPersonFill color="white" size={20} />
              ) : (
                <GoPerson color="white" size={20} />
              )}
            </Stack>
          </LinkComponent>

          <LinkComponent
            to="/"
            onClick={handleLogout}
            children="Sair"
            className="line"
          />
        </>
      )}
    </Stack>
  );
};

export default Section3;
