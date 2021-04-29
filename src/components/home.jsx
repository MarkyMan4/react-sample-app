import React from 'react';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../api/posts';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(res => {
        setPosts(res);
        });
    }, []);

    return (
        <div>
            {posts.map((p, i) => {
                return (
                    <div key={i} className="post-card shadow mt-4">
                        <div className="m-2">
                        <Link to={"/post/" + p.id} params={{postId: p.id}}><h3>{p.title}</h3></Link>
                        <h5>{p.userId}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;
