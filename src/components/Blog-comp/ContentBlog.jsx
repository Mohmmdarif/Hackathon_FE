import React from "react";
import "../../custom_style/custom.css";
import { Breadcrumb } from "react-bootstrap";
import CardBlog from "./CardBlog";
import imgBlog1 from "../../assets/img/blog1.jpg";
import imgBlog2 from "../../assets/img/blog2.jpg";
import Pagination from "react-bootstrap/Pagination";

const ContentBlog = () => {
  return (
    <>
      <div className="container-fluid gotham-book py-5 bg-light">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item href="/" className="underlined-none">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Blog</Breadcrumb.Item>
          </Breadcrumb>
          <div className="container d-flex flex-row flex-wrap">
            <div className="row ">
              <div className="col-md-4 d-flex align-items-stretch">
                <CardBlog
                  imgURL={imgBlog1}
                  titleBlog="Diskusi Lebih Nyaman Dengan Interior Ruang Rapat Minimalis"
                  penulis="By Rista Fathika on Oktober 5, 2023"
                  content="Optimalkan diskusi dalam rapat dengan desain interior ruang rapat minimalis yang nyaman dan fungsional."
                />
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <CardBlog
                  imgURL={imgBlog2}
                  titleBlog="Tipsnya Sewa Ruang Kantor Di Jakarta: Dapatkan Yang Terbaik!"
                  penulis="By Atalya on Oktober 5, 2023"
                  content="Temukan panduan lengkap untuk sewa ruang kantor yang tepat di Jakarta. Mulai dari memilih lokasi yang tepat hingga cara negosiasi yang efektif."
                />
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <CardBlog
                  imgURL={imgBlog1}
                  titleBlog="Diskusi Lebih Nyaman Dengan Interior Ruang Rapat Minimalis"
                  penulis="By Rista Fathika on Oktober 5, 2023"
                  content="Optimalkan diskusi dalam rapat dengan desain interior ruang rapat minimalis yang nyaman dan fungsional."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex align-items-stretch">
                <CardBlog
                  imgURL={imgBlog1}
                  titleBlog="Diskusi Lebih Nyaman Dengan Interior Ruang Rapat Minimalis"
                  penulis="By Rista Fathika on Oktober 5, 2023"
                  content="Optimalkan diskusi dalam rapat dengan desain interior ruang rapat minimalis yang nyaman dan fungsional."
                />
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <CardBlog
                  imgURL={imgBlog1}
                  titleBlog="Diskusi Lebih Nyaman Dengan Interior Ruang Rapat Minimalis"
                  penulis="By Rista Fathika on Oktober 5, 2023"
                  content="Optimalkan diskusi dalam rapat dengan desain interior ruang rapat minimalis yang nyaman dan fungsional."
                />
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <CardBlog
                  imgURL={imgBlog2}
                  titleBlog="Tipsnya Sewa Ruang Kantor Di Jakarta: Dapatkan Yang Terbaik!"
                  penulis="By Atalya on Oktober 5, 2023"
                  content="Temukan panduan lengkap untuk sewa ruang kantor yang tepat di Jakarta. Mulai dari memilih lokasi yang tepat hingga cara negosiasi yang efektif."
                />
              </div>
            </div>
          </div>
          <Pagination className="d-flex justify-content-center mt-4">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default ContentBlog;
