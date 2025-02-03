function serverMock(latency, cb) {
	const products = Array.from({length: random(5, 10)})
		.map(() => ({name: getRandomProductName(), price: getRandomPrise}));

setTimeout(() => {
	cb(products);
}, latency)
};

function cb(products) {

}

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const productNames = [
	'Орехи', 'Морковь', 'Спаржа', 'Печенье', 'Наушники', 'Молоко',
	'Сок', 'Контейнер', 'JS-разработчик', 'Прямые руки', 'Водка',
];

const getRandomProductName = () => {
    return productNames[random(0, productNames.length - 1)];
}

const getRandomPrise = () => random(300, 1000);

serverMock(3000, (products) => {
	console.log(products);
});