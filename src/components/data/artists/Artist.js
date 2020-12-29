import React from 'react'

// React Router Dom Components
import { Link } from 'react-router-dom'

// Material UI Component
import { 
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

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
        <Button component={Link} to={`albums/${artist.artist_id}`} variant="contained" color="primary" fullWidth>
            <ChevronRightIcon/> View Albums
          </Button>
      </CardActions>
    </Card>
  )
}

export default Artist
