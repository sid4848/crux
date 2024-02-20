import React, { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profile_pic.png";
import logo from "assets/logo.jpg";
import { ThemeSettings, themeSettings } from 'theme';

export interface SidebarProps {
  drawerWidth: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNonMobile: boolean;
}
// Import necessary modules

const navItems: { text: string; icon: React.ReactElement }[] = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    // Add more items as needed
  ];
  
  const Sidebar: React.FC<SidebarProps> = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
  }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState<string>(pathname.substring(1));
    const navigate = useNavigate();
    const theme = useTheme();
  
    useEffect(() => {
      setActive(pathname.substring(1));
    }, [pathname]);
  
    return (
      <Box component="nav">
        {isSidebarOpen && (
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.background.default,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <Box width="100%" m="0px 1px 0px 0px">
                <Box width="80px" height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                    <Box
                        width="80px"
                        height="min-content"
                        padding="32px 0 0 0"
                        display="flex"
                        flexDirection="column"
                        gap="24px">
                        <Box
                            width="80px"
                            height="32px"
                            padding="0px 20px 0px 24px"
                            display="flex"
                            flexDirection="column">
                            
                            <Box
                            width="32px"
                            height="32px"
                            borderRadius="9.6">    
                            </Box>
                        </Box>      

                        {/* {!isNonMobile && (
                            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <ChevronLeft />
                            </IconButton>
                        )} */}
                    </Box>
                </Box>
              <List>
                {navItems.map(({ text, icon }) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${text.toLowerCase()}`);
                        setActive(text.toLowerCase());
                      }}
                      sx={{
                        backgroundColor:
                          active === text.toLowerCase()
                            ? theme.palette.secondary.main
                            : "transparent",
                        color:
                          active === text.toLowerCase()
                            ? theme.palette.primary.main
                            : theme.palette.secondary.main,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === text.toLowerCase()
                              ? theme.palette.primary.main
                              : theme.palette.secondary.main,
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === text.toLowerCase() && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box position="absolute" bottom="2rem">
                <Divider />
                <FlexBetween textTransform="none" gap="1rem" m="1rem 1rem 0 1rem">
                    <Box
                        component="img"
                        alt="profile"
                        src={profileImage}
                        height="48px"
                        width="48px"
                        borderRadius="50%"
                        sx = {{ objectFit: "cover" }}
                    >

                    </Box>
                </FlexBetween>
            </Box>
          </Drawer>
        )}
      </Box>
    );
  };
  
  export default Sidebar;
  