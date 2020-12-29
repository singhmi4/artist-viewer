import React from 'react'

// Components
import AlbumList from '../components/data/albums/AlbumList'

const Albums = (props) => {
  const artist_id = props.match.params.artist_id
  return (
    <AlbumList artist_id={artist_id} />
  )
}

export default Albums
