import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Chats.css";
import SearchIcon from '@material-ui/icons/Search';

function Chats() {
    return (
        <div className="chats">
            <div className="chats_header">
                <Avatar className="chats_avatar"/>
                <div className="chats_search">
                    <SearchIcon/>
                </div>
            </div>
        </div>
    )
}

export default Chats
