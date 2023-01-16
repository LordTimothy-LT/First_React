import React, {useState, uesEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ContactUs() {
    const[post, setPost] = useState({});

    const baseUrl = 'http://jsonplaceholder.typicode.com/posts/1';

    const getPost = useCallback(()=>{
        axios.get(baseUrl)
        .then((response)=>{
            setPost(response.data)
        })
    }, [])

    useEffect(()=>{
        getPost()
    }, [getPost])

    return(
        <div style={{backgroundColor: 'blue' ,  color: 'yellow', fontSize: '30px', fontWeight: '700'}}>
        ContactUs
        <Link to='/product' state={{userId: post.userId, id: post.id, title: post.title, body: post.body}}/>
        </div>
    )
}

export default ContactUs