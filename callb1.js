const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomPrise = () => random(300, 1000);
const getRandomProductName = () => {
    return productNames[random(0, productNames.length - 1)];
}



function serverMock(latency, cb) {
	const products = Array.from({length: random(5, 10)})
		.map(() => ({
			name: getRandomProductName(), 
			price: getRandomPrise(),
		}));

setTimeout(() => {
	cb(products);
}, latency)
};

const productNames = [
	'Орехи', 'Морковь', 'Спаржа', 'Печенье', 'Наушники', 'Молоко',
	'Сок', 'Контейнер', 'JS-разработчик', 'Прямые руки', 'Водка',
];

serverMock(3000, (products) => {
	console.log(products);
});