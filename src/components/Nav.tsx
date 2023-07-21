import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Paper from '@mui/material/Paper';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/" label="Scores" value="/" icon={<SportsBarIcon />} />
        <BottomNavigationAction component={Link} to="/info" label="Info" value="/info" icon={<InfoIcon />} />
      </BottomNavigation>
    </Paper>
  );
}