import React from 'react';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../api/posts';
import { getSingleUser } from '../api/users';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(res => {
            setPosts(res);
        });

        // need to get usernames for posts as well
        // const username = getUserName(1).then(res => console.log(res));
        
    }, []);

    const getUserName = async (userId) => {
        return getSingleUser(userId).then(res => res.name);
    }

    return (
        <div>
            <h1 className="text-center">Home</h1>
            {posts.map((p, i) => {
                return (
                    <div key={i} className="post-card center shadow mt-4">
                        <div className="m-2">
                        <Link to={"/post/" + p.id} params={{postId: p.id}}><h3>{p.title}</h3></Link>
                        {/* <h5>{getUserName(p.userId)}</h5> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;
