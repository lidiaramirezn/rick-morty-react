import React, { useEffect, useState } from 'react';
import messagesEN from '../lang/en.json';
import messagesES from '../lang/es.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {

	const lang = localStorage.getItem('lang');

	let defaultLocale = lang ? lang : 'en';
	let defaultMessage = (lang && lang === 'es') ? messagesES : messagesEN;

	const [ messages, setMessages ] = useState(defaultMessage);
	const [ locale, setLocale ] = useState(defaultLocale);

	const setLanguage = (language) => {
		console.log('setLanguage', language)
		if(language === 'es') {
			setMessages(messagesES);
			localStorage.setItem('lang', 'es')
			setLocale('es');
		} else {
			setMessages(messagesEN); 
			localStorage.setItem('lang', 'en');
			setLocale('en');
		}
	}

	useEffect(() => {
		if(!localStorage.getItem('lang')) {
			localStorage.setItem('lang', 'en');
		}		 
	}, [])
	

	return (
		<langContext.Provider value={{setLanguage: setLanguage}}>
			<IntlProvider locale={locale} messages={messages}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}

export { LangProvider, langContext };