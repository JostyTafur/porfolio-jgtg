import english from './en.json'
import spanish from './es.json'

const LANGUAJES = {
    ENGLISH: 'en',
    SPANISH: 'es'
}

export const geti18n = ({currentLocale = "es"} : { currentLocale: string | undefined}) => {
    if (currentLocale === LANGUAJES.ENGLISH) return english
    if (currentLocale === LANGUAJES.SPANISH) return spanish
    return spanish
}