const isSquare = (n) => {
	const squareSum = Math.sqrt(n);
	const squareCheck = squareSum % 1;
	
	if (squareCheck === 0) {
		return true;
	} else {
		return false;
	}
};

export default isSquare;