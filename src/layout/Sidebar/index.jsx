import { Link } from 'react-router-dom';
import { Box, List, ListItemButton, ListItemIcon } from '@mui/material';

import {
  Home,
  Analytics,
  SettingsSuggest,
  EmojiObjectsOutlined,
  History,
  Delete,
} from '@mui/icons-material';
const routes = [
  {
    to: '/home',
    content: 'Home',
    icon: <Home fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/brainstorm',
    content: 'Brainstorm',
    icon: <EmojiObjectsOutlined fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/history',
    content: 'History',
    icon: <History fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/trash',
    content: 'Trash',
    icon: <Delete fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/settings',
    content: 'Settings',
    icon: <SettingsSuggest fontSize="large" sx={{ color: 'white' }} />,
  },
];

export default function Sidebar() {
  return (
    <Box
      className="sidebar h-full"
      sx={{
        backgroundColor: '#f74780',
      }}
    >
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
                {content}
              </ListItemButton>
            </Link>
          </div>
        ))}
      </List>
    </Box>
  );
}
