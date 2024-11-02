import React, { useEffect, useState } from 'react'
import profile from '../../assets/blur pic.jpg'
import { MdMoreVert } from 'react-icons/md'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deletepost, getpost, updateDocId } from '../../redux/slices/feedSlice';
import { Button } from 'react-bootstrap';
import './post.css'

function Post(props) {
    const [Islike, SetIslike] = useState(false);

    const feed = useSelector(store => store.feedSlice.feed);
    const dispatch = useDispatch();

    const handlechangecolor = () => {
        SetIslike(!Islike)
    }

    useEffect(() => {
        console.log("FeedListing useEffect");
        dispatch(getpost())
      }, [dispatch])

    const handledelete = (id)=>{
        console.log("delete post clicked",id)
        dispatch(deletepost(id))

    }

    const handleupdate = (id)=>{
        console.log("update button clicked",id)
        console.log("updateDocId",updateDocId)
        dispatch(updateDocId(id));
                // props.handleShow();
          
    }
    return (
        <>
        {/* <button onClick={handleclick}>get post</button>  */}
        {
            feed?.map((post)=>{
                return(
        <div className="post" key={post?.id}>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postprofileimg' src={profile} alt="profile_pic" />
                        <span className="postusername">Usama Sarwar</span>
                        <span className="postdate">5 min ago</span>
                    </div>
                    <div className="posttopright">
                        <MdMoreVert size={18} />
                    </div>
                </div>
                <div className="postcenter">
                    <div className="postheader">
                        <h3>{post?.title}</h3>
                        <p>{post?.description}</p>
                    </div>
                    
                    <img src={props.image} alt="postimg" className="postimg" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <span className='postlikeicon' onClick={handlechangecolor} style={{ cursor: "pointer", fontSize: "24px" }}>
                            {Islike ? (
                                <FaHeart color="red" size={20} /> 
                            ) : (
                                <FaRegHeart color="black" size={20} /> 
                            )}
                        </span>
                        <span className="postlikecounter">32 people like it</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcomments">9 comments</span>
                    </div>
                </div>
                    <div className="btn-group">
                        <div className="btn_button">
                        <Button variant="danger" onClick={()=>handledelete(post?.id)}>Delete your post</Button>
                        </div>
                        <div className="btn_button">
                        <Button variant='success' onClick={()=>handleupdate(post.id)}>Edit your post</Button>
                        </div>
                    </div>
            </div>
        </div>
          )
        })
    }
        </>
    )
}

export default Post
