import findUnique from '../../js/7kyu/1-findUnique/findUnique';

test('find unique number (a number that is not repeated) in a given array', () => {
	expect(findUnique([1, 8, 4, 4, 6, 1, 8])).toBe(6);
	expect(findUnique([ 1234567 ])).toBe(1234567);
	expect(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ])).toBe(1);
	expect(findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ])).toBe(4);
	expect(findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ])).toBe(9);
});