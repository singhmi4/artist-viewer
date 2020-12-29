import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Music Album Finder
          </Typography>
            <div>
              <IconButton
                aria-label="favourite albums"
                color="inherit"
              >
                <FavoriteIcon />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;