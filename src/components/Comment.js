import {useEffect, useState} from "react";
import axios from "axios";

function Comment({comment}) {
    const idComment = comment.id;
    let userId = 1;
    const [likeCount, setLikeCount] = useState(comment.likeCount);
    const [like, setLike] = useState(false);

    const addLike = () => {
        axios.get('http://localhost:8080/posts/' + comment.post.id + '/cmts/' + idComment + '/like/users/' + userId).then(data => {
            setLike(!like);
            if(like) setLikeCount(likeCount - 1)
            else setLikeCount(likeCount + 1)
        })
    }

    return ( 
        <li>
            <div className="comet-avatar">
                <img src={comment.user.image} alt=""/>
            </div>
            <div className="we-comment">
                <h5><a href="time-line.html" title="">{comment.user.displayName}</a></h5>
                <p>{comment.content}</p>
                <div className="inline-itms">
                    <span>{comment.commentAt}</span>
                    <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                    <a href="javascript:void(0);" style={{color: like?"red":"gray"}} onClick={addLike} title=""><i className="fa fa-heart"></i><span>{likeCount}</span></a>
                </div>
            </div>
        </li>
    );
}

export default Comment;