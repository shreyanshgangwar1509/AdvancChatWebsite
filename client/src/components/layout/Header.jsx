import { Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuIcon, Notifications as NotificationIcon, Search as SearchIcon } from "@mui/icons-material";
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = lazy(() => import("../specific/Search"))
const Notification = lazy(() => import("../specific/Notification"))
const NewGroups = lazy(() => import("../specific/NewGroups"))

function Header() {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [IsNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setisNotification] = useState(false);
    
    const handlemoblie = () => {
        console.log("Mobile view");
        setMobile((prev)=>!prev);
        
    }
    const OpenNotification = () => {
        setisNotification((prev)=>!prev);
    }
    const openSearchDialog = () => {
        setIsSearch((prev)=>!prev);
    }
    const openNewGroup = () => {
        setIsNewGroup((prev)=>!prev);
    }
    const NavigateToGroup = () => {
        navigate('/groups')
    }
    const logoutHnadler = () => {
        
    }
    return (
        <>
    <Box sx={{ flexGrow: 1 }} height={'4rem'}>
        <AppBar position="static" sx={{
            bgcolor:'#000000'
        }} >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        display: {
                        xs:'none', sm:'block'
                    }
                }}>
                    वार्तालाप
                </Typography>
                <Box sx={{
                    display: {
                        xs: 'block', sm: 'none'
                    }
                }}>
                    <IconButton color="inherit" onClick={handlemoblie}>
                        <MenuIcon/>
                    </IconButton>
                    
                    </Box>
                    <Box sx={{ 
                        flexGrow:1
                    }} />
                    <Box>
                        <IconBtn title='search' icon={<SearchIcon/>} onclick={openSearchDialog}/>
                        <Tooltip title='New Group'>
                            <IconButton color="inherit" size='large' onClick={openNewGroup}>
                                <AddIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Manage Group'>
                            <IconButton color="inherit" size='large' onClick={NavigateToGroup}>
                                <GroupIcon/>
                            </IconButton>
                        </Tooltip>
                        <IconBtn title='notification' icon={<NotificationIcon/>} onclick={OpenNotification}/>
                        <IconBtn title='logout' icon={<LogoutIcon/>} onclick={logoutHnadler}/>
                    </Box>
            </Toolbar>
            </AppBar>
            </Box>

            {isSearch && <Suspense fallback={<Backdrop open />}><Search /></Suspense>}
            {IsNewGroup && <Suspense fallback={<Backdrop open/>}><NewGroups /></Suspense>}
            {isNotification && <Suspense fallback={<Backdrop open/>}><Notification /></Suspense>} 
            </>
    )
}
const IconBtn = ({ title, icon, onclick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size='large' onclick={onclick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header