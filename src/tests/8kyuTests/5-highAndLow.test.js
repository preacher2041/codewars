import highAndLow from '../../js/8kyu/5-highAndLow/highAndLow';

test ('Return the highest abd lowest integers in a given string.', () => {
	expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toBe('542 -214');
});