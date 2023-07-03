import { Box } from '@mui/material';
export default function CommonExplorer({ title, description, children }) {
  return (
    <div className="common-explorer">
      <Box>
        <p className="font-bold text-3xl mb-2">{title}</p>
        <p className="text-2xl mb-8">{description}</p>
      </Box>
      <div>{children}</div>
    </div>
  );
}
