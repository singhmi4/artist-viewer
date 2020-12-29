import React from 'react'

// Components
import Artists from '../components/data/Artists'

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
    <Artists />
    
  )
}

export default Home
