import React, { useContext } from 'react'

// React Router Dom
import { Link, useHistory } from 'react-router-dom'

// Context Provider 
import MusixMatchProvider from '../../../context/context' 

// Components
import Album from './Album'

// Material UI Components
import { Typography, Grid, Button } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { makeStyles } from '@material-ui/core/styles'

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  goback: {
    marginTop: theme.spacing(2)
  },
  title: {
    marginTop: theme.spacing(1)
  }
}))

const FavAlbums = () => {
  const classes = useStyles()
  const history = useHistory()

  const { favAlbums } = useContext(MusixMatchProvider.context)

  return (
    <div className={classes.root}>
      {
        favAlbums === undefined || favAlbums.length === 0 
        ? <Grid container>
            <Grid item xs={12} justify="center" >
              <Typography variant="h5" align="center">You haven't favourited any albums.</Typography>
              <Button className={classes.goback} component={Link} to="/" variant="contained" color="secondary" fullWidth><ChevronLeftIcon /> Go Back</Button>  
            </Grid>
        </Grid>
        :  <> 
            <Button 
              className={classes.goback}  
              onClick={() => {
                history.goBack();
              }} 
              variant="contained" 
              color="primary" 
              >
                <ChevronLeftIcon /> Go Back
            </Button>
            <Typography className={classes.title} variant="h5" align="center">Your Favourites</Typography>
            <Grid container spacing={4} className={classes.root}>
                {favAlbums.map(album => (
                  <Grid key={album.album_id} item xs={12} md={6}>
                    <Album album={album} />
                  </Grid>
                ))}
            </Grid>
          </>
        }
    </div>
  )
}

export default FavAlbums
