const DEVELOPERS = require('./developers');
const { getRandomInt, print } = require('./utils');

function getPairs() {
	const devs = DEVELOPERS.slice(0);
	const pairs = [];
	while (devs.length >= 2) {
		const firstIndex = getRandomInt(devs.length);
		const first = devs.splice(firstIndex, 1)[0];

		const secondIndex = devs.findIndex(
			dev => dev.team !== first.team && dev.location != first.location
		);
		if (secondIndex === -1) {
			return null;
		}
		const second = devs.splice(secondIndex, 1)[0];

		pairs.push({ first, second });
	}
	return pairs;
}

function generatePairs() {
	const MAX_ITERATIONS = 1000;
	let i = 0;
	while (i < MAX_ITERATIONS) {
		const pairs = getPairs();
		if (pairs) {
			return pairs;
		}
		i++;
	}
}

print(generatePairs());
