import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { addPost } from "~/services/postService";
import React, {useState} from 'react';

function NewPostbox() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newPost, setNewPost] = useState({
        content: "",
        user: {
            id: 1
        },
        status: {
            id: 1
        }
    });

    function handleChange(event) {
        setNewPost({
            ...newPost, 
            [event.target.name]: event.target.value

        })
        console.log(event.target.name)
        console.log(event.target.value)
    }

    const uploadPost = async () => {
        if (newPost.content == "") {
            return;
        }
        let userId = 1;
        
        await dispatch(addPost(newPost));
        await navigate('/');
    }

    function handleSubmit(event) {
        event.preventDefault();
        uploadPost(newPost);
        setNewPost({
            content: "",
            user: {
                id: 1
            },
            status: {
                id: 1
            }
        });
    }
    // useEffect(() => {
    //     listAll(imageListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then(url => {
    //                 setImageList(prev => [...prev, url]);
    //             })
    //         })
    //     })
    // }, [])

    return (
        <div className="central-meta postbox">
            <span className="create-post">Create post</span>
            <div className="new-postbox">
                <figure>
                    <img src="images/resources/admin.jpg" alt=""/>
                </figure>
                <div className="newpst-input">
                    <form method="post">
                        <textarea onChange={handleChange} value={newPost.content!="" ? newPost.content : ""} name="content" rows="2" placeholder="Share some what you are thinking?"></textarea>
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
                            <button className="post-btn" onClick={handleSubmit} data-ripple="">Post</button>
                        </div>
                    </form>
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
        </div>
    );
}
export default NewPostbox;