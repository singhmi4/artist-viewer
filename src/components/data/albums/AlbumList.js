import React, { useState, useEffect } from 'react'

// Axios Import
import axios from 'axios'

// React Router Dom
import { useHistory } from 'react-router-dom'

// Components
import Album from './Album'
import Spinner from '../../layout/Spinner'

// Material UI Components
import { Typography, Grid, Button } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { makeStyles } from '@material-ui/core/styles'

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  title: {
    marginTop: theme.spacing(1)
  }
}))

const AlbumList = ({ artist_id }) => {
  const classes = useStyles()
  const history = useHistory()
  const [albumList, setAlbumList] = useState([])

  useEffect(() => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artist_id}&s_release_date=desc&g_album_name=1=&page=1&page_size=10&apikey=${
    process.env.REACT_APP_MM_KEY
  }`)
    .then(res => {
      setAlbumList(res.data.message.body.album_list);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className={classes.root}>
      {
        albumList === undefined || albumList.length === 0 
        ? <Grid container>
            <Grid item xs={12} >
              <Spinner />
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
            <Typography className={classes.title} variant="h5" align="center">{albumList[0].album.artist_name} - Discography</Typography>
            <Grid container spacing={4} className={classes.root}>
              
                {albumList.map(album => (
                  <Grid key={album.album.album_id} item xs={12} md={6}>
                    <Album album={album.album} />
                  </Grid>
                ))}
            </Grid>
          </>
        }
    </div>
  )
}

export default AlbumList
