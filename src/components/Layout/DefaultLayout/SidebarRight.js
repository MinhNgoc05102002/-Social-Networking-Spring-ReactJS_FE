import classNames from 'classnames/bind';

function SidebarRight() {
    return (
        <div className="fixed-sidebar right">
            <div className="chat-friendz">
                <ul className="chat-users">
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend1.jpg" alt=""/>
                            <span className="status f-online"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend2.jpg" alt=""/>
                            <span className="status f-away"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend3.jpg" alt=""/>
                            <span className="status f-online"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend4.jpg" alt=""/>
                            <span className="status f-offline"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend5.jpg" alt=""/>
                            <span className="status f-online"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend6.jpg" alt=""/>
                            <span className="status f-online"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend7.jpg" alt=""/>
                            <span className="status f-offline"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend8.jpg" alt=""/>
                            <span className="status f-online"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend9.jpg" alt=""/>
                            <span className="status f-away"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend10.jpg" alt=""/>
                            <span className="status f-away"></span>
                        </div>
                    </li>
                    <li>
                        <div className="author-thmb">
                            <img src="images/resources/side-friend8.jpg" alt=""/>
                            <span className="status f-online"></span>
                        </div>
                    </li>
                </ul>
                <div className="chat-box">
                    <div className="chat-head">
                        <span className="status f-online"></span>
                        <h6>Bucky Barnes</h6>
                        <div className="more">
                            <div className="more-optns"><i className="ti-more-alt"></i>
                                <ul>
                                    <li>block chat</li>
                                    <li>unblock chat</li>
                                    <li>conversation</li>
                                </ul>
                            </div>
                            <span className="close-mesage"><i className="ti-close"></i></span>
                        </div>
                    </div>
                    <div className="chat-list">
                        <ul>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        HI, Jack i have faced a problem with your software. are you available now, when i install this i have to received an error.
                                    </span>
                                    <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Today at 2:12pm</time></span>
                                </div>
                            </li>
                            <li className="you">
                                <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt=""/></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi tina, Please let me know your purchase code, and show me the screnshot of error.
                                    </span>
                                    <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Today at 2:14pm</time></span>
                                </div>
                            </li>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Yes, sure please wait a while, i ll show you the complete error list. Thank you.
                                    </span>
                                    <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Today at 2:15pm</time></span>
                                </div>
                            </li>
                        </ul>
                        <form className="text-box">
                            <textarea placeholder="Post enter to post..."></textarea>
                            <div className="add-smiles">
                                <span title="add icon" className="em em-expressionless"></span>
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
                </div>
            </div>
        </div>
    )
}

export default SidebarRight;