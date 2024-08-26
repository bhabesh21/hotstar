import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { SidebarData } from '../Data/Sidebar/SidebarData';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const SidebarPage = ({ children }) => {
  const navigate = useNavigate();

  const navigateToPage = (title) => {
    switch (title) {
      case 'Profile':
        navigate('/login');
        break; 
      case 'Home':
        navigate('/home');
        break;
      case 'Search':
        navigate('/search');
        break;
      case 'TV':
        navigate('/Tv');
        break;
      default:
        break;
    }
  };
  
  return (
    <Box className="sidebar-boxwrapper">
      <Box className="sidebar-mainbox">
        <Box className="sidebarBox">
          <Box className="sidebar-mapBefore">
            {SidebarData.map((item) => (
              <Box
                key={item.id}
                className="sidebar-mapAfter"
                onClick={() => navigateToPage(item.title)}
              >
                <IconButton className="iconBtn">
                  <item.icon className="icon1" />
                  <item.icon2 className="icon2" />
                </IconButton>
                <Button className="titleButton">{item.title}</Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="children-prop">{children}</Box>
    </Box>
  );
};

export default (SidebarPage);
