import menu from './menu'
import level from './level'
import chips from './chips'
import uiElements from './uiElements'

//TODO: we need a better way to merge all the locales

// Merge all the locales into one object
export default {
  en: { ...menu.en, ...level.en, ...chips.en, ...uiElements.en },
  de: { ...menu.de, ...level.de, ...chips.de, ...uiElements.de },
  ua: { ...menu.ua, ...level.ua, ...chips.ua, ...uiElements.ua },
  ru: { ...menu.ru, ...level.ru, ...chips.ru, ...uiElements.ru }
}