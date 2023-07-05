import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';
import ContentGeneration from 'pages/content-generation';
import Customization from 'pages/customization';
import ContentPreview from 'pages/preview';
import MainHome from 'pages/main-home';
import Explorer from 'layout/Explorer';
import AdCopyGenerator from 'pages/ad-copy-generator';
import SocialMediaEngine from 'pages/social-media-engine';
import BlogAuthor from 'pages/blog-author';
import BrandGuidelines from 'pages/brand-guidelines';
import ArchetypeExplorer from 'pages/archetype-explorer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<Dashboard />}>
            <Route path="home" element={<MainHome />} />
            <Route path="home/email-explorer" element={<Explorer />} />
            <Route path="home/blog-author" element={<BlogAuthor />} />
            <Route
              path="home/ad-copy-generator"
              element={<AdCopyGenerator />}
            />
            <Route
              path="home/social-media-engine"
              element={<SocialMediaEngine />}
            />
            <Route path="home/brand-guidelines" element={<BrandGuidelines />} />
            <Route
              path="home/archetype-explorer"
              element={<ArchetypeExplorer />}
            />
            <Route path="history" element={<ContentGeneration />} />
            <Route path="trash" element={<Customization />} />
            <Route path="settings" element={<ContentPreview />} />
          </Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
