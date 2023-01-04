import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import Newfeed from "~/pages/Newfeed";
import Profile from "~/pages/Profile";
import Login from "~/pages/Login";
import Register from "~/pages/Register"; 
import { getPosts } from "./services/postService";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const currentUser = useSelector(state => {
    return state.users.currentUser == null ? {
      "id": 1,
      "email": "ngoc43552@gmail.com",
      "username": "ngoc2002",
    } : state.users.currentUser
  });
  

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* {console.log(currentUser)} */}
          <Route path="/" element={<DefaultLayout> <Newfeed /> </DefaultLayout>} />
          <Route path={':idProfile'} element={<DefaultLayout> <Profile /> </DefaultLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          {/* {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return <Route key={index} path = {route.path} element = {<Layout><Page /></Layout>}/>
          })}
           */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
