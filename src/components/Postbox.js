import {useEffect, useState} from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

function Postbox({post}) {
    const idPost = post.id;
    let userId = 1;
    const [listComment, setListComment] = useState([]);
    const [likeCount, setLikeCount] = useState(post.likeCount);
    const [commentCount, setCommentCount] = useState(post.commentCount);
    const [like, setLike] = useState(false);
    // const [checkReply, setCheckReply] = useState(-1);
    // const [listReply, setListReply] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:8080/posts/' + idPost + '/cmts').then(data => {
            // console.log("list comment trc: ",  listComment)
            setListComment([...data.data])
           
        });

        axios.get('http://localhost:8080/posts/' + idPost + '/likes').then(data => {
            for (let i = 0; i < data.data.length; i++) {
                if(data.data[i].user.id === userId) {
                    setLike(true)
                }
            }
        })

        // axios.get('http://localhost:8080/posts/' + idPost).then(data => {
        //     // console.log("list comment trc: ",  listComment)
        //     // console.log("post: ", data.data)
        //     setLikeCount(data.data.likeCount)
        //     setCommentCount(data.data.commentCount)
        // });
    }, [])

    const addComment = (e) => {
        if (e.key === 'Enter') {
            const comment = {
                content: e.target.value
            }
            axios.post('http://localhost:8080/posts/' + idPost + '/cmts/users/' + userId, comment).then(data => {
                axios.get('http://localhost:8080/posts/' + idPost + '/cmts').then(data => {
                    setListComment([...data.data]);
                    setCommentCount(commentCount + 1)
                })
            }).then( () => {
                e.target.value = '';
            })
        }

    }

    const addLike = () => {
        axios.get('http://localhost:8080/posts/' + idPost + '/like/users/' + userId).then(data => {
            setLike(!like);
            if(like) setLikeCount(likeCount - 1)
            else setLikeCount(likeCount + 1)
        })
    }


    return (
        <div className="central-meta item">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <img src={post.user.image} alt=""/>
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
                        <ins><a href="time-line.html" title="">{post.user.displayName}</a> Post Album</ins>
                        <span><i className="fa fa-globe"></i> published: {post.createAt} </span>
                    </div>
                    <div className="post-meta">
                        <div className="description">
                            <p>
                                {post.content}
                            </p>
                        </div>
                        <figure>
                            <div className="img-bunch">
                                <figure>
                                    <a className="strip" href="images/resources/album1.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                                    {/* <img src="images/resources/album1.jpg" alt=""/> */}
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
                                    <div style={{color: like?"red":"gray"}} onClick={addLike} className="likes heart" title="Like/Dislike">❤ <span>{likeCount}</span></div>
                                </li>
                                <li>
                                    <span className="comment" title="Comments">
                                        <i className="fa fa-commenting"></i>
                                        <ins>{commentCount}</ins>
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
                            {listComment.map(comment =>(
                                <li key={comment.id}>
                                    <div className="comet-avatar">
                                        <img src={comment.user.image} alt=""/>
                                    </div>
                                    <div className="we-comment">
                                        <h5><a href="time-line.html" title="">{comment.user.displayName}</a></h5>
                                        <p>{comment.content}</p>
                                        <div className="inline-itms">
                                            <span>{comment.commentAt}</span>
                                            <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                            <a href="#" title=""><i className="fa fa-heart"></i><span>{comment.likeCount}</span></a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            
                            
                            <li className="post-comment">
                                <div className="comet-avatar">
                                    <img src="images/resources/nearly1.jpg" alt=""/>
                                </div>
                                <div className="post-comt-box">
                                    <form method="post">
                                        <textarea onKeyDown={(event) => {addComment(event)}}  id="comment"  placeholder="Post your comment"></textarea>
                                        <div className="add-smiles">
                                            <div className="uploadimage">
                                                <i className="fa fa-image"></i>
                                                <label className="fileContainer">
                                                    {/* <input type="file"/> */}
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

                                        <button id="postCommnet" type="submit"></button>
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