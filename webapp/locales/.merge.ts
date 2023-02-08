import level from './level'
import chips from './chips'
import uiElements from './uiElements'

//TODO: we need a better way to merge all the locales

// Merge all the locales into one object
export default {
  en: { ...level.en, ...chips.en, ...uiElements.en },
  de: { ...level.de, ...chips.de, ...uiElements.de },
  ua: { ...level.ua, ...chips.ua, ...uiElements.ua },
  ru: { ...level.ru, ...chips.ru, ...uiElements.ru }
}