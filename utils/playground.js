let _ = require('lodash');

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

console.log(mostBlogs(blogs));
