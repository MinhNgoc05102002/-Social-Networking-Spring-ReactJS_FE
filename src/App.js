import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from '~/routes'
import { DefaultLayout } from "./components/Layout";
import $ from 'jquery';

function App() {
useEffect(()=>{
    //------- Notifications Dropdowns
    $('.top-area > .setting-area > li > a').on("click",function(){
        var $parent = $(this).parent('li');
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $parent.siblings().children('div').removeClass('active');
        $(this).siblings('div').addClass('active');
        return false;
    });

    $("body *").not('.top-area > .setting-area > li > a').on("click", function() {
        $(".top-area > .setting-area > li > div, a").removeClass('active');
    });

    // dfdfdf

})
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return <Route key={index} path = {route.path} element = {<Layout><Page /></Layout>}/>
          })}
          
        </Routes>
      </div>
    </Router>
  );
}




export default App;
