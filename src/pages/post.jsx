import React from 'react';
import { useEffect, useState } from 'react';
import { getSinglePost } from '../api/posts';

function Post(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        getSinglePost(props.match.params.postId).then(res => {
            setTitle(res.title);
            setBody(res.body);
        });
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <h5>{body}</h5>
        </div>
    )
}

export default Post;
