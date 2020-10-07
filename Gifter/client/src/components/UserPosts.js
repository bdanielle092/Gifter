import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {
    const { posts, getPostsByUser } = useContext(PostContext);
    const { id } = useParams();
    useEffect(() => {
        getPostsByUser(id);
    }, []);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default UserPosts;