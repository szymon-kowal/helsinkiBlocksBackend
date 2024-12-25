const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helpers');

test('dummy returns one', () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    assert.strictEqual(result, 1);
});

describe('Total likes fnc tests', () => {
    test('Total likes returns 0 if test array is empty', () => {
        const blogs = [];

        const result = listHelper.totalLikes(blogs);
        assert.strictEqual(result, 0);
    });
    test('Total likes returns correct value for single element', () => {
        const blogs = [
            {
                _id: '67648e6d8cd5935ce48d70d3',
                title: 'test Title',
                author: 'test author',
                url: 'test url',
                likes: 123,
                __v: 0,
            },
        ];

        const result = listHelper.totalLikes(blogs);
        assert.strictEqual(result, 123);
    });
    test('Total likes returns correct value for multiple elements', () => {
        const blogs = [
            {
                _id: '67648e6d8cd5935ce48d70d3',
                title: 'test Title',
                author: 'test author',
                url: 'test url',
                likes: 1,
                __v: 0,
            },
            {
                _id: '676c117fb9a4f84825e9b59a',
                title: 'testc',
                author: 'testb',
                url: 'testa',
                likes: 2,
                __v: 0,
            },
            {
                _id: '676c1184b9a4f84825e9b59c',
                title: 'testc6',
                author: 'testb6',
                url: 'testa6',
                likes: 3,
                __v: 0,
            },
        ];

        const result = listHelper.totalLikes(blogs);
        assert.strictEqual(result, 6);
    });
});

describe('Get favourite blog fnc tests', () => {
    const blogs = [
        {
            _id: '67648e6d8cd5935ce48d70d3',
            title: 'test Title',
            author: 'test author',
            url: 'test url',
            likes: 1,
            __v: 0,
        },
        {
            _id: '676c117fb9a4f84825e9b59a',
            title: 'testc',
            author: 'testb',
            url: 'testa',
            likes: 2,
            __v: 0,
        },
        {
            _id: '676c1184b9a4f84825e9b59c',
            title: 'testc6',
            author: 'testb6',
            url: 'testa6',
            likes: 3,
            __v: 0,
        },
    ];
    test('Function returns null if there is no blogs', () => {
        const result = listHelper.getFavourtieBlog([]);
        assert.strictEqual(result, null);
    });
    test('Function returns same blog if only one blog is being added', () => {
        const result = listHelper.getFavourtieBlog([blogs[0]]);
        assert.deepStrictEqual(result, blogs[0]);
    });
    test('Function returns correct blog with most likes', () => {
        const result = listHelper.getFavourtieBlog(blogs);
        assert.deepStrictEqual(result, blogs[2]);
    });
});

// Unit Tests
describe('mostBlogs function tests', () => {
    const blogs = [
        {
            _id: '67648e6d8cd5935ce48d70d3',
            title: 'test Title',
            author: 'test author',
            url: 'test url',
            likes: 1,
            __v: 0,
        },
        {
            _id: '676c117fb9a4f84825e9b59a',
            title: 'testc',
            author: 'testb',
            url: 'testa',
            likes: 2,
            __v: 0,
        },
        {
            _id: '676c1184b9a4f84825e9b59c',
            title: 'testc6',
            author: 'test author',
            url: 'testa6',
            likes: 3,
            __v: 0,
        },
    ];
    test('returns null if blogs array is empty', () => {
        const result = listHelper.mostBlogs([]);
        assert.strictEqual(result, null);
    });

    test('returns correct author with most blogs', () => {
        const result = listHelper.mostBlogs(blogs);
        assert.deepStrictEqual(result, 'test author');
    });
});

describe('mostLikes function tests', () => {
    const blogs = [
        {
            _id: '67648e6d8cd5935ce48d70d3',
            title: 'test Title',
            author: 'test author',
            url: 'test url',
            likes: 1,
            __v: 0,
        },
        {
            _id: '676c117fb9a4f84825e9b59a',
            title: 'testc',
            author: 'testb',
            url: 'testa',
            likes: 2,
            __v: 0,
        },
        {
            _id: '676c1184b9a4f84825e9b59c',
            title: 'testc6',
            author: 'test author',
            url: 'testa6',
            likes: 3,
            __v: 0,
        },
    ];
    test('returns null if blogs array is empty', () => {
        const result = listHelper.mostLikes([]);
        assert.strictEqual(result, null);
    });

    test('returns correct author with most likes', () => {
        const result = listHelper.mostLikes(blogs);
        assert.deepStrictEqual(result, 'test author');
    });
});
