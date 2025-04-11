

import './App.css';
import ProfilePage from './Pages/CustomerProfilePage/ProfilePage';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // 👈 this enables dark mode
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});


function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <CssBaseline /> 
      <ProfilePage/>
    </ThemeProvider>


    </div>
   
  );
}

export default App;
