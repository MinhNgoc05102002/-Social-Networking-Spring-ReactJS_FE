function Profile() {
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
                                    <div className="central-meta postbox">
                                        <span className="create-post">Create post</span>
                                        <div className="new-postbox">
                                            <figure>
                                                <img src="images/resources/admin.jpg" alt=""/>
                                            </figure>
                                            <div className="newpst-input">
                                                <form method="post">
                                                    <textarea rows="2" placeholder="Share some what you are thinking?"></textarea>
                                                </form>
                                            </div>
                                            <div className="attachments">
                                                <ul>
                                                    <li>
                                                        <span className="add-loc">
                                                            <i className="fa fa-map-marker"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-music"></i>
                                                        <label className="fileContainer">
                                                            <input type="file"/>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-image"></i>
                                                        <label className="fileContainer">
                                                            <input type="file"/>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-video-camera"></i>
                                                        <label className="fileContainer">
                                                            <input type="file"/>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-camera"></i>
                                                        <label className="fileContainer">
                                                            <input type="file"/>
                                                        </label>
                                                    </li>
                                                    <li className="preview-btn">
                                                        <button className="post-btn-preview" type="submit" data-ripple="">Preview</button>
                                                    </li>
                                                </ul>
                                                <button className="post-btn" type="submit" data-ripple="">Post</button>
                                            </div>
                                            <div className="add-location-post">
                                                <span>Drag map point to selected area</span>
                                                <div className="row">

                                                    <div className="col-lg-6">
                                                        <label className="control-label">Lat :</label>
                                                        <input type="text" className="" id="us3-lat" />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>Long :</label>
                                                        <input type="text" className="" id="us3-lon" />
                                                    </div>
                                                </div>
                                                {/*<!-- map -->*/}
                                                <div id="us3"></div>
                                            </div>
                                        </div>
                                        
                                    </div> {/*<!-- add post new box -->*/}
                                    <div className="central-meta">
                                        <span className="create-post">Suggested Friend's <a href="#" title="">See All</a></span>
                                        <ul className="suggested-frnd-caro">
                                            <li>
                                                <img src="images/resources/recent1.jpg" alt=""/>
                                                <div className="sugtd-frnd-meta">
                                                    <a href="#" title="">Olivia</a>
                                                    <span>1 mutual friend</span>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a href="#" title="Add friend"><i className="fa fa-user-plus"></i></a></li>
                                                        <li className="remove-frnd"><a href="#" title="remove friend"><i className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="images/resources/recent2.jpg" alt=""/>
                                                <div className="sugtd-frnd-meta">
                                                    <a href="#" title="">Emma watson</a>
                                                    <span>2 mutual friend</span>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a href="#" title="Add friend"><i className="fa fa-user-plus"></i></a></li>
                                                        <li className="remove-frnd"><a href="#" title="remove friend"><i className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="images/resources/recent3.jpg" alt=""/>
                                                <div className="sugtd-frnd-meta">
                                                    <a href="#" title="">Isabella</a>
                                                    <span><a href="#" title="">Emmy</a> is mutual friend</span>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a href="#" title="Add friend"><i className="fa fa-user-plus"></i></a></li>
                                                        <li className="remove-frnd"><a href="#" title="remove friend"><i className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="images/resources/recent4.jpg" alt=""/>
                                                <div className="sugtd-frnd-meta">
                                                    <a href="#" title="">Amelia</a>
                                                    <span>5 mutual friend</span>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a href="#" title="Add friend"><i className="fa fa-user-plus"></i></a></li>
                                                        <li className="remove-frnd"><a href="#" title="remove friend"><i className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="images/resources/recent5.jpg" alt=""/>
                                                <div className="sugtd-frnd-meta">
                                                    <a href="#" title="">Sophia</a>
                                                    <span>1 mutual friend</span>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a href="#" title="Add friend"><i className="fa fa-user-plus"></i></a></li>
                                                        <li className="remove-frnd"><a href="#" title="remove friend"><i className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="images/resources/recent6.jpg" alt=""/>
                                                <div className="sugtd-frnd-meta">
                                                    <a href="#" title="">Amelia</a>
                                                    <span>3 mutual friend</span>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a href="#" title="Add friend"><i className="fa fa-user-plus"></i></a></li>
                                                        <li className="remove-frnd"><a href="#" title="remove friend"><i className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> {/*<!-- suggested friends -->*/}
                                    <div className="loadMore">
                                        <div className="central-meta item">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <img src="images/resources/nearly1.jpg" alt=""/>
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
                                                        <ins><a href="time-line.html" title="">Jack Carter</a> share <a href="#" title="">link</a></ins>
                                                        <span><i className="fa fa-globe"></i> published: january,5 2010 19:PM </span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <figure>
                                                            <a href="https://www.youtube.com/watch?v=fF382gwEnG8" title="" data-strip-group="mygroup" className="strip vdeo-link" data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }">
                                                            <img src="images/resources/user-post.jpg" alt=""/>
                                                                <i>
                                                                    <svg version="1.1" className="play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="55px" width="55px"
                                                                    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
                                                                <path className="stroke-solid" fill="none" stroke=""  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                                                                    C97.3,23.7,75.7,2.3,49.9,2.5"/>
                                                                <path className="icon" fill="" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
                                                                    </svg>
                                                                </i>
                                                                <h2>Canada tourist spots you must visit in 2020</h2>
                                                            </a>
                                                            <ul className="like-dislike">
                                                                <li><a className="bg-purple" href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack"></i></a></li>
                                                                <li><a className="bg-blue" href="#" title="Like Post"><i className="ti-thumb-up"></i></a></li>
                                                                <li><a className="bg-red" href="#" title="dislike Post"><i className="ti-thumb-down"></i></a></li>
                                                            </ul>

                                                        </figure>												
                                                        <div className="description">
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.
                                                            </p>
                                                        </div>
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
                                        </div>
                                        <div className="central-meta item">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <img src="images/resources/nearly1.jpg" alt=""/>
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
                                                        <ins><a href="time-line.html" title="">Digital Market</a></ins>
                                                        <span>sponsored <i className="fa fa-globe"></i></span>
                                                        
                                                    </div>
                                                    <div className="post-meta">
                                                        <figure>
                                                            <img src="images/sponsors.gif" alt=""/>
                                                            <ul className="like-dislike">
                                                                <li><a className="bg-purple" href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack"></i></a></li>
                                                                <li><a className="bg-blue" href="#" title="Like Post"><i className="ti-thumb-up"></i></a></li>
                                                                <li><a className="bg-red" href="#" title="dislike Post"><i className="ti-thumb-down"></i></a></li>
                                                            </ul>
                                                        </figure>	
                                                        <div className="description">
                                                            <a href="#" className="learnmore" data-ripple="">Learn More</a>
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.

                                                            </p>
                                                        </div>
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
                                                    <div className="coment-area" style={{display: "block"}}>
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
                                        </div> {/*<!-- digital sponsors -->*/}
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
                                        </div>
                                        <div className="central-meta item">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <img alt="" src="images/resources/friend-avatar10.jpg"/>
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
                                                        <ins><a title="" href="time-line.html">Janice Griffith</a></ins>
                                                        <span>published: june,2 2010 19:PM</span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            Curabitur World's most beautiful car in <a title="" href="#">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                                                        </p>
                                                    </div>
                                                    <div className="post-meta">
                                                        <div className="linked-image align-left">
                                                            <a title="" href="#"><img alt="" src="images/resources/page1.jpg"/></a>
                                                        </div>
                                                        <div className="detail">
                                                            <span>Love Maid - HighChill</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                                                            <a title="" href="#">www.sample.com</a>
                                                        </div>		
                                                        
                                                        <ul className="like-dislike">
                                                                <li><a className="bg-purple" href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack"></i></a></li>
                                                                <li><a className="bg-blue" href="#" title="Like Post"><i className="ti-thumb-up"></i></a></li>
                                                                <li><a className="bg-red" href="#" title="dislike Post"><i className="ti-thumb-down"></i></a></li>
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
                                        </div>
                                        <div className="central-meta item">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <img src="images/resources/nearly6.jpg" alt=""/>
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
                                                        <ins><a href="time-line.html" title="">Sophia</a> shared location</ins>
                                                        <span><i className="fa fa-globe"></i> published: january,5 2010 19:PM</span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <div className="post-map">
                                                            <div className="nearby-map">
                                                                <div id="map-canvas"></div>
                                                            </div>
                                                            <ul className="like-dislike">
                                                                <li><a className="bg-purple" href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack"></i></a></li>
                                                                <li><a className="bg-blue" href="#" title="Like Post"><i className="ti-thumb-up"></i></a></li>
                                                                <li><a className="bg-red" href="#" title="dislike Post"><i className="ti-thumb-down"></i></a></li>
                                                            </ul>
                                                        </div> {/*<!-- near by map -->*/}

                                                        <div className="description">
                                                            <p>
                                                                Curabitur Lonely Cat Enjoying in Summer <a href="#" title="">#mypage</a> ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                                                            </p>
                                                        </div>
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
                                        </div>
                                        
                                        <div className="central-meta item">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <img src="images/resources/nearly1.jpg" alt=""/>
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
                                                        <ins><a href="time-line.html" title="">Jack Carter</a> Post Album</ins>
                                                        <span><i className="fa fa-globe"></i> published: September,15 2020 19:PM </span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <p>
                                                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                        </p>
                                                        <figure>
                                                            <div className="img-bunch">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                                        <figure>
                                                                            <a className="strip" href="images/resources/album1.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                                            <img src="images/resources/album1.jpg" alt=""/>
                                                                            </a>
                                                                        </figure>
                                                                        <figure>
                                                                            <a className="strip" href="images/resources/album2.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                                            <img src="images/resources/album2.jpg" alt=""/>
                                                                            </a>
                                                                        </figure>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                                        <figure>
                                                                            <a className="strip" href="images/resources/album6.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                                            <img src="images/resources/album6.jpg" alt=""/>
                                                                            </a>
                                                                        </figure>
                                                                        <figure>
                                                                            <a className="strip" href="images/resources/album5.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                                            <img src="images/resources/album5.jpg" alt=""/>
                                                                            </a>
                                                                        </figure>
                                                                        <figure>
                                                                            <a className="strip" href="images/resources/album4.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                                            <img src="images/resources/album4.jpg" alt=""/>
                                                                            </a>
                                                                            <div className="more-photos">
                                                                                <span>+15</span>
                                                                            </div>
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            </div>	
                                                            <ul className="like-dislike">
                                                                <li><a className="bg-purple" href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack"></i></a></li>
                                                                <li><a className="bg-blue" href="#" title="Like Post"><i className="ti-thumb-up"></i></a></li>
                                                                <li><a className="bg-red" href="#" title="dislike Post"><i className="ti-thumb-down"></i></a></li>
                                                            </ul>
                                                        </figure>	
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
                                        </div>
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