import React from 'react'

// Components
import FavAlbums from '../components/data/albums/FavAlbums'

// Material UI Components
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Favourites = () => {
  const classes = useStyles();
  return (
    <FavAlbums />
  )
}

export default Favourites
