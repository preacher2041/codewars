import positiveSum from '../../js/8kyu/2-positiveSum/positiveSum';

test ('Return the 1-sum of all of the positives integers in a given array.', () => {
	expect(positiveSum([1,2,3,4,5])).toBe(15);
	expect(positiveSum([1,-2,3,4,5])).toBe(13);
	expect(positiveSum([])).toBe(0);
	expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
	expect(positiveSum([-1,2,3,4,-5])).toBe(9);
});