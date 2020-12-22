import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostsComponent from "./components/Posts.component";
import PaginationComponent from "./components/Pagination.component";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //Once the component gets mounted this funcion runs, and it expects a dependicies
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(result.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current page posts
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  //Function to catch click event from child component
  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="container mt-5  ">
      <h1 className="mb-4 text-primary">React Pagination </h1>
      <div className="border border-primary p-3 ">
        <PostsComponent posts={currentPosts} loading={loading} />
        <PaginationComponent
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
