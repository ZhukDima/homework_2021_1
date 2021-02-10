'use strict';

/**
 * Функция разбивает массив слов на группы слов-анаграмм
 *
 * @param {Array.<string>} arrWord массив слов
 * @return {Array.<Array.<string>>} группы слов-анаграмм
 * @throws {TypeError}
 */
const anagram = (arrWord) => {
    if (!Array.isArray(arrWord)) {
        throw new TypeError('Array is expected');
    }
    const anagToArr = arrWord.reduce((accumulator, word) => {
        if (typeof word !== 'string') {
            throw new TypeError('Array of string was expected');
        }
        const anag = [...word].sort().join('');
        accumulator[anag] = accumulator[anag] !== undefined
            ? accumulator[anag].concat(word)
            : [word];
        return accumulator;
    }, {});
    return Object.keys(anagToArr)
        .map((elem) => anagToArr[elem])
        .filter((elem) => elem.length > 1)
        .map((elem) => elem.sort())
        .sort();
};
