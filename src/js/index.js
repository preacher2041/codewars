import positiveSum from './8kyu/2-positiveSum/positiveSum';

const array = [1,-2,3,4,5];

function init() {
    console.log('Positive Sum: ', positiveSum(array));
}

(function () {
    document.addEventListener('DOMContentLoaded', function(){
        init();
    })
})();