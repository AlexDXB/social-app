import React, { useState } from "react";
import "../Post/Post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  TextsmsOutlined,
} from "@mui/icons-material";
import Comment from "../Comments/Comment";

const Post = ({ post }) => {
  const liked = false;
  const [openComments, setOpenComments] = useState(false);
  const openComment = () => {
    setOpenComments(!openComments);
  };
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="info">
            <img src={post.profilePic} alt="" />
            <div className="text">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="time">a few seconds ago </span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 Likes
          </div>
          <div className="item" onClick={openComment}>
            <TextsmsOutlined />5 Comments
          </div>
          <div className="item">
            <ShareOutlined />3 Shares
          </div>
        </div>
        {openComments && <Comment />}
      </div>
    </div>
  );
};

export default Post;
