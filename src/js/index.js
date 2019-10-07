import findUnique from '../js/7kyu/1-findUnique/findUnique'

const array1 = [1, 8, 4, 4, 6, 1, 8];
const array2 = [ 1234567 ];
const array3 = [ 1, 4, 4, 5, 5, 3, 3, 2, 2 ];
const array4 = [ 2, 2, 5, 5, 4, 3, 3, 1, 1 ];
const array5 = [ 3, 5, 5, 4, 4, 3, 2, 2, 9 ];

function init() {
    findUnique(array1);
    findUnique(array2);
    findUnique(array3);
    findUnique(array4);
    findUnique(array5);
}

(function () {
    document.addEventListener('DOMContentLoaded', function(){
        init();
    })
})();