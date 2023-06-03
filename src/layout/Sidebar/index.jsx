import { Link } from 'react-router-dom';

const routes = [
  {
    to: '/selection',
    content: 'Brand Archetype Selection',
  },
  {
    to: '/engine',
    content: 'Content Generation Engine',
  },
  {
    to: '/custom',
    content: 'Customization Options',
  },
  {
    to: '/preview',
    content: 'Content Preview and Editing',
  },
  {
    to: '/analytics',
    content: 'Analytics and Performance Tracking',
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar p-8 h-screen bg-gray-800">
      <div className="sidebar-header mb-4 text-white font-bold text-lg">
        Sam's Portal +
      </div>
      {routes.map(({ to, content }, key) => (
        <div className="link-item py-4 border-t-2" key={key}>
          <Link to={to} className="text-white">
            {content}
          </Link>
        </div>
      ))}
    </div>
  );
}
