import express from 'express';
import { acceptRequest, GetAllNotifications, getMyFriends, getMyprofile, login, logout, searchUser, sendRequest, SignUp } from '../controllers/user';
import { isAuthenticated } from '../middlewares/auth';
import { singleAvatar } from '../middlewares/multer';

const  router = express.Router();

router.post('/signup',singleAvatar, SignUp);
router.post('/login', login);
// now user should be logged in 
// router.use(isAuthenticated); after this all routes usees is authenticated auto amtically 
router.get('/me', isAuthenticated, getMyprofile);
router.get('/logout', isAuthenticated, logout);
router.get('/search',searchUser);
router.put('/send-request', sendRequest);
router.put('/accept-request', acceptRequest);
router.get('/notifications', GetAllNotifications);
router.get('/friends', getMyFriends);
export default router;
