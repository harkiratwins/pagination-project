import React from "react";

function nextPage(e) {
    e.preventDefault();
  console.log("next");
}

function prePage(e) {
    e.preventDefault();
  console.log("prev");
}

const Pagination = ({ postPerPage, totalPosts, paginate,onPageChange }) => {
  console.log("post", "total", postPerPage, totalPosts);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

//   console.log("pageNumber",totalPosts , postPerPage , pageNumber);
  return (
    <nav>
      <ul className="pagination">
        <a onClick={()=>onPageChange("prev")} href="!#" className="page-link">prev</a>
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}

        <a onClick={()=>onPageChange("next")} href="!#" className="page-link">next</a>
      </ul>
    </nav>
  );
};

export default Pagination;
