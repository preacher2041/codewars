const sortFunction = (a, b) => {
    return parseInt(a) - parseInt(b)
};

const sumTwoSmallestNumbers = (numbers) => {
    // Filter array to get the two smallest values
    const sortedArray  = numbers.sort(sortFunction);

    return (sortedArray[0] + sortedArray[1]);
};

export default sumTwoSmallestNumbers;