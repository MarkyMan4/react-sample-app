import React from 'react';
import { useEffect, useState } from 'react';
import { getSinglePost } from '../api/posts';

function Post(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        getSinglePost(props.match.params.postId).then(res => {
            setTitle(res.title);
            setBody(res.body);
        });

        console.log(props);
        setUsername(props.match.params.username);
    }, [props.match.params.postId, props.match.params.username]);

    return (
        <div>
            <h1>{title}</h1>
            <h5>{body}</h5>
            <h6>{username}</h6>
        </div>
    )
}

export default Post;
