import { Box, Stack, Typography } from "@mui/material"
import { memo } from "react"
import { Link } from "../style/styleComponent"

function ChatItem({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert, index = 0,
    handleDeleteChatOpen
}) {
    return (
        <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChatOpen(e,_id,groupChat)}>
            <div style={{
                display: "flex",
                alignItems: "conter",
                padding: '1rem',
                backgroundColor: sameSender ? "green" : "white",
                borderBottom: "1px solid gray",
                justifyContent:'space-between'
            }}>
                
                <Stack>
                    <Typography >
                        {name}
                    </Typography>
                    {
                        newMessageAlert && (
                            <Typography>{newMessageAlert.count} New Message</Typography>
                        )
                    }
                </Stack>
                {
                    isOnline && (
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: 'green',
                                position: "absolute",
                                top: "50%",
                                right: '1rem',
                                transform:"translateY(-50%)",
                            }} />
                    )
                }
            </div>
        </Link>
    )
}

export default memo(ChatItem)