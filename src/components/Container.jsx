import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'; // Using Box instead of Container for more flexibility
import { useTheme } from '@mui/material/styles';

const FixedContainer = (props) => {
  // Access the theme to get dark/light mode colors
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Use Box for more direct styling control */}
      <Box className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg"
        // sx={{
        //   // Use theme-aware colors for better dark mode compatibility
        //   bgcolor: theme.palette.mode === 'dark' ? 'dark.900' : 'grey.50',
        //   p: 4, // Apply padding using the sx prop (4 * 8px = 32px)
        //   borderRadius: 2, // Apply rounded corners
        // }}
      >
        {/* Render the content passed from the parent */}
        {props.data()}
      </Box>
    </React.Fragment>
  );
};

export default FixedContainer;