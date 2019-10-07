import isSquare from '../../js/8kyu/2-isSquare/isSquare';

test ('Tests whether a given integer is a square.', () => {
	expect(isSquare(-1)).toBe(false);
	expect(isSquare(0)).toBe(true);
	expect(isSquare(3)).toBe(false);
	expect(isSquare(4)).toBe(true);
	expect(isSquare(25)).toBe(true);
	expect(isSquare(26)).toBe(false);
});