import React from 'react';

// React Router DOM Components
import { Link } from 'react-router-dom';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core'
import AlbumIcon from '@material-ui/icons/Album';
import FavoriteIcon from '@material-ui/icons/Favorite';

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  albumButton: {
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
          <IconButton 
            edge="start" 
            className={classes.albumButton} 
            color="inherit" 
            aria-label="album-button-home"
            component={Link}
            to="/"
          >
            <AlbumIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Music Album Finder
          </Typography>
            <div>
              <IconButton
                aria-label="favourite albums"
                color="inherit"
                component={Link}
                to="/favourites"
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