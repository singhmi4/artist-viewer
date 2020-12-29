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

const Album = (props) => {
  const classes = useStyles();
  const { album } = props;
  console.log(album);
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>Album</Typography>
        <Typography variant="h6">{album.album_name}</Typography>
        <Typography variant="body" gutterBottom>
          <strong>Genre:</strong> {album.primary_genres.music_genre_list[0] !== undefined ? album.primary_genres.music_genre_list[0].music_genre.music_genre_name : "Music"}
        </Typography>
        <Typography variant="body" component="p" gutterBottom><strong>Release Date:</strong> {album.album_release_date}</Typography>
      </CardContent>
    </Card>
  )
}

export default Album
