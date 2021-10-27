import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Posts.css'
const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    const deletePost= id =>{
        const prossed = window.confirm('Are you sure?')
        if(prossed){
            const url = `http://localhost:5000/posts/${id}`
            fetch(url ,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    const remainingPosts= posts.filter(post=>post._id!==id)
                    setPosts(remainingPosts);
                }
            })
        }
        
    }

    return (
        <div>
            <h1>user posts</h1>
            <div className='posts'>
                {
                    posts.map(post=><div className={post} key={post._id}>
                        <h1>{post.user}</h1>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <Link to={`/post/update/${post._id}`}>
                            <button>Update</button> 
                        </Link>
                        <button onClick={ () => deletePost(post._id)}>Delete</button>
                    </div>)
                }
               
            </div>
        </div>
    );
};

export default Posts;