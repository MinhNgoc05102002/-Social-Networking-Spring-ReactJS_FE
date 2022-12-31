import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import Newfeed from "~/pages/Newfeed";
import Profile from "~/pages/Profile";
import Login from "~/pages/Login";
import Register from "~/pages/Register"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout> <Newfeed /> </DefaultLayout>} />
          <Route path="/profile" element={<DefaultLayout> <Profile /> </DefaultLayout>} />
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
