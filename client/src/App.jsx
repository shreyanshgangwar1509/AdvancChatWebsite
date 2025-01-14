import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ChatBot from './components/ChatBot';
import ProtectRoutes from './components/auth/ProtectRoutes';
import Loader from './components/layout/Loader';



const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
const NotFound = lazy(() => import('./pages/NotFound'));

let user = true;


function App() {
  return (
    
      
      <Router>
      <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path='/login'
              element={
                <ProtectRoutes user={!user} redirect='/'>
                <Login />
                </ProtectRoutes>
              } />
            <Route element={<ProtectRoutes user={user} />}>
                <Route path='/' element={<Home />} />
                <Route path='/chat/:chatId' element={<Chat />} />
                <Route path='/groups' element={<Groups />} />
                <Route path='/chatbot' element={<ChatBot />} />
            </Route>
            <Route path='*' element={<NotFound/>}/>
            </Routes>
      </Suspense>
      </Router>
    
  )
}

export default App
