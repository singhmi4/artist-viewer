import React, { useState, useEffect } from 'react'

// Axios Import
import axios from 'axios'

// Components
import Album from './Album'
import Spinner from '../../layout/Spinner'

// Material UI Components
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}))

const AlbumList = ({ artist_id }) => {
  const classes = useStyles()
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
            <Typography variant="h5" align="center">{albumList[0].album.artist_name} - Discography</Typography>
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
