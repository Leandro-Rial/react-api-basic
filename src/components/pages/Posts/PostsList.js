import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Search from "../utils/Search";
import Loading from "../utils/Loading";
import Pagination from "../utils/Pagination";
import axios from "axios";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(res.data);
    };

    getPosts();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsForPage] = useState(12);
  const indexOfLastPage = currentPage * PostsForPage;
  const indexOfFirstPage = indexOfLastPage - PostsForPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
  const totalPagesNum = Math.ceil(posts.length / PostsForPage);

  return (
    <>
      <div className="container-list">
        <h1>React Api</h1>
        <div className="functions">
          <div className="search">
            <Search setSearchTerm={setSearchTerm} />
          </div>
          <div className="pagination">
            <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
          </div>
        </div>
        <div className="list">
          {posts.length > 0 ? (
            currentPosts
              .filter((post) => {
                if (searchTerm === "") {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return post;
                }
                return false;
              })
              .map((post) => (
                <div className="cards" key={post.id}>
                  <Posts post={post} />
                </div>
              ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};

export default PostsList;
