import React, {useState} from 'react';
import messagesEN from '../lang/en.json';
import messagesES from '../lang/es.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
	let localePorDefecto;

	let defaultMessage;
	const lang = localStorage.getItem('lang');

	if(lang) {
		localePorDefecto = lang ? lang : 'en';
    defaultMessage = lang === 'es' ? messagesES : messagesEN;
	}

	const [ messages, setMessages ] = useState(defaultMessage);
	const [ locale, setLocale ] = useState(localePorDefecto);

	const setLanguage = (lenguaje) => {
		switch (lenguaje){
			case 'es':
				setMessages(messagesES);
				setLocale('es');
				localStorage.setItem('lang', 'es');
				break;
			case 'en':
				setMessages(messagesEN);
				setLocale('en');
				localStorage.setItem('lang', 'en');
				break;
			default:
				setMessages(messagesEN);
				setLocale('en');
				localStorage.setItem('lang', 'en');
		}
	}

	return (
    /*  */
		<langContext.Provider value={{setLanguage: setLanguage}}>
			<IntlProvider locale={locale} messages={messages}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}

export { LangProvider, langContext };