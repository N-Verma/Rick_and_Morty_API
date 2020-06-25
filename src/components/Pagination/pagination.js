import React from "react";

const Pagination = ({ info, pageOne, pageTwo }) => {
  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className="page-item prev">
          <span className="page-link " tabIndex="-1" aria-disabled="true">
            Previous
          </span>
        </li>
        <li className="page-item pg1 active">
          <span className="page-link" onClick={pageOne}>
            1
          </span>
        </li>
        <li className="page-item pg2" aria-current="page">
          <span value="2" className="page-link" onClick={pageTwo}>
            2{" "}
          </span>
        </li>
        <li className="page-item next">
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
