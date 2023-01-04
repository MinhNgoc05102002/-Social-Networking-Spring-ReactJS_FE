import NewPostbox from "~/components/NewPostbox";
import Postbox from "~/components/Postbox";
// import Comment from "~/components/Comment";
import { getPosts } from "~/services/postService";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

function Newfeed() {
    const dispatch = useDispatch();
    const posts = useSelector(state => {
      console.log(state.post.posts);
      return state.post.posts;
    })
    let userId = localStorage.getItem('userId');

    // const notify = () => toast("🦄 Tạo thành công!");
    // const editorRef = useRef(null);

    // const navigate = useNavigate();
  
    useEffect(()=> {
      dispatch(getPosts());
    }, [])

    return ( 
        <section>
            <div className="gap2 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row merged20" id="page-contents">
                                <div className="col-lg-3">
                                    <aside className="sidebar static left">
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
                                                
                                            </div> {/*<!-- Weather Widget -->*/}
                                        </div> {/*<!-- weather widget-->*/}
                                        <div className="widget whitish low-opacity">
                                            <div style={{backgroundIimage: "url(images/resources/dob2.png)"}} className="bg-image"></div>
                                            <div className="dob-head">
                                                <img src="images/resources/sug-page-5.jpg" alt=""/>
                                                <span>22nd Birthday</span>
                                                <div className="dob">
                                                    <i>19</i>
                                                    <span>September</span>
                                                </div>
                                            </div>
                                            <div className="dob-meta">
                                                <figure><img src="images/resources/dob-cake.gif" alt=""/></figure>
                                                <h6><a href="#" title="">Lucy Carbel</a> valentine's birthday</h6>
                                                <p>leave a message with your best wishes on his profile.</p>
                                            </div>
                                        </div> {/*<!-- birthday widget -->*/}
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
                                        </div> {/*<!-- twitter feed-->*/}
                                        <div className="advertisment-box">
                                            <h4 className="">advertisment</h4>
                                            <figure>
                                                <a href="#" title="Advertisment"><img src="images/resources/ad-widget.gif" alt=""/></a>
                                            </figure>
                                        </div> {/*<!-- advertisment box -->*/}
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
                                        </div> {/*<!-- Shortcuts -->*/}
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
                                        </div> {/*<!-- recent activites -->*/}
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
                                        </div> {/*<!-- who's following -->*/}
                                    </aside>
                                </div>  {/*<!-- sidebar -->*/}
                                <div className="col-lg-6">
                                    <NewPostbox prePath="/" userId = {userId}/>{/* <!-- add post new box --> */}

                                    <div className="loadMore">
                                        {posts.map(post =>(
                                             <Postbox key={post.id} post={post}/>
                                        ))}
                                        <div className="central-meta item">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar10.jpg" alt=""/>
                                                    </figure>
                                                    <div className="friend-name">
                                                        <div className="more">
                                                            <div className="more-post-optns"><i className="ti-more-alt"></i>
                                                                <ul>
                                                                    <li><i className="fa fa-pencil-square-o"></i>Edit Post</li>
                                                                    <li><i className="fa fa-trash-o"></i>Delete Post</li>
                                                                    <li className="bad-report"><i className="fa fa-flag"></i>Report Post</li>
                                                                    <li><i className="fa fa-address-card-o"></i>Boost This Post</li>
                                                                    <li><i className="fa fa-clock-o"></i>Schedule Post</li>
                                                                    <li><i className="fa fa-wpexplorer"></i>Select as featured</li>
                                                                    <li><i className="fa fa-bell-slash-o"></i>Turn off Notifications</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ins><a href="time-line.html" title="">Mathilda Brinker</a></ins>
                                                        <span>published: june,2 2020 19:PM</span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <div className="description">
                                                            <p>
                                                                World's most beautiful car in Curabitur <a href="#" title="">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                                                            </p>
                                                        </div>
                                                        
                                                        <ul className="like-dislike">
                                                            <li><a href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack"></i></a></li>
                                                            <li><a href="#" title="Like Post"><i className="ti-thumb-up"></i></a></li>
                                                            <li><a href="#" title="dislike Post"><i className="ti-thumb-down"></i></a></li>
                                                        </ul>
                                                        <div className="we-video-info">
                                                            <ul>
                                                                <li>
                                                                    <span className="views" title="views">
                                                                        <i className="fa fa-eye"></i>
                                                                        <ins>1.2k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <div className="likes heart" title="Like/Dislike">❤ <span>2K</span></div>
                                                                </li>
                                                                <li>
                                                                    <span className="comment" title="Comments">
                                                                        <i className="fa fa-commenting"></i>
                                                                        <ins>52</ins>
                                                                    </span>
                                                                </li>

                                                                <li>
                                                                    <span>
                                                                        <a className="share-pst" href="#" title="Share">
                                                                            <i className="fa fa-share-alt"></i>
                                                                        </a>
                                                                        <ins>20</ins>
                                                                    </span>	
                                                                </li>
                                                            </ul>
                                                            <div className="users-thumb-list">
                                                                <a data-toggle="tooltip" title="Anderw" href="#">
                                                                    <img alt="" src="images/resources/userlist-1.jpg"/>  
                                                                </a>
                                                                <a data-toggle="tooltip" title="frank" href="#">
                                                                    <img alt="" src="images/resources/userlist-2.jpg"/>  
                                                                </a>
                                                                <a data-toggle="tooltip" title="Sara" href="#">
                                                                    <img alt="" src="images/resources/userlist-3.jpg"/>  
                                                                </a>
                                                                <a data-toggle="tooltip" title="Amy" href="#">
                                                                    <img alt="" src="images/resources/userlist-4.jpg"/>  
                                                                </a>
                                                                <a data-toggle="tooltip" title="Ema" href="#">
                                                                    <img alt="" src="images/resources/userlist-5.jpg"/>  
                                                                </a>
                                                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#" title="">24+ more</a> liked</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="coment-area" style={{}}>
                                                        <ul className="we-comet">
                                                            <li>
                                                                <div className="comet-avatar">
                                                                    <img src="images/resources/nearly3.jpg" alt=""/>
                                                                </div>
                                                                <div className="we-comment">
                                                                    <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                                                    <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel</p>
                                                                    <div className="inline-itms">
                                                                        <span>1 year ago</span>
                                                                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                                                        <a href="#" title=""><i className="fa fa-heart"></i><span>20</span></a>
                                                                    </div>
                                                                </div>

                                                            </li>
                                                            <li>
                                                                <div className="comet-avatar">
                                                                    <img src="images/resources/comet-4.jpg" alt=""/>
                                                                </div>
                                                                <div className="we-comment">
                                                                    <h5><a href="time-line.html" title="">Sophia</a></h5>
                                                                    <p>we are working for the dance and sing songs. this video is very awesome for the youngster.
                                                                        <i className="em em-smiley"></i>
                                                                    </p>
                                                                    <div className="inline-itms">
                                                                        <span>1 year ago</span>
                                                                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                                                        <a href="#" title=""><i className="fa fa-heart"></i><span>20</span></a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="" className="showmore underline">more comments+</a>
                                                            </li>
                                                            <li className="post-comment">
                                                                <div className="comet-avatar">
                                                                    <img src="images/resources/nearly1.jpg" alt=""/>
                                                                </div>
                                                                <div className="post-comt-box">
                                                                    <form method="post">
                                                                        <textarea placeholder="Post your comment"></textarea>
                                                                        <div className="add-smiles">
                                                                            <div className="uploadimage">
                                                                                <i className="fa fa-image"></i>
                                                                                <label className="fileContainer">
                                                                                    <input type="file"/>
                                                                                </label>
                                                                            </div>
                                                                            <span className="em em-expressionless" title="add icon"></span>
                                                                            <div className="smiles-bunch">
                                                                                <i className="em em---1"></i>
                                                                                <i className="em em-smiley"></i>
                                                                                <i className="em em-anguished"></i>
                                                                                <i className="em em-laughing"></i>
                                                                                <i className="em em-angry"></i>
                                                                                <i className="em em-astonished"></i>
                                                                                <i className="em em-blush"></i>
                                                                                <i className="em em-disappointed"></i>
                                                                                <i className="em em-worried"></i>
                                                                                <i className="em em-kissing_heart"></i>
                                                                                <i className="em em-rage"></i>
                                                                                <i className="em em-stuck_out_tongue"></i>
                                                                            </div>
                                                                        </div>

                                                                        <button type="submit"></button>
                                                                    </form>	
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/*<!-- without image -->*/}
                                    </div>
                                </div>  {/*<!-- centerl meta -->*/}
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
                                                    {/*<!-- Tab panes --> */}
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
                                            <h4 className="widget-title">Explor Events <a title="" href="#" className="see-all">See All</a></h4>
                                            <div className="rec-events bg-purple">
                                                <i className="ti-gift"></i>
                                                <h6><a href="#" title="">Ocean Motel good night event in columbia</a></h6>
                                                <img src="images/clock.png" alt=""/>
                                            </div>
                                            <div className="rec-events bg-blue">
                                                <i className="ti-microphone"></i>
                                                <h6><a href="#" title="">2016 The 3rd International Conference</a></h6>
                                                <img src="images/clock.png" alt=""/>
                                            </div>
                                        </div> {/*<!-- explore events -->*/}
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
                                        </div> {/*<!-- profile intro widget -->*/}
                                        <div className="widget stick-widget">
                                            <h4 className="widget-title">Recent Links <a title="" href="#" className="see-all">See All</a></h4>
                                            <ul className="recent-links">
                                                <li>
                                                    <figure><img src="images/resources/recentlink-1.jpg" alt=""/></figure>
                                                    <div className="re-links-meta">
                                                        <h6><a href="#" title="">moira's fade reaches much farther than you think.</a></h6>
                                                        <span>2 weeks ago </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <figure><img src="images/resources/recentlink-2.jpg" alt=""/></figure>
                                                    <div className="re-links-meta">
                                                        <h6><a href="#" title="">daniel asks if we want him to do the voice of doomfist</a></h6>
                                                        <span>3 months ago </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <figure><img src="images/resources/recentlink-3.jpg" alt=""/></figure>
                                                    <div className="re-links-meta">
                                                        <h6><a href="#" title="">the pitnik overwatch scandals.</a></h6>
                                                        <span>1 day before</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>	
                        </div>
                        
                    </div>
                </div>
            </div>	
        </section>
    )
}

export default Newfeed;