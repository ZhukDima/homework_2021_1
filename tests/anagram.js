'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const testCasesCorrect = [
			{
				input: [
					'кот', 'пила', 'барокко',
					'стоп', 'ток', 'кошка',
					'липа', 'коробка', 'пост'
				], output: [
					['барокко', 'коробка'],
					['кот', 'ток'],
					['липа', 'пила'],
					['пост', 'стоп']
				]
			},
			{
				input: [
					'мама', 'мыла', 'раму', 'рама', 'мыла', 'маму',
				], output: [
					['мыла', 'мыла'],
				]
			},
			{
				input: [
					'213', '321', '123', '567', '756', '657',
					'231', '132', '312', '657', '765', '576',
					'вот', 'ещё', 'пару', 'вот', 'каких-то',
					'вот', 'таких', 'тестов', 'тов', 'востет',
					'iu9', '9ui', '9iu', 'love', 'ovel', 'veol'
				], output: [
					['123', '132', '213', '231', '312', '321'],
					['567', '576', '657', '657', '756', '765'],
					['9iu', '9ui', 'iu9'],
					['love', 'ovel', 'veol'],
					['востет', 'тестов'],
					['вот', 'вот', 'вот', 'тов'],
				]
			},
		]
		testCasesCorrect.forEach((testCase) =>
			assert.deepEqual(anagram(testCase.input), testCase.output));
	});

	QUnit.test('Функция выбрасывает ошибку на невалидных входных данных', function (assert) {
		const testCasesWithTypeError = [
			{ input: {} },
			{ input: '123' },
			{ input: 123 },
			{ input: [123, 123] },
			{ input: undefined },
			{ input: null },
		];
		testCasesWithTypeError.forEach((testCase) =>
			assert.throws(() => anagram(testCase.input), TypeError));
	});
});
