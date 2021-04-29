import axios from 'axios';

export const getAllPosts = async () => {
    return await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    ).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
}

export const getSinglePost = async (postId) => {
    return await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + postId
    ).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

