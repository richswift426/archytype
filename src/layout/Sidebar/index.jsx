import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Drawer as MuiDrawer,
  IconButton,
  ListItemText,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import {
  Home,
  SettingsSuggest,
  EmojiObjectsOutlined,
  History,
  Delete,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: '#f74780',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const routes = [
  {
    to: '/dashboard/home',
    content: 'Home',
    icon: <Home fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/dashboard/brainstorm',
    content: 'Brainstorm',
    icon: <EmojiObjectsOutlined fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/dashboard/history',
    content: 'History',
    icon: <History fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/dashboard/trash',
    content: 'Trash',
    icon: <Delete fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/dashboard/settings',
    content: 'Settings',
    icon: <SettingsSuggest fontSize="large" sx={{ color: 'white' }} />,
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      className="sidebar h-full"
      sx={{
        backgroundColor: '#f74780',
      }}
    >
      {/* <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader> */}
      <List component="nav" aria-labelledby="nested-list-subheader">
        {routes.map(({ to, content, icon }, key) => (
          <div className="link-item" key={key}>
            <Link to={to} className="text-white text-2xl">
              <ListItemButton
                sx={{
                  padding: 4,
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#fff',
                  '&:hover, &:focus': { bgcolor: 'rgba(71, 98, 130, 0.2)' },
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                {/* <ListItemText
                  primary={content}
                  sx={{ opacity: open ? 1 : 0 }}
                /> */}
                {content}
              </ListItemButton>
            </Link>
          </div>
        ))}
      </List>
      {/* </Drawer> */}
    </Box>
  );
}
