import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import flagEs from '@assets/es.svg';
import flagEn from '@assets/en.svg';
import '@styles/navbar.css';
import { langContext } from '../hooks';

export const Navbar = () => {
  const language = useContext(langContext);
  const lang = localStorage.getItem('lang');

  const flagClass = (value) => {
    return lang === value ? "navbar__flag--active" : "";
  };

  return (
    <div className="navbar">
        <h2 className="navbar__title">
          <FormattedMessage id="title" defaultMessage="Personajes"/>
        </h2>
        <div className="navbar__flags">
          <button 
            title="idioma español"
            className={ `navbar__flag--button ${ flagClass('es') }` }
            onClick={() => language.setLanguage('es')}>
            <span>ES</span>
            <img loading="lazy" className="navbar__flag" src={flagEs} alt="bandera española" />
          </button>
          <button 
            title="idioma inglés"
            className={ `navbar__flag--button ${ flagClass('en') }` }
            onClick={() => language.setLanguage('en')}>
            <span>EN</span>
            <img loading="lazy" className="navbar__flag" src={flagEn} alt="bandera de Estados unidos" />
          </button>
        </div>
      </div>
  )
}
