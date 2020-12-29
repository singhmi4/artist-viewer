import React, { useContext } from 'react'

// Context
import MusixMatchProvider from '../../../context/context'

// Components
import Artist from './Artist'
import Spinner from '../../layout/Spinner'

// Material UI Components
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Artists = () => {
  const classes = useStyles();
  const { countryCode, artistList } = useContext(MusixMatchProvider.context);

  return (
    <div className={classes.root}>
      {
        artistList === undefined || artistList.length === 0 
        ? <Grid container>
            <Grid item xs={12} >
              <Spinner />
            </Grid>
        </Grid>
        :  <> 
            <Typography variant="h5" align="center">Top 10 Artists in {countryCode}</Typography>
            <Grid container spacing={4} className={classes.root}>
              
                {artistList.map(artist => (
                  <Grid key={artist.artist.artist_id} item xs={12} md={6}>
                    <Artist artist={artist.artist} />
                  </Grid>
                ))}
            </Grid>
          </>
        }
    </div>
  )
}

export default Artists
