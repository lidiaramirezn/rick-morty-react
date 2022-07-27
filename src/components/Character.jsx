import React from 'react'

export const Character = ({ image, name, species, status, location }) => {
  return (
    <div className="card">
      <figure className="card__figure">
        <img className="card__image" src={ image } alt="" />
      </figure>
      <section className="card__information">
        <p className="card__name">{ name }</p>
        <p className="card__status"> • { status } - { species }</p>
        <p className="card__location">
          <span className="card__location--subtitle">Last known location:</span> 
          <span>{ location }</span>
        </p>
      </section>      
    </div>
  )
}
