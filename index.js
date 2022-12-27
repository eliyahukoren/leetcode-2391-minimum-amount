/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
module.exports = garbageCollection = function (garbage, travel) {
	const stack = [];
	let time = 0;
	let total = 0;

	garbage.forEach((g, i) => {
		let type = g.split("");
		time = i > 0 ? (time += travel[i - 1]) : 0;

		type.forEach((t) => {
			if (!stack[t]) {
				stack[t] = { travel: time, pick: 1 };
			} else {
				stack[t].travel = time;
				stack[t].pick += 1;
			}
		});
	});

	for (let k in stack) {
		total += stack[k].travel + stack[k].pick;
	}

	return total;
};
