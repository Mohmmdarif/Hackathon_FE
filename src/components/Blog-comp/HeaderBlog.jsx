import React from "react";
import "../../custom_style/custom.css";

const HeaderBlog = () => {
  return (
    <>
      <div className="container-fluid gotham-book py-5">
        <div className="container">
          <div className="header">
            <h1 className="fs-1 fw-bold gotham-medium fw-bold gotham-medium w-75 text-center mx-auto mb-4">
              Our Blog
            </h1>
            <p className="fs-6 text-center w-75 mx-auto">
              We offer private office and event room solutions that provide more
              than just a place to work. Our spaces offer a place to connect and
              collaborate with a like-minded community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBlog;
