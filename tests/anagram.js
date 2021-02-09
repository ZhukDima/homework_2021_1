'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция не падает на невалидных входных данных', function (assert) {
		assert.deepEqual(anagram({}), []);
		assert.deepEqual(anagram('123'), []);
		assert.deepEqual(anagram(123), []);
		assert.deepEqual(anagram([123, 123]), []);
		assert.deepEqual(anagram(undefined), []);
		assert.deepEqual(anagram(null), []);
	});
});
