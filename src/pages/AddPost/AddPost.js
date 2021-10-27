import React from 'react';
import { useForm } from "react-hook-form";
import './AddPost.css'

const AddPost = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('http://localhost:5000/posts',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('added successfully');
                reset();
            }
        })
        
        
    } 
    return (
        <div>
            <h1>Add post</h1>          
            <form className='add-post' onSubmit={handleSubmit(onSubmit)} >
            <input type='text' {...register("user")} placeholder='Enter name'/>
            <input type='text' {...register("title")} placeholder='Enter title'/>
            <textarea {...register("content")} placeholder='Write post'/>           
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddPost;