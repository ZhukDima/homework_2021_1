'use strict';

/**
 * Функция разбивает массив слов на группы слов-анаграмм
 *
 * @param {Array} arrWord - массив слов
 * @return {Array} - группы слов-анаграмм
 */
const anagram = (arrWord) => {
    if (!Array.isArray(arrWord)) {
        throw new TypeError('Ожидался массив');
    }
    let anagToArr = arrWord.reduce((accumulator, word) => {
        if (typeof word !== 'string') {
            throw new TypeError('Ожидался массив строк')
        }
        let anag = [...word].sort().join('');
        accumulator[anag] = accumulator[anag] !== undefined
            ? accumulator[anag].concat(word)
            : [word];
        return accumulator
    }, {});
    return Object.keys(anagToArr)
        .map(elem => anagToArr[elem])
        .filter(elem => elem.length > 1)
        .map(elem => elem.sort())
        .sort();
};
