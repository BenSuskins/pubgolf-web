import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Paper from '@mui/material/Paper';

export default function Nav() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    switch (value) {
      case 0: {
        // todo redirect; 
        break;
      }
      case 1: {
        //todo redirect; 
        break;
      }
    }
    console.log("State Change" + value);
  }, [value]);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Scores" icon={<SportsBarIcon />} />
        <BottomNavigationAction label="Info" icon={<InfoIcon />} />
      </BottomNavigation>
    </Paper>
  );
}