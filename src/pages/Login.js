// import Header from "~/components/Layout/DefaultLayout/Header";
import {loginUser, register} from '~/services/userService';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let account = {
        username:"ngoc2002",
        password:"Ngoc2002" }
    let userPrinciple = localStorage.getItem("userPrinciple");
    
    useEffect(()=>{
        if (!userPrinciple){
            dispatch(loginUser(account)).then(({payload}) => {
                console.log("login api");
                console.log(payload);
                localStorage.setItem("userPrinciple",  payload.userId);
            });
        }
    })

    return (
        <div className="www-layout">
            <section>
                <div className="gap no-gap signin whitish medium-opacity">
                    <div className="bg-image" style={{backgroundImage: "url(images/resources/theme-bg.jpg)"}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="big-ad">
                                    <figure><img src="images/logo2.png" alt=""/></figure>
                                    <h1>Welcome to the Pitnik</h1>
                                    <p>
                                        Pitnik is a social network template that can be used to connect people. use this template for multipurpose social activities like job, dating, posting, bloging and much more. Now join & Make Cool Friends around the world !!!                             
                                    </p>
                                    
                                    <div className="fun-fact">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-4">
                                                <div className="fun-box">
                                                    <i className="ti-check-box"></i>
                                                    <h6>Registered People</h6>
                                                    <span>1,01,242</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-4">
                                                <div className="fun-box">
                                                    <i className="ti-layout-media-overlay-alt-2"></i>
                                                    <h6>Posts Published</h6>
                                                    <span>21,03,245</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-4">
                                                <div className="fun-box">
                                                    <i className="ti-user"></i>
                                                    <h6>Online Users</h6>
                                                    <span>40,145</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="barcode">
                                        <figure><img src="images/resources/Barcode.jpg" alt=""/></figure>
                                        <div className="app-download">
                                            <span>Download Mobile App and Scan QR Code to login</span>
                                            <ul className="colla-apps">
                                                <li><a title="" href="https://play.google.com/store?hl=en"><img src="images/android.png" alt=""/>android</a></li>
                                                <li><a title="" href="https://www.apple.com/lae/ios/app-store/"><img src="images/apple.png" alt=""/>iPhone</a></li>
                                                <li><a title="" href="https://www.microsoft.com/store/apps"><img src="images/windows.png" alt=""/>Windows</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="we-login-register">
                                    <div className="form-title">
                                        <i className="fa fa-key"></i>login
                                        <span>sign in now and meet the awesome Friends around the world.</span>
                                    </div>
                                    <form className="we-form" method="post">
                                        <input type="text" placeholder="Email"/>
                                        <input type="password" placeholder="Password"/>
                                        <input type="checkbox"/><label>remember me</label>
                                        <button type="submit" data-ripple="">sign in</button>
                                        <a className="forgot underline" href="#" title="">forgot password?</a>
                                    </form>
                                    <a className="with-smedia facebook" href="#" title="" data-ripple=""><i className="fa fa-facebook"></i></a>
                                    <a className="with-smedia twitter" href="#" title="" data-ripple=""><i className="fa fa-twitter"></i></a>
                                    <a className="with-smedia instagram" href="#" title="" data-ripple=""><i className="fa fa-instagram"></i></a>
                                    <a className="with-smedia google" href="#" title="" data-ripple=""><i className="fa fa-google-plus"></i></a>
                                    <span>don't have an account? <a className="we-account underline" href="#" title="">register now</a></span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
         
        </div>
    );
}

export default Login;
