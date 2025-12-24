import PostListContext from "./PostListContext";
import { useEffect, useReducer, useState } from "react";

const PostListreducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POSTLIST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "NEW_POSTLIST") {
    newPostList = [action.payload, ...currPostList];
  } else if ((action.type = "ADD_INITIAL_POSTS")) {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListreducer, []);

  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    const newPostListAction = {
      type: "NEW_POSTLIST",
      payload: post,
    };
    dispatchPostList(newPostListAction);
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: posts,
    });
  };

  const deletePost = (postId) => {
    const deletePostListAction = {
      type: "DELETE_POSTLIST",
      payload: {
        postId,
      },
    };
    dispatchPostList(deletePostListAction);
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj);
        setFetching(false);
      });

    return () => {
      // controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      // this is an object. from here we will pass the value of post list , addpost and deletepost to the context storage as an object.

      value={{
        postList,
        fetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
