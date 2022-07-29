import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export const Character = ({ image, name, species, status, location }) => {
  return (
    <div className="card">
      <figure className="card__figure">
        <img className="card__image" src={ image } alt={ name } />
      </figure>
      <section className="card__information">
        <p className="card__name">{ name }</p>
        <p className="card__status"> • 
          <FormattedMessage id={`${status}`}/> - <FormattedMessage id={`${species}`}/> 
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
