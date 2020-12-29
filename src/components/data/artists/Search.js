import React, { useContext } from 'react'

// Countries List
import { countries } from '../countries/countries'

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
  const { countryCode, setCountryCode, setArtistList } = useContext(MusixMatchProvider.context)

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country=${event.target.value}&apikey=${
      process.env.REACT_APP_MM_KEY
    }`)
      .then(res => {
        setArtistList(res.data.message.body.artist_list)
      })
      .catch(err => console.log(err))
  }

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
            value={countryCode}
            onChange={handleCountryCodeChange}
            inputProps={{
              name: 'country',
              id: 'country-native-helper',
            }}
          >
            <option aria-label="None" value="" />
            {
              countries.map((country, i) => (
                <option key={i} value={country["alpha-2"]}>{country.name}</option>
              ))
            }
          </NativeSelect>
        </FormControl>
      </CardContent>
    </Card>
  )
}

export default Search
