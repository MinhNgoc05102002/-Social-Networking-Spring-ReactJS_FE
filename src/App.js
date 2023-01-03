import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import $ from 'jquery';
import Newfeed from "~/pages/Newfeed";
import Profile from "~/pages/Profile";
import Login from "~/pages/Login";
import Register from "~/pages/Register";
import { getPosts } from "./services/postService";
import { useSelector, useDispatch } from "react-redux";

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
function App() {
  const currentUser = useSelector(state => {
    return state.users.currentUser == null ? {} : state.users.currentUser
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          {console.log(currentUser)}
          <Route path="/" element={ <Newfeed /> }/>
          <Route path="/profile" element={<Profile />} />
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
        {AddLibrary(
            'js/main.min.js')}
        {AddLibrary(
        'js/script.js')}
    </Router>
  );
}

export default App;
