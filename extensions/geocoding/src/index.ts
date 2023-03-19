import { defineHook } from '@directus/extensions-sdk';

interface Adress {
	street: string;
	no: string;
	city: string;
	zip: string;
}

interface GeoJSON {
	type: 'Point';
	coordinates: [number, number];
}

function geocode(adress : Adress):GeoJSON {
	// Geocode the adress and return the coordinates
	return {
		type: 'Point',
		coordinates: [9.722082076194539, 52.384651362832585]
	};
}

export default defineHook(({ filter }) => {
	filter('items.create', async (item) => {
		console.log(item);
		if (!('street' in item && 'city' in item && 'zip' in item && 'no' in item)) return item;

		const address: Adress = {
			street: item.street,
			no: item.no,
			city: item.city,
			zip: item.zip,
		};

		item.geojson = geocode(address);
		return item;
	})
});