export default {
	id: 'greet',
	handler: (router) => {
		router.get('/', (req, res) => res.send('He11o, Wor1d!'));
		router.get('/intro', (req, res) => res.send('Nice to meet you.'));
		router.get('/goodbye', (req, res) => res.send('Goodbye!'));
	},
};

