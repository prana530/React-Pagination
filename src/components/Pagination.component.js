import React from "react";

const PaginationComponent = ({ totalPosts, postsPerPage, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link" onClick={()=>paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;
