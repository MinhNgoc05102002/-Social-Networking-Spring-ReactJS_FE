import NewPostbox from "~/components/NewPostbox";
import Postbox from "~/components/Postbox";
// import Comment from "~/components/Comment";
import { getPosts } from "~/services/postService";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { getPostsByUser } from "~/services/postService";


function Profile() {
    let userId = 2;
    let profileId = 2;
    const dispatch = useDispatch();
    const posts = useSelector(state => {
      console.log(state.post.posts);
      return state.post.posts;
    })

    function check() {
        if (userId == profileId)
            return <NewPostbox />
    }
    function showPost() {
        if (posts instanceof Array) {
            let com = posts.map(post =>(
                    <Postbox key={post.id} post={post}/>
            ))
            return com;
        }
    }

    useEffect(()=> {
        dispatch(getPostsByUser(profileId));
      }, [])

    return (
        <section>
            <div className="gap2 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row merged20" id="page-contents">
                                <div className="user-profile">
                                    <figure>
                                        <div className="edit-pp">
                                            <label className="fileContainer">
                                                <i className="fa fa-camera"></i>
                                                <input type="file"/>
                                            </label>
                                        </div>
                                        <img src="images/resources/profile-image.jpg" alt=""/>
                                        <ul className="profile-controls">
                                            <li><a href="#" title="Add friend" data-toggle="tooltip"><i className="fa fa-user-plus"></i></a></li>
                                            <li><a href="#" title="Follow" data-toggle="tooltip"><i className="fa fa-star"></i></a></li>
                                            <li><a className="send-mesg" href="#" title="Send Message" data-toggle="tooltip"><i className="fa fa-comment"></i></a></li>
                                            <li>
                                                <div className="edit-seting" title="Edit Profile image"><i className="fa fa-sliders"></i>
                                                    <ul className="more-dropdown">
                                                        <li><a href="setting.html" title="">Update Profile Photo</a></li>
                                                        <li><a href="setting.html" title="">Update Header Photo</a></li>
                                                        <li><a href="setting.html" title="">Account Settings</a></li>
                                                        <li><a href="support-and-help.html" title="">Find Support</a></li>
                                                        <li><a className="bad-report" href="#" title="">Report Profile</a></li>
                                                        <li><a href="#" title="">Block Profile</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        <ol className="pit-rate">
                                            <li className="rated"><i className="fa fa-star"></i></li>
                                            <li className="rated"><i className="fa fa-star"></i></li>
                                            <li className="rated"><i className="fa fa-star"></i></li>
                                            <li className="rated"><i className="fa fa-star"></i></li>
                                            <li className=""><i className="fa fa-star"></i></li>
                                            <li><span>4.7/5</span></li>
                                        </ol>
                                    </figure>
                                    
                                    <div className="profile-section">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-3">
                                                <div className="profile-author">
                                                    <div className="profile-author-thumb">
                                                        <img alt="author" src="images/resources/author.jpg"/>
                                                        <div className="edit-dp">
                                                            <label className="fileContainer">
                                                                <i className="fa fa-camera"></i>
                                                                <input type="file"/>
                                                            </label>
                                                        </div>
                                                    </div>
                                                        
                                                    <div className="author-content">
                                                        <a className="h4 author-name" href="about.html">Jack Carter</a>
                                                        <div className="country">Ontario, CA</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-9">
                                                <ul className="profile-menu">
                                                    <li>
                                                        <a className="active" href="timeline.html">Timeline</a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="about.html">About</a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="timeline-friends.html">Friends</a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="timeline-photos.html">Photos</a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="timeline-videos.html">Videos</a>
                                                    </li>
                                                    <li>
                                                        <div className="more">
                                                            <i className="fa fa-ellipsis-h"></i>
                                                            <ul className="more-dropdown">
                                                                <li>
                                                                    <a href="timeline-groups.html">Profile Groups</a>
                                                                </li>
                                                                <li>
                                                                    <a href="statistics.html">Profile Analytics</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ol className="folw-detail">
                                                    <li><span>Posts</span><ins>101</ins></li>
                                                    <li><span>Followers</span><ins>1.3K</ins></li>
                                                    <li><span>Following</span><ins>22</ins></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>	
                                </div>{/*<!-- user profile banner  -->*/}
                                <div className="col-lg-3">
                                    <aside className="sidebar static left">
                                        <div className="widget">
                                            <h4 className="widget-title">User Badges <a className="see-all" href="#" title="">See All</a></h4>
                                            <ul className="badgez-widget">
                                                <li>
                                                <a href="#" title="Male User" data-toggle="tooltip"><img src="images/badges/badge2.png" alt=""/></a>
                                                </li>
                                                <li>
                                                <a href="#" title="10 Years old User" data-toggle="tooltip"><img src="images/badges/year10.png" alt=""/></a>
                                                </li>
                                                <li>
                                                <a href="#" title="Page Admin" data-toggle="tooltip"><img src="images/badges/badge1.png" alt=""/></a>
                                                </li>
                                                <li>
                                                <a href="#" title="100+ Refferal" data-toggle="tooltip"><img src="images/badges/badge8.png" alt=""/></a>
                                                </li>
                                                <li>
                                                <a href="#" title="Tranding Posts" data-toggle="tooltip"><img src="images/badges/badge21.png" alt=""/></a>
                                                </li>
                                                <li>
                                                <a href="#" title="1000+ Subscribers" data-toggle="tooltip"><img src="images/badges/badge3.png" alt=""/></a>
                                                </li>
                                                <li>
                                                <a href="#" title="Pitnik Shirt winner" data-toggle="tooltip"><img src="images/badges/badge20.png" alt=""/></a>
                                                </li>
                                                <li>
                                                <a href="#" title="500+ Followers" data-toggle="tooltip"><img src="images/badges/badge10.png" alt=""/></a>
                                                </li>
                                            </ul>
                                        </div> {/*<!-- badges -->*/}
                                        <div className="widget">
                                            <div className="weather-widget low-opacity bluesh">
                                                <div className="bg-image" style={{backgroundImage: "url(images/resources/weather.jpg)"}}></div>
                                                <span className="refresh-content"><i className="fa fa-refresh"></i></span>
                                                <div className="weather-week">
                                                    <div className="icon sun-shower">
                                                    <div className="cloud"></div>
                                                    <div className="sun">
                                                        <div className="rays"></div>
                                                    </div>
                                                    <div className="rain"></div>
                                                    </div>
                                                </div>
                                                <div className="weather-infos">
                                                    <span className="weather-tem">25</span>
                                                    <h3>Cloudy Skyes<i>Sicklervilte, New Jersey</i></h3>
                                                    <div className="weather-date skyblue-bg">
                                                        <span>MAY<strong>21</strong></span>
                                                    </div>
                                                </div>
                                                <div className="monthly-weather">
                                                    <ul>
                                                        <li>
                                                            <span>Sun</span>
                                                            <a href="#" title=""><i className="wi wi-day-sunny"></i></a>
                                                            <em>40°</em>
                                                        </li>
                                                        <li>
                                                            <span>Mon</span>
                                                            <a href="#" title=""><i className="wi wi-day-cloudy"></i></a>
                                                            <em>10°</em>
                                                        </li>
                                                        <li>
                                                            <span>Tue</span>
                                                            <a href="#" title=""><i className="wi wi-day-hail"></i></a>
                                                            <em>20°</em>
                                                        </li>
                                                        <li>
                                                            <span>Wed</span>
                                                            <a href="#" title=""><i className="wi wi-day-lightning"></i></a>
                                                            <em>34°</em>
                                                        </li>
                                                        <li>
                                                            <span>Thu</span>
                                                            <a href="#" title=""><i className="wi wi-day-showers"></i></a>
                                                            <em>22°</em>
                                                        </li>
                                                        <li>
                                                            <span>Fri</span>
                                                            <a href="#" title=""><i className="wi wi-day-windy"></i></a>
                                                            <em>26°</em>
                                                        </li>
                                                        <li>
                                                            <span>Sat</span>
                                                            <a href="#" title=""><i className="wi wi-day-sunny-overcast"></i></a>
                                                            <em>30°</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                            </div>{/*<!-- Weather Widget -->*/}
                                        </div>{/*<!-- twitter feed-->*/}
                                        <div className="widget">
                                            <h4 className="widget-title">Twitter feed</h4>
                                            <ul className="twiter-feed">
                                                <li>
                                                    <i className="fa fa-twitter"></i>
                                                    <span>
                                                        <i>jhon william</i>
                                                        @jhonwilliam
                                                    </span>
                                                    <p>tomorrow with the company we were working and 5 child run away from the working place. <a href="#" title="">#daydream5k</a> </p>
                                                    <em>2 hours ago</em>
                                                </li>
                                                <li>
                                                    <i className="fa fa-twitter"></i>
                                                    <span>
                                                        <i>Kelly watson</i>
                                                        @kelly
                                                    </span>
                                                    <p>tomorrow with the company we were working and 5 child run away from the working place. <a href="#" title="">#daydream5k</a> </p>
                                                    <em>2 hours ago</em>
                                                </li>
                                                <li>
                                                    <i className="fa fa-twitter"></i>
                                                    <span>
                                                        <i>Jony bravo</i>
                                                        @jonibravo
                                                    </span>
                                                    <p>tomorrow with the company we were working and 5 child run away from the working place. <a href="#" title="">#daydream5k</a> </p>
                                                    <em>2 hours ago</em>
                                                </li>
                                            </ul>
                                        </div>{/*<!-- twitter feed-->*/}
                                        <div className="advertisment-box">
                                            <h4 className="">advertisment</h4>
                                            <figure>
                                                <a href="#" title="Advertisment"><img src="images/resources/ad-widget.gif" alt=""/></a>
                                            </figure>
                                        </div>
                                        <div className="widget">
                                            <h4 className="widget-title">Shortcuts</h4>
                                            <ul className="naves">
                                                <li>
                                                    <i className="ti-clipboard"></i>
                                                    <a href="newsfeed.html" title="">News feed</a>
                                                </li>
                                                <li>
                                                    <i className="ti-mouse-alt"></i>
                                                    <a href="inbox.html" title="">Inbox</a>
                                                </li>
                                                <li>
                                                    <i className="ti-files"></i>
                                                    <a href="fav-page.html" title="">My pages</a>
                                                </li>
                                                <li>
                                                    <i className="ti-user"></i>
                                                    <a href="timeline-friends.html" title="">friends</a>
                                                </li>
                                                <li>
                                                    <i className="ti-image"></i>
                                                    <a href="timeline-photos.html" title="">images</a>
                                                </li>
                                                <li>
                                                    <i className="ti-video-camera"></i>
                                                    <a href="timeline-videos.html" title="">videos</a>
                                                </li>
                                                <li>
                                                    <i className="ti-comments-smiley"></i>
                                                    <a href="messages.html" title="">Messages</a>
                                                </li>
                                                <li>
                                                    <i className="ti-bell"></i>
                                                    <a href="notifications.html" title="">Notifications</a>
                                                </li>
                                                <li>
                                                    <i className="ti-share"></i>
                                                    <a href="people-nearby.html" title="">People Nearby</a>
                                                </li>
                                                <li>
                                                    <i className="fa fa-bar-chart-o"></i>
                                                    <a href="insights.html" title="">insights</a>
                                                </li>
                                                <li>
                                                    <i className="ti-power-off"></i>
                                                    <a href="landing.html" title="">Logout</a>
                                                </li>
                                            </ul>
                                        </div>{/*<!-- Shortcuts -->*/}
                                        <div className="widget">
                                            <h4 className="widget-title">Recent Activity</h4>
                                            <ul className="activitiez">
                                                <li>
                                                    <div className="activity-meta">
                                                        <i>10 hours Ago</i>
                                                        <span><a href="#" title="">Commented on Video posted </a></span>
                                                        <h6>by <a href="time-line.html">black demon.</a></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="activity-meta">
                                                        <i>30 Days Ago</i>
                                                        <span><a href="#" title="">Posted your status. “Hello guys, how are you?”</a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="activity-meta">
                                                        <i>2 Years Ago</i>
                                                        <span><a href="#" title="">Share a video on her timeline.</a></span>
                                                        <h6>"<a href="#">you are so funny mr.been.</a>"</h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>{/*<!-- recent activites -->*/}
                                        <div className="widget stick-widget">
                                            <h4 className="widget-title">Who's follownig</h4>
                                            <ul className="followers">
                                                <li>
                                                    <figure><img src="images/resources/friend-avatar2.jpg" alt=""/></figure>
                                                    <div className="friend-meta">
                                                        <h4><a href="time-line.html" title="">Kelly Bill</a></h4>
                                                        <a href="#" title="" className="underline">Add Friend</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <figure><img src="images/resources/friend-avatar4.jpg" alt=""/></figure>
                                                    <div className="friend-meta">
                                                        <h4><a href="time-line.html" title="">Issabel</a></h4>
                                                        <a href="#" title="" className="underline">Add Friend</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <figure><img src="images/resources/friend-avatar6.jpg" alt=""/></figure>
                                                    <div className="friend-meta">
                                                        <h4><a href="time-line.html" title="">Andrew</a></h4>
                                                        <a href="#" title="" className="underline">Add Friend</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <figure><img src="images/resources/friend-avatar8.jpg" alt=""/></figure>
                                                    <div className="friend-meta">
                                                        <h4><a href="time-line.html" title="">Sophia</a></h4>
                                                        <a href="#" title="" className="underline">Add Friend</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <figure><img src="images/resources/friend-avatar3.jpg" alt=""/></figure>
                                                    <div className="friend-meta">
                                                        <h4><a href="time-line.html" title="">Allen</a></h4>
                                                        <a href="#" title="" className="underline">Add Friend</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>{/*<!-- who's following -->*/}
                                    </aside>
                                </div> {/*<!-- sidebar -->*/}
                                <div className="col-lg-6">
                                    { check() } 
                                     {/* <!-- add post new box --> */}

                                    <div className="loadMore">
                                        {showPost()}
                                    </div>
                                </div> {/*<!-- centerl meta -->*/}
                                <div className="col-lg-3">
                                    <aside className="sidebar static right">
                                        <div className="widget">
                                            <h4 className="widget-title">Your page</h4>	
                                            <div className="your-page">
                                                <figure>
                                                    <a href="#" title=""><img src="images/resources/friend-avatar9.jpg" alt=""/></a>
                                                </figure>
                                                <div className="page-meta">
                                                    <a href="#" title="" className="underline">My Creative Page</a>
                                                    <span><i className="ti-comment"></i><a href="insight.html" title="">Messages <em>9</em></a></span>
                                                    <span><i className="ti-bell"></i><a href="insight.html" title="">Notifications <em>2</em></a></span>
                                                </div>
                                                <ul className="page-publishes">
                                                    <li>
                                                        <span><i className="ti-pencil-alt"></i>Publish</span>
                                                    </li>
                                                    <li>
                                                        <span><i className="ti-camera"></i>Photo</span>
                                                    </li>
                                                    <li>
                                                        <span><i className="ti-video-camera"></i>Live</span>
                                                    </li>
                                                    <li>
                                                        <span><i className="fa fa-user-plus"></i>Invite</span>
                                                    </li>
                                                </ul>
                                                <div className="page-likes">
                                                    <ul className="nav nav-tabs likes-btn">
                                                        <li className="nav-item"><a className="active" href="#link1" data-toggle="tab" data-ripple="">likes</a></li>
                                                        <li className="nav-item"><a className="" href="#link2" data-toggle="tab" data-ripple="">views</a></li>
                                                    </ul>
                                                    {/*<!-- Tab panes -->*/}
                                                    <div className="tab-content">
                                                    <div className="tab-pane active fade show " id="link1" >
                                                        <span><i className="ti-heart"></i>884</span>
                                                        <a href="#" title="weekly-likes">35 new likes this week</a>
                                                        <div className="users-thumb-list">
                                                            <a href="#" title="Anderw" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-1.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="frank" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-2.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sara" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-3.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Amy" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-4.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Ema" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-5.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sophie" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-6.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Maria" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-7.jpg" alt=""/>  
                                                            </a>  
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="link2" >
                                                        <span><i className="fa fa-eye"></i>440</span>
                                                        <a href="#" title="weekly-likes">440 new views this week</a>
                                                        <div className="users-thumb-list">
                                                            <a href="#" title="Anderw" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-1.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="frank" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-2.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sara" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-3.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Amy" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-4.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Ema" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-5.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sophie" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-6.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Maria" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-7.jpg" alt=""/>  
                                                            </a>  
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/*<!-- page like widget -->*/}
                                        <div className="widget">
                                            <h4 className="widget-title">Profile intro</h4>
                                            <ul className="short-profile">
                                                <li>
                                                    <span>about</span>
                                                    <p>Hi, i am jhon kates, i am 32 years old and worked as a web developer in microsoft </p>
                                                </li>
                                                <li>
                                                    <span>fav tv show</span>
                                                    <p>Sacred Games, Spartcus Blood, Games of Theron </p>
                                                </li>
                                                <li>
                                                    <span>favourit music</span>
                                                    <p>Justin Biber, Shakira, Nati Natasah</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget">
                                            <div className="banner medium-opacity purple">
                                                <div className="bg-image" style={{backgroundImage: "url(images/resources/baner-widgetbg.jpg)"}}></div>
                                                <div className="baner-top">
                                                    <span><img alt="" src="images/book-icon.png"/></span>
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </div>
                                                <div className="banermeta">
                                                    <p>
                                                        create your own favourit page.
                                                    </p>
                                                    <span>like them all</span>
                                                    <a data-ripple="" title="" href="#">start now!</a>
                                                </div>
                                            </div>											
                                        </div>
                                        <div className="widget pitnik-links stick-widget">
                                            <ul>
                                                <li><a href="#" title="">about</a></li>
                                                <li><a href="#" title="">career</a></li>
                                                <li><a href="#" title="">advertise</a></li>
                                                <li><a href="#" title="">Pitnik Apps</a></li>
                                                <li><a href="#" title="">Pitnik Blog</a></li>
                                                <li><a href="#" title="">Help</a></li>
                                                <li><a href="#" title="">Pitnik Gifts</a></li>
                                                <li><a href="#" title="">contetn policy</a></li>
                                                <li><a href="#" title="">User Policy</a></li>
                                            </ul>
                                            <p>© Pitnik 2020. All Rights Reserved.</p>
                                        </div> {/*<!-- little links -->*/}
                                    </aside>
                                </div> {/*<!-- sidebar -->*/}
                            </div>	
                        </div>
                    </div>
                </div>
            </div>	
        </section>
    );
}

export default Profile;