const highAndLow = (numbers) => {
	numbers = numbers.split(' ');
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

export default highAndLow;