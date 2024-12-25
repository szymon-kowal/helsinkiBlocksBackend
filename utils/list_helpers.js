let _ = require('lodash');

const dummy = (blogs) => {
    return 1;
};

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const getFavourtieBlog = (blogs) => {
    if (!blogs.length) return null;
    return blogs.reduce((max, blog) => {
        return blog.likes > max.likes ? blog : max;
    }, blogs[0]);
};

const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return null;
    }
    const groupByAuthorBlogs = _.groupBy(blogs, 'author');
    const mapBlogsCount = _.map(groupByAuthorBlogs, (value, author) => {
        return {
            author,
            blogsCount: value.length,
        };
    });
    return _.maxBy(mapBlogsCount, (item) => item.blogsCount).author;
};

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return null;
    }
    const groupByAuthorBlogs = _.groupBy(blogs, 'author');
    const mapBlogsCount = _.map(groupByAuthorBlogs, (blogs, author) => {
        let sumLikes = 0;
        blogs.forEach((blog) => {
            sumLikes += blog.likes;
        });
        return {
            author,
            sumLikes: sumLikes,
        };
    });
    return _.maxBy(mapBlogsCount, (item) => item.sumLikes).author;
};

module.exports = {
    dummy,
    totalLikes,
    getFavourtieBlog,
    mostBlogs,
    mostLikes,
};
