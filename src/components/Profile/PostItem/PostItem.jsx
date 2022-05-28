import React from 'react';

const PostItem = ({id, message,time}) => {


    return (<div className='post-item-wrapper'>
        <div id={id} className="post-item">
            <div className="post-thumbnail">
                <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt=""
                     width='50px'/>
            </div>
            <div className="post-details">
                <div className="post-date">{time}</div>
                <div className="post-text">
                    {message}
                </div>
            </div>
        </div>
    </div>)
};

export default PostItem;