import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import '@styles/character.css'
import human from '@assets/human.svg';
import alien from '@assets/alien.svg';
import robot from '@assets/robot.svg';
import noImage from '@assets/no-image.svg';
import humanoid from '@assets/humanoid.svg';

export const Character = ({ image, name, species, status, location }) => {

  const [ imgSrc, setImgSrc ] = useState()

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImgSrc(image);
    }
  }, [ image ]);

  const dataSpecies = {
    'alien': alien,
    'human': human,
    'humanoid': humanoid,
    'robot': robot,
    'default': noImage
  }

  const getSpecie = ( specie ) => {
    return dataSpecies[ specie.toLowerCase() ] || dataSpecies[ 'default' ];
  }

  const statusClass = status === 'unknown' ? "card__status-point--grey" : 
                      status === 'Dead'  ? "card__status-point--red" : "card__status-point--green";

  return (
    <div className="card">
      <figure className={`card__figure ${imgSrc ? "card__figure--animation": "" }` }>
        <img loading="lazy" src={ image } alt={ imgSrc || ""  } />
      </figure>
      <section className="card__information">
        <p className="card__name">{ name }</p>
        <p className="card__status"> 
          <span 
            className={`card__status-point ${ statusClass}` }>
          </span>
          <FormattedMessage id={`${ status }`}/> - <FormattedMessage id={`${ species }`}/> 
          <img 
            className="card__specie-icon" 
            src={ getSpecie( species) } 
            alt="icono de especie" />
        </p>
        {/* <p className="card__location">
          <span className="card__location--subtitle">
            <FormattedMessage id="location"/>
          </span> 
          <span>{ location }</span>
        </p> */}
      </section>      
    </div>
  )
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
