import React from 'react';
import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import FlexBetween from 'components/FlexBetween';
import { setMode } from 'state';
import profileImage from 'assets/profile_pic.png';
import { useTheme, Theme } from '@emotion/react';
import { RootState } from 'index';
import { ThemeSettings, themeSettings } from 'theme';

interface NavbarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
  
const Navbar: React.FC<NavbarProps> = ({isSidebarOpen, setIsSidebarOpen}) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.global.mode);
  const themeSettingsObject: ThemeSettings = themeSettings(mode);

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/*left side */}

        <FlexBetween>
          
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          
          <FlexBetween
            backgroundColor={themeSettingsObject.palette.background?.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search.." />
            
            <IconButton>
              <Search />
            </IconButton>
          
          </FlexBetween>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
                {themeSettingsObject.palette.mode === 'dark' ? (
                    <DarkModeOutlined sx={{ fontsize: "25px"}} />
                ): (
                    <LightModeOutlined sx={{ fontSize: "25px"}} />
                )}
            </IconButton>
            <IconButton>
                <SettingsOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
        </FlexBetween>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
