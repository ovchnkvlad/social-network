import React from 'react';

const MessageItem = ({id, text, date}) => {
    return (
        <div className='message-item-wrapper'>
            <div className="message-item" id={id}>
                <div className="message-avatar">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width='50'/>
                </div>
                <div className="message-description">
                    <div className="message-text">
                        {text}
                    </div>
                    <div className="message-date">
                        {date}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MessageItem;