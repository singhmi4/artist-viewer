import React, { createContext, useState, useEffect } from 'react'

// Import Axios to fetch data from MusixMatch API
import axios from 'axios'

const context = createContext(null)


const MusixMatchProvider = ({ children }) => {

  const [countryCode, setCountryCode] = useState("CA")
  const [artistList, setArtistList] = useState([])
  const [favAlbums, setFavAlbums] = useState([])

  // Initial Load with Top 10 Artists from Canada
  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country=${countryCode}&apikey=${
      process.env.REACT_APP_MM_KEY
    }`)
      .then(res => {
        setArtistList(res.data.message.body.artist_list)
      })
      .catch(err => console.log(err))
  }, []);
  return (
    <context.Provider value={{ countryCode, setCountryCode, artistList, setArtistList, favAlbums, setFavAlbums }}>
      {children}
    </context.Provider>
  )
}

MusixMatchProvider.context = context

export default MusixMatchProvider
