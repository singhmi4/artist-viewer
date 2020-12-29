import React from 'react'

// Material UI Components
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} align="center" variant="h2" gutterBottom>
      Home Page
    </Typography>
  )
}

export default Home
