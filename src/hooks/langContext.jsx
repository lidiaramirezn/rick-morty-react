import React, { useState } from 'react';
import messagesEN from '../lang/en.json';
import messagesES from '../lang/es.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
	let defaultLocale;

	let defaultMessage;
	const lang = localStorage.getItem('lang');

	defaultLocale = lang ? lang : 'en';
	defaultMessage = (lang && lang === 'es') ? messagesES : messagesEN;

	const [ messages, setMessages ] = useState(defaultMessage);
	const [ locale, setLocale ] = useState(defaultLocale);

	const setLanguage = (language) => {
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

	return (
		<langContext.Provider value={{setLanguage: setLanguage}}>
			<IntlProvider locale={locale} messages={messages}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}

export { LangProvider, langContext };