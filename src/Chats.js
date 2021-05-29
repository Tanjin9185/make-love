import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Chats.css";
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Chats() {
    return (
        <div className="chats">
            <div className="chats_header">
                <Avatar className="chats_avatar"/>
                <div className="chats_search">
                    <SearchIcon/>
                    <input placeholder = "Find Friends" type="text" />
                </div>
                <ChatBubbleIcon className="chats_chatIcon" />
            </div>

            <div className="chat_posts">
                
            </div>

        </div>
    )
}

export default Chats;
