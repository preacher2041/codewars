const positiveSum = (array) => {
	const positiveArray =  array.filter(item => item > 0);
	
	let sum = 0;
	
	positiveArray.forEach(item => {
		sum = sum + item;
	});
	
	return sum;
};

export default positiveSum;