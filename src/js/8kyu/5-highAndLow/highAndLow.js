const highAndLow = (numbers) => {
	const array = numbers.split(' ')
		.sort((a, b) => {
			return a - b;
		});
	
	const arrayLength = array.length;
	const arrayHigh = array[arrayLength -1];
	const arrayLow = array[0];
	
	
	
	return `${arrayHigh} ${arrayLow}`;
};

export default highAndLow;