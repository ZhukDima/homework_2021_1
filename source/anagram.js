'use strict';

/**
 * Функция разбивает массив слов на группы слов-анаграмм
 *
 * @param {Array} arrword - массив слов
 * @return {Array} - группы слов-анаграмм
 */
const anagram = arrword => {
    if (!Array.isArray(arrword)) {
        return [];
    }
    let anagToArr = {};
    arrword.forEach(word => {
        if (typeof word === 'string') {
            let anag = [...word].sort().join('');
            anagToArr[anag] = anagToArr[anag] != undefined
                ? anagToArr[anag].concat(word)
                : [word];
        }
    });
    return Object.keys(anagToArr)
        .map(elem => anagToArr[elem])
        .filter(elem => elem.length > 1)
        .map(elem => elem.sort())
        .sort();
};
