import React, { useContext, useState } from 'react'

// Axios Import
import axios from 'axios'

// Context Provider
import MusixMatchProvider from '../../../context/context'

// Material UI Components
import { 
  Card, 
  CardContent,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  formControl: {
    // margin: theme.spacing(1),
    // width: "80%",
  },
}))

const Search = () => {
  const classes = useStyles()
  const [country, setCountry] = useState("")
  const { setArtistList } = useContext(MusixMatchProvider.context)
  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography align="center" variant="h3" gutterBottom>
          <MusicNoteIcon fontSize="large" /> Search for Artists
        </Typography>
        <Typography align="center" variant="h6">By Country</Typography>
        <FormControl className={classes.formControl} margin="dense" fullWidth>
          <InputLabel htmlFor="country-native-helper">Country</InputLabel>
          <NativeSelect
            // value={state.age}
            // onChange={handleChange}
            inputProps={{
              name: 'country',
              id: 'country-native-helper',
            }}
          >
            <option aria-label="None" value="" />
            <option value="CA">Canada</option>
            <option value="UK">United States</option>
            <option value="GB">United Kingdom</option>
          </NativeSelect>
        </FormControl>
      </CardContent>
    </Card>
  )
}

export default Search
