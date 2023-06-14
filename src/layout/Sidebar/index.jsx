import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemIcon } from '@mui/material';
import {
  Home,
  Source,
  Analytics,
  PreviewOutlined,
  DashboardCustomizeOutlined,
} from '@mui/icons-material';
const routes = [
  {
    to: '/selection',
    content: 'Brand Archetype Selection',
    icon: <Home fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/engine',
    content: 'Content Generation Engine',
    icon: <Source fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/custom',
    content: 'Customization Options',
    icon: (
      <DashboardCustomizeOutlined fontSize="large" sx={{ color: 'white' }} />
    ),
  },
  {
    to: '/preview',
    content: 'Content Preview and Editing',
    icon: <PreviewOutlined fontSize="large" sx={{ color: 'white' }} />,
  },
  {
    to: '/analytics',
    content: 'Analytics and Performance Tracking',
    icon: <Analytics fontSize="large" sx={{ color: 'white' }} />,
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar h-screen bg-gray-800">
      <div className="sidebar-header px-8 pt-8 mb-8 text-white font-bold text-4xl">
        Sam's Portal +
      </div>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {routes.map(({ to, content, icon }, key) => (
          <div className="link-item border-t-2" key={key}>
            <Link to={to} className="text-white text-3xl">
              <ListItemButton
                sx={{
                  padding: 4,
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
    </div>
  );
}
