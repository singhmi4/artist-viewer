import React from 'react';

// React Router DOM Components
import { Link } from 'react-router-dom';

// Material UI Components
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useMediaQuery
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
  fav: {
    fontSize: "18px",
    marginRight: theme.spacing(1)
  }
}));

const Navbar = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

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
              > {!isMobile
                  &&
                  <span className={classes.fav}>Favourites</span>
                }
                <FavoriteIcon />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;