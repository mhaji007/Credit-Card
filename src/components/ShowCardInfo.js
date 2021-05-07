import React from 'react'

function ShowCardInfo({cardInfoHandler}) {
  return (
    <button className="card__info" onClick={cardInfoHandler}>
      SHOW CARD INFORMATION
    </button>
  )
}

export default ShowCardInfo
