import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e88e5', // Blue Premium
        },
        secondary: {
            main: '#ff8a65', // Coral accent
        },
        background: {
            default: '#f4f6f8',
        },
    },
    typography: {
        fontFamily: `'Inter', 'Prompt', sans-serif`,
        h4: {
            fontWeight: 700,
        },
    },
});

export default theme;
