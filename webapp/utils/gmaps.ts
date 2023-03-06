
export function getGMapsLink(street, no, zip, city) {
  return `https://www.google.com/maps/search/?api=1&query=${street}%20${no},%20${zip}%20${city}`
}