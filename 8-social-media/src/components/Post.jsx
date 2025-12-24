import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import PostListContext from "../context/PostListContext";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  console.log(post);

  return (
    <div className="card-container">
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.body}
            <span
              onClick={() => {
                deletePost(post.id);
              }}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              <MdDelete />
              <span className="visually-hidden">unread messages</span>
            </span>
          </p>

          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {post.reactions.likes} people.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
