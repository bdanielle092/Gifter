import React, {useState} from "react";
import "../Posts/Post.css";
import { Form, Col, Button, Row } from 'react-bootstrap';
import React from 'react';


function PostForm(props) {
    const [post, setPost] = useState({ userId: parseInt(sessionStorage.activeUserID), title: "", url: "", caption: "" });
    let newVariable = props.placeConstruct;

    const handleFieldChange = evt => {
        const stateToChange = {...post}
        stateToChange[evt.target.id] = evt.target.value;
        setPost(stateToChange);
    };

    const constructNewPost = evt => {
        evt.preventDefault();
        addPost(post).then(() => {
            getAllPosts()
        })
    };

   return (
       <>
       <select>
           <button type="button"
               className="btn"
               onChange={handleFieldChange}>
                   Add Post
           </button>
       </select>

       <form>
           <fieldset>
               <div className="formgrid">
                   <input
                   type="text"
                   required
                   onChange={handleFieldChange}
                   id="userId"
                   placeholder="Post UserId"
                   />
                   <label hmtlFor="UserId">UserId</label>

                   <input
                   type="text"
                   required
                   onChange={handleFieldChange}
                   id="title"
                   placeholder="Post Title"
                   />
                   <label hmtlFor="title">Title</label>

                   <input
                   type="text"
                   required
                   onChange={handleFieldChange}
                   id="url"
                   placeholder="Post Url"
                   />
                   <label hmtlFor="url">Url</label>

                   <input
                   type="text"
                   required
                   onChange={handleFieldChange}
                   id="caption"
                   placeholder="Post Caption"
                   />
                   <label hmtlFor="caption">Caption</label>
                   


               </div>
               <div>
                   <button
                   type="button"
                   disable={isLoading}
                   onClick={constructNewPost}
                   >Submit</button>
               </div>
           </fieldset>
       </form>
       </>
   )
    
}
