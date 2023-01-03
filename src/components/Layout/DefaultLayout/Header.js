
function Header() {
    return (
        <div className="topbar stick">
            <div className="logo">
                <a title="" href="newsfeed.html"><img src="images/logo.png" alt=""/></a>
            </div>
            <div className="top-area">
                <div className="main-menu">
                    <span>
                        <i className="fa fa-braille"></i>
                    </span>
                </div>
                <div className="top-search">
                    <form method="post" className="">
                        <input type="text" placeholder="Search People, Pages, Groups etc"/>
                        <button data-ripple><i className="ti-search"></i></button>
                    </form>
                </div>
                <div className="page-name">
                    <span>Newsfeed</span>
                </div>
                <ul className="setting-area">
                    <li><a href="newsfeed.html" title="Home" data-ripple=""><i className="fa fa-home"></i></a></li>
                    <li>
                        <a href="#" title="Friend Requests" data-ripple="">
                            <i className="fa fa-user"></i><em className="bg-red">5</em>
                        </a>
                        <div className="dropdowns">
                            <span>5 New Requests <a href="#" title="">View all Requests</a></span>
                            <ul className="drops-menu">
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-2.jpg" alt=""/>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title="">Loren</a></h6>
                                            <span><b>Amy</b> is mutule friend</span>
                                            <i>yesterday</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title=""><i className="fa fa-heart"></i></a>
                                            <a href="#" title=""><i className="fa fa-trash"></i></a>
                                        </div>
                                    </div>	
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-3.jpg" alt=""/>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title="">Tina Trump</a></h6>
                                            <span><b>Simson</b> is mutule friend</span>
                                            <i>2 days ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title=""><i className="fa fa-heart"></i></a>
                                            <a href="#" title=""><i className="fa fa-trash"></i></a>
                                        </div>
                                    </div>	
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-4.jpg" alt=""/>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title="">Andrew</a></h6>
                                            <span><b>Bikra</b> is mutule friend</span>
                                            <i>4 hours ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title=""><i className="fa fa-heart"></i></a>
                                            <a href="#" title=""><i className="fa fa-trash"></i></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-5.jpg" alt=""/>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title="">Dasha</a></h6>
                                            <span><b>Sarah</b> is mutule friend</span>
                                            <i>9 hours ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title=""><i className="fa fa-heart"></i></a>
                                            <a href="#" title=""><i className="fa fa-trash"></i></a>
                                        </div>
                                    </div>	
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-1.jpg" alt=""/>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title="">Emily</a></h6>
                                            <span><b>Amy</b> is mutule friend</span>
                                            <i>4 hours ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title=""><i className="fa fa-heart"></i></a>
                                            <a href="#" title=""><i className="fa fa-trash"></i></a>
                                        </div>
                                    </div>	
                                </li>
                            </ul>
                            <a href="friend-requests.html" title="" className="more-mesg">View All</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" title="Notification" data-ripple="">
                            <i className="fa fa-bell"></i><em className="bg-purple">7</em>
                        </a>
                        <div className="dropdowns">
                            <span>4 New Notifications <a href="#" title="">Mark all as read</a></span>
                            <ul className="drops-menu">
                                <li>
                                    <a href="notifications.html" title="">
                                        <figure>
                                            <img src="images/resources/thumb-1.jpg" alt=""/>
                                            <span className="status f-online"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span>commented on your new profile status</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <figure>
                                            <img src="images/resources/thumb-2.jpg" alt=""/>
                                            <span className="status f-online"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span>Nicholas Grissom just became friends. Write on his wall.</span>
                                            <i>4 hours ago</i>
                                            <figure>
                                                <span>Today is Marina Valentine's Birthday! wish for celebrating</span>
                                                <img src="images/birthday.png" alt=""/>
                                            </figure>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <figure>
                                            <img src="images/resources/thumb-3.jpg" alt=""/>
                                            <span className="status f-online"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span>commented on your photo.</span>
                                            <i>Sunday</i>
                                            <figure>
                                                <span>"Celebrity looks Beautiful in that outfit! We should see each"</span>
                                                <img src="images/resources/admin.jpg" alt=""/>
                                            </figure>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <figure>
                                            <img src="images/resources/thumb-4.jpg" alt=""/>
                                            <span className="status f-online"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span>nvited you to attend to his event Goo in</span>
                                            <i>May 19</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <figure>
                                            <img src="images/resources/thumb-5.jpg" alt=""/>
                                            <span className="status f-online"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Andrew Changed his profile picture. </span>
                                            <i>dec 18</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <a href="notifications.html" title="" className="more-mesg">View All</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" title="Messages" data-ripple=""><i className="fa fa-commenting"></i><em className="bg-blue">9</em></a>
                        <div className="dropdowns">
                            <span>5 New Messages <a href="#" title="">Mark all as read</a></span>
                            <ul className="drops-menu">
                                <li>
                                    <a className="show-mesg" href="#" title="">
                                        <figure>
                                            <img src="images/resources/thumb-1.jpg" alt=""/>
                                            <span className="status f-online"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span><i className="ti-check"></i> Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title="">
                                        <figure>
                                            <img src="images/resources/thumb-2.jpg" alt=""/>
                                            <span className="status f-offline"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span><i className="ti-check"></i> We’ll have to check that at the office and see if the client is on board with</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title="">
                                        <figure>
                                            <img src="images/resources/thumb-3.jpg" alt=""/>
                                            <span className="status f-online"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span> <i className="fa fa-paperclip"></i>Hi Jack's! It’s Diana, I just wanted to let you know that we have to reschedule..</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title="">
                                        <figure>
                                            <img src="images/resources/thumb-4.jpg" alt=""/>
                                            <span className="status f-offline"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span><i className="ti-check"></i> Great, I’ll see you tomorrow!.</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title="">
                                        <figure>
                                            <img src="images/resources/thumb-5.jpg" alt=""/>
                                            <span className="status f-away"></span>
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span><i className="fa fa-paperclip"></i> Sed ut perspiciatis unde omnis iste natus error sit </span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <a href="chat-messenger.html" title="" className="more-mesg">View All</a>
                        </div>
                    </li>
                    <li><a href="#" title="Languages" data-ripple=""><i className="fa fa-globe"></i><em>EN</em></a>
                        <div className="dropdowns languages">
                            <div data-gutter="10" className="row">
                                <div className="col-md-3">
                                <ul className="dropdown-meganav-select-list-lang">
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/UK.png"/>English(UK)
                                    </a>
                                    </li>
                                    <li className="active">
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/US.png"/>English(US)
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/DE.png"/>Deutsch
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/NED.png"/>Nederlands
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/FR.png"/>Français
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/SP.png"/>Español
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/ARG.png"/>Español (AR)
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/IT.png"/>Italiano
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/PT.png"/>Português (PT)
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/BR.png"/>Português (BR)
                                    </a>
                                    </li>

                                </ul>
                                </div>
                                <div className="col-md-3">
                                <ul className="dropdown-meganav-select-list-lang">
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/FIN.png"/>Suomi
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/SW.png"/>Svenska
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/DEN.png"/>Dansk
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/CZ.png"/>Čeština
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/HUN.png"/>Magyar
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/ROM.png"/>Română
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/JP.png"/>日本語
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/CN.png"/>简体中文
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/PL.png"/>Polski
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/GR.png"/>Ελληνικά
                                    </a>
                                    </li>

                                </ul>
                                </div>
                                <div className="col-md-3">
                                <ul className="dropdown-meganav-select-list-lang">
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/TUR.png"/>Türkçe
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/BUL.png"/>Български
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/ARB.png"/>العربية
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/KOR.png"/>한국어
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/ISR.png"/>עברית
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/LAT.png"/>Latviski
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/UKR.png"/>Українська
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/IND.png"/>Bahasa Indonesia
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/MAL.png"/>Bahasa Malaysia
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/TAI.png"/>ภาษาไทย
                                    </a>
                                    </li>

                                </ul>
                                </div>
                                <div className="col-md-3">
                                <ul className="dropdown-meganav-select-list-lang">
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/CRO.png"/>Hrvatski
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/LIT.png"/>Lietuvių
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/SLO.png"/>Slovenčina
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/SERB.png"/>Srpski
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/SLOVE.png"/>Slovenščina
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/NAM.png"/>Tiếng Việt
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/PHI.png"/>Filipino
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/ICE.png"/>Íslenska
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/EST.png"/>Eesti
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <img title="Image Title" alt="Image Alternative text" src="images/flags/RU.png"/>Русский
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#" title="Help" data-ripple=""><i className="fa fa-question-circle"></i></a>
                        <div className="dropdowns helps">
                            <span>Quick Help</span>
                            <form method="post">
                                <input type="text" placeholder="How can we help you?"/>
                            </form>
                            <span>Help with this page</span>
                            <ul className="help-drop">
                                <li><a href="forum.html" title=""><i className="fa fa-book"></i>Community & Forum</a></li>
                                <li><a href="faq.html" title=""><i className="fa fa-question-circle-o"></i>FAQs</a></li>
                                <li><a href="career.html" title=""><i className="fa fa-building-o"></i>Carrers</a></li>
                                <li><a href="privacy.html" title=""><i className="fa fa-pencil-square-o"></i>Terms & Policy</a></li>
                                <li><a href="#" title=""><i className="fa fa-map-marker"></i>Contact</a></li>
                                <li><a href="#" title=""><i className="fa fa-exclamation-triangle"></i>Report a Problem</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="user-img">
                    <h5>Jack Carter</h5>
                    <img src="images/resources/admin.jpg" alt=""/>
                    <span className="status f-online"></span>
                    <div className="user-setting">
                        <span className="seting-title">Chat setting <a href="#" title="">see all</a></span>
                        <ul className="chat-setting">
                            <li><a href="#" title=""><span className="status f-online"></span>online</a></li>
                            <li><a href="#" title=""><span className="status f-away"></span>away</a></li>
                            <li><a href="#" title=""><span className="status f-off"></span>offline</a></li>
                        </ul>
                        <span className="seting-title">User setting <a href="#" title="">see all</a></span>
                        <ul className="log-out">
                            <li><a href="about.html" title=""><i className="ti-user"></i> view profile</a></li>
                            <li><a href="setting.html" title=""><i className="ti-pencil-alt"></i>edit profile</a></li>
                            <li><a href="#" title=""><i className="ti-target"></i>activity log</a></li>
                            <li><a href="setting.html" title=""><i className="ti-settings"></i>account setting</a></li>
                            <li><a href="logout.html" title=""><i className="ti-power-off"></i>log out</a></li>
                        </ul>
                    </div>
                </div>
                <span className="ti-settings main-menu" data-ripple=""></span>
            </div>
        </div>

    )
}

export default Header;
