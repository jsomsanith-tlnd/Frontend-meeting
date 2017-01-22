function print(pairs) {
	console.log(`------------------------------------`);
	console.log(`FIRST\t\t|\tSECOND`);
	console.log(`------------------------------------`);
	pairs.forEach((pair) => {
		const firstName = pair.first.name;
		const secondName = pair.second.name;
		const firstSpace = firstName.length >= 8 ? '\t' : '\t\t';
		console.log(`${firstName}${firstSpace}|\t${secondName}`)
	});
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

module.exports = {
	getRandomInt,
	print,
};
