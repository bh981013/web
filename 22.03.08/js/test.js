'use strict';
/*eslint-env es6*/

function p1() {
    let elements = document.querySelectorAll('ul > li:last-child');

    for (let elem of elements) {
        alert(elem.innerHTML); // "1-2", "2-2"
    }
}

p1();