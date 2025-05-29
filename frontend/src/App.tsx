import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Paper,
  Button,
} from '@mui/material';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contract Analyzer
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Contract Analyzer
          </Typography>
          <Typography variant="body1" paragraph>
            This is your new website. You can customize this content and add more features as needed.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default App; 