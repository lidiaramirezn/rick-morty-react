import React from 'react'

export const Character = ({ image, name, species, status }) => {
  return (
    <div className="card">
      <img src={ image } alt="" />
    </div>
  )
}
