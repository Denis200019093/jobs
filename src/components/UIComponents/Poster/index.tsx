import React from 'react'

const Poster: React.FC<{posterURL?: string}> = ({posterURL}) => {
  return (
    <img
      src={posterURL}
      alt='alt'
      style={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'left',
        position: 'absolute',
        borderRadius: '5px',
        top: 0,
        left: 0
      }}
    />
  )
}

export default Poster