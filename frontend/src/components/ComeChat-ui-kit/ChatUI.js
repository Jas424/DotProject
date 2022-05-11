import React from 'react';
import { CometChatUI, CometChatConversationList } from './cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import './ChatUI.css'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const ChatUI = () => {


    const { currentUser } = useAuth();
    const navigate = useNavigate()


    return (
        <>
            {
                currentUser.multiFactor.user ?
                    <>
                        <div className="container-fluid">
                            <div className='chatContainer'>
                                <CometChatUI />
                            </div>
                        </div>
                    </>
                    :

                    navigate('/login')

            }
        </>
    );
};

export default ChatUI;