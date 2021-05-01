import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSingleUser } from '../api/users';

const getUserName = async (userId) => {
    return getSingleUser(userId).then(res => res.name);
};

function PostSummary(props) {
    const [postId, setPostId] = useState(0);
    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        setPostId(props.postId);
        setTitle(props.title);

        getUserName(props.userId).then(res => {
            setUsername(res);
        });
    }, [props.postId, props.title, props.userId]);


    return (
        <div className="post-card center shadow mt-4">
            <div className="m-2">
            <Link to={"/post/" + postId}><h3>{title}</h3></Link>
            <h5>{username}</h5>
            </div>
        </div>
    )
}

export default PostSummary;