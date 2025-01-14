import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'

function ChatList({
    w = '100%',
    chats = [],
    chatId,
    onlineUsers = [],
    newMessageAlert = [{
    chatId: '1',
    count:0
}],
    handleDeleteChat
}) {
    return (
        <Stack width={w} direction={'column'}>
            {
                chats?.map((data) => {
                    return <ChatItem/>
                })
            }
            
        </Stack>
    )
}

export default ChatList