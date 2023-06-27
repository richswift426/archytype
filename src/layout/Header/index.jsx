import { Box } from '@mui/material';
import Logo from 'assets/images/logo.png';

let authenticated = false;
const NormalHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        backgroundColor: '#070b10',
      }}
    >
      <img src={Logo} alt="archey logo" />
    </Box>
  );
};

const AuthHeader = () => {
  return <div>AuthHeader</div>;
};
export default function Header() {
  return authenticated ? <AuthHeader /> : <NormalHeader />;
}
