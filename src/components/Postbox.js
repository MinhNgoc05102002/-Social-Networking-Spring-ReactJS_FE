function Postbox() {
    return (
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
                        <div className="description">
                            <p>
                                World's most beautiful car in Curabitur <a href="#" title="">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                            </p>
                        </div>
                        <figure>
                            <div className="img-bunch">
                                <figure>
                                    <a className="strip" href="images/resources/album1.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                                    <img src="images/resources/album1.jpg" alt=""/>
                                    </a>
                                </figure>
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
        </div>
    );
}
export default Postbox;