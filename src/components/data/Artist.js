import React from 'react'

// Material UI Component
import { 
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  }
});

const Artist = (props) => {
  const classes = useStyles();
  const { artist } = props;
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>Artist</Typography>
        <Typography variant="h5">{artist.artist_name}</Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

export default Artist
