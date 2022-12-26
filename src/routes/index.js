import Newfeed from "~/pages/Newfeed";
import Profile from "~/pages/Profile";
import Login from "~/pages/Login";
import Register from "~/pages/Register"; 

//Public routes (ko cần đăng nhập)
const publicRoutes = [
    {path: '/', component: Newfeed},
    {path: '/profile', component: Profile},
    {path: '/login', component: Login, layout: null},
    {path: '/register', component: Register, layout: null},
];

// cần đăng nhập
const privateRoutes = [

];

export {publicRoutes, privateRoutes}