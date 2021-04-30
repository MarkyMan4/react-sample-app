import React from 'react';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../api/posts';
import PostSummary from '../components/postSummary';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(res => {
            setPosts(res);
        });
    }, []);

    return (
        <div>
            <h1 className="text-center">Home</h1>
            {posts.map((p, i) => {
                return (
                    <PostSummary key={i} postId={p.id} title={p.title} userId={p.userId}></PostSummary>
                )
            })}
        </div>
    )
}

export default Home;
