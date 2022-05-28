import {addPostCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;