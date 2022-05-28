import React from 'react';
import PostItem from "../PostItem/PostItem";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    const onAddPostSubmit = (value) => {
        props.addNewPost(value.newPostMessage);
    }

    return (<div className="user-posts">

        <h2>My Posts</h2>
        <div className="add-new-post">
            <AddNewPostReduxForm onSubmit={onAddPostSubmit}/>
        </div>
        <div className="user-posts-history">
            {
                props.posts.map(item => <PostItem id={item.id} message={item.message} time={item.createdAt}/>)
            }
        </div>
    </div>)
};

const AddNewPostForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <Field component="textarea" placeholder="Enter message of your post" name="newPostMessage"/>
        <button className='btn'>Publish</button>
    </form>)
}

const AddNewPostReduxForm = reduxForm({
    form: 'AddNewPostForm'
})(AddNewPostForm);

export default MyPosts;