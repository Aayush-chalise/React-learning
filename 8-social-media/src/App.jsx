import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./context/PostListState";

function App() {
  const [currPage, setCurrPage] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar currPage={currPage} setCurrPage={setCurrPage}></Sidebar>
        <div className="content">
          <Header></Header>
          {currPage === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
