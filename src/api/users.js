import axios from 'axios';

export const getSingleUser = async (userId) => {
    return await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
}