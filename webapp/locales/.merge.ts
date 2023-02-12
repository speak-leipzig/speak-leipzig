import languages from './languages'
import menu from './menu'
import level from './level'
import times from './times'
import chips from './chips'
import uiElements from './uiElements'

//TODO: we need a better way to merge all the locales

// Merge all the locales into one object
export default {
  en: { ...languages.en, ...menu.en, ...level.en, ...times.en, ...chips.en, ...uiElements.en },
  de: { ...languages.de, ...menu.de, ...level.de, ...times.de, ...chips.de, ...uiElements.de },
  ua: { ...languages.ua, ...menu.ua, ...level.ua, ...times.ua, ...chips.ua, ...uiElements.ua },
  ru: { ...languages.ru, ...menu.ru, ...level.ru, ...times.ru, ...chips.ru, ...uiElements.ru }
}