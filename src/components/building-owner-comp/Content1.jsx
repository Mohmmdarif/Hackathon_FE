import React from "react";
import "../../custom_style/custom.css";
import ImagePartnership from "../../assets/img/partnership-img.jpg";

const Content1 = () => {
  return (
    <>
      <div className="container-fluid gotham-book mb-4">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="content1-left">
                <p className="fs-6 fw-semibold">
                  ~ Digital Marketing Agency untuk Office Tower
                </p>
                <h1 className="fs-1 fw-bold gotham-medium mb-3">
                  Tingkatkan Tenants Office Tower Sekarang Juga Bersama Kami
                </h1>
                <p className="fs-5 fw-medium">
                  Tidak ada lagi lantai dan ruang kosong di office tower anda
                  dengan solusi strategi marketing yang tepat. Dengan
                  menggunakan digital marketing berbasis data yang efektif,
                  Workfrom siap memberikan hasil nyata bagi Anda.
                </p>
              </div>
              <div className="mt-3">
                <button className="bg-transparent text-black w-25 p-2 fw-semibold">
                  Start Now
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content1-right d-flex justify-content-center">
                <img
                  src={ImagePartnership}
                  alt="building owner"
                  className="img-fluid rounded-3 box-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
