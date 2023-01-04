

function Comment({comment}) {
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
                    <a href="#" title=""><i className="fa fa-heart"></i><span>{comment.likeCount}</span></a>
                </div>
            </div>
        </li>
    );
}

export default Comment;