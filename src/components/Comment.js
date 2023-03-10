import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
function Comment({comment}) {
    const idComment = comment.id;
    let userId =  localStorage.getItem("userPrinciple");
    const [likeCount, setLikeCount] = useState(comment.likeCount);
    const [like, setLike] = useState(false);
    const navigate = useNavigate();

    const addLike = () => {
        axios.get('http://localhost:8080/posts/' + comment.post.id + '/cmts/' + idComment + '/like/users/' + userId).then(data => {
            setLike(!like);
            if(like) setLikeCount(likeCount - 1)
            else setLikeCount(likeCount + 1)
        })
    }

    useEffect( () => {
        axios.get('http://localhost:8080/posts/' + comment.post.id + '/cmts/'+ idComment + '/likes').then(data => {
            for (let i = 0; i < data.data.length; i++) {
                if(data.data[i].user.id === userId) {
                    setLike(true)
                }
            }
        })

    }, [])

    const gotoProfile = () => {
        console.log("goto");
        navigate('/' + comment.user.id);
    }

    return ( 
        <li>
            <div onClick={gotoProfile} className="comet-avatar">
                <img src={comment.user.image} alt=""/>
            </div>
            <div className="we-comment">
                <h5><Link to={'/' + comment.user.id} title="">{comment.user.displayName}</Link></h5>
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