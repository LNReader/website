import { styled, alpha, useTheme, Theme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Height, Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Sidebar from './Sidebar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const sidebarWidth = 160;
interface MainContentProps {
  open: boolean;
  theme: Theme
}
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }: MainContentProps) => ({
  ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
          marginLeft: -(sidebarWidth - 20),
          width: `calc(100% - ${sidebarWidth}px)`
      },
      [theme.breakpoints.down('md')]: {
          marginLeft: '20px',
          width: `calc(100% - ${sidebarWidth}px)`,
          padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
          marginLeft: '10px',
          width: `calc(100% - ${sidebarWidth}px)`,
          padding: '16px',
          marginRight: '10px'
      }
  }),
  ...(open && {
      transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${sidebarWidth}px)`,
      [theme.breakpoints.down('md')]: {
          marginLeft: '20px'
      },
      [theme.breakpoints.down('sm')]: {
          marginLeft: '10px'
      }
  }),
  paddingLeft: sidebarWidth + 20
}));

export default function Layout({children}: {children?: React.ReactElement}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default}}>
      <AppBar position="fixed" style={{height: 60}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open slider"
            sx={{ mr: 2 }}
            onClick={toggleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/website" underline='none' color={theme.palette.text.primary}>
              LNReader
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <Main open={sidebarOpen} theme={theme}>
        {children}
      </Main>
    </Box>
  );
}