import React, { useContext, useState, useEffect } from 'react'

// Context Provider
import MusixMatchProvider from '../../../context/context' 

// Material UI Component
import { 
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Snackbar
} from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { makeStyles } from '@material-ui/core/styles'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  }
});

const Album = (props) => {
  const classes = useStyles();
  const { album } = props;
  const { favAlbums, setFavAlbums } = useContext(MusixMatchProvider.context)
  const [fav, setFav] = useState(false)
  const [open, setOpen] = useState(false);
  
  // Checks if Album is in Fav Albums List to Display Appropriate Heart Icon
  useEffect(() => {
    const favAlbumFound = favAlbums.filter(item => item.album_id === album.album_id)
    if (favAlbumFound.length) {
      setFav(true)
    } else {
      setFav(false)
    }
  }, [])

  const toggleFavourite = () => {
    // Removes item from favourites list array
    setOpen(true)
    
    if (fav === true) {
      setFav(false)
      setFavAlbums(favAlbums.filter(item => item.album_id !== album.album_id))
    // Adds item to favourites list array
    } else {
      setFav(true)
      setFavAlbums([...favAlbums, album])
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>Album</Typography>
        <Typography variant="h6">{album.album_name}</Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Genre:</strong> {album.primary_genres.music_genre_list[0] !== undefined ? album.primary_genres.music_genre_list[0].music_genre.music_genre_name : "Music"}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom><strong>Release Date:</strong> {album.album_release_date}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={toggleFavourite} >
          {
            fav === true ? <FavoriteIcon color="secondary" /> :  <FavoriteBorderIcon  /> 
          }
        </IconButton>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {
            fav === true ? "Album added to your favourites!" :  "Album removed from your favourites!"
          }
        </Alert>
      </Snackbar>
      </CardActions>
    </Card>
  )
}

export default Album
