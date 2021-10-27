import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';


const Update = () => {
    const [post, setPost] = useState({})
    const [isUpdate, setIsUpdate] = useState(false);
    const {id}=useParams();
    useEffect(()=>{
       const url = `http://localhost:5000/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data)) 
    },[id])
    
    

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        fetch(`http://localhost:5000/posts/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result.modifiedCount)
            if(result.modifiedCount>0){
                setPost(data)
                setIsUpdate(true)
                reset()
            }
        });
        
    }
    
    return (
        <div>
            <h1>Update Post</h1>
            <h1>{post?.user}</h1>
            <h3>{post?.title}</h3>
            <h5>{post?.content}</h5>
            
            <form className='add-post' onSubmit={handleSubmit(onSubmit)} >
            <input type='text' defaultValue={isUpdate?'':post?.user} {...register("user")} placeholder='Enter name'/>
            <input type='text' defaultValue={isUpdate?'':post?.title} {...register("title")} placeholder='Enter title'/>
            <textarea  defaultValue={isUpdate?'':post?.content} {...register("content")} placeholder='Write post'/>           
            <input type="submit" />
            </form>
        </div>
    );
};

export default Update;