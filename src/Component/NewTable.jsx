import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

const NewTable = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [currentPosts, setcurrentPosts] = useState([]);

  const fetchPost = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //console.table(res);
    setPost(res.data);
    paginationData(res.data);
    setLoading(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onPageChange = (type) => {
    console.log("currentPage", currentPage);
    if (type === "prev") {
      setCurrentPage(currentPage - 1);
    }
    if (type === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginationData = (data) => {
    if (data) {
      const postsData = [...data];
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);
      setcurrentPosts(currentPosts);
    }
    // console.table(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    paginationData(post);
  }, [currentPage, postsPerPage, post]);

  //change page

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Empolyee Data</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        onPageChange={onPageChange}
        postPerPage={postsPerPage}
        totalPosts={post.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NewTable;
