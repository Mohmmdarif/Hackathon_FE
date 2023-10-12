import React from "react";
import "../../custom_style/custom.css";
import ImagePerson from "../../assets/img/person-img.png";
import ImageBusiness from "../../assets/img/business.jpg";
import ImagePerformance from "../../assets/img/performance.png";

const Content3 = () => {
  return (
    <>
      <div className="container-fluid py-5 gotham-book">
        <div className="container my-5">
          <div className="header">
            <h1 className="fs-1 fw-bold gotham-medium fw-bold gotham-medium w-75 text-center mx-auto mb-4">
              Why Choose Workfrom?
            </h1>
            <p className="fs-6 text-center w-75 mx-auto">
              Bermitra dengan kami untuk dapatkan keuntungan maksimal dengan
              tenants berkualitas.
            </p>
          </div>
          <div className="content mt-5">
            <div className="row pt-5">
              <div className="col-md-6">
                <img
                  src={ImagePerson}
                  alt="customer_Office"
                  width={500}
                  className="rounded-3 box-shadow"
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-self-start justify-content-center gap-3 p-3">
                <h2 className="w-100 fw-bold gotham-medium">
                  Optimalkan Gedung Kantor Anda dengan Akses Digital Solid
                </h2>
                <p className="fw-normal fs-5">
                  Agensi kami menawarkan berbagai solusi digital marketing
                  termasuk membangun website, SEO, dan SEM (Google Ads). Tarik
                  Lebih Banyak Pelanggan dengan akses digital yang mudah dan
                  cepat.
                </p>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6 d-flex flex-column align-self-start justify-content-center gap-3 p-3">
                <h2 className="w-100 fw-bold gotham-medium">
                  Tingkatkan Keuntungan Bisnis Anda Bersama Workfrom!
                </h2>
                <p className="fw-normal fs-5">
                  Dapatkan pertumbuhan ROI terbaik dan keuntungan maksimal
                  dengan solusi digital marketing Workfrom. Dengan pendekatan
                  berbasis data, jangkau audiens berkualitas dengan pesan yang
                  tepat.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={ImageBusiness}
                  alt="customer_Office"
                  width={500}
                  className="rounded-3 box-shadow"
                />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6">
                <img
                  src={ImagePerformance}
                  alt="customer_Office"
                  width={500}
                  className="rounded-3 box-shadow"
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-self-start justify-content-center gap-3 p-3">
                <h2 className="w-100 fw-bold gotham-medium">
                  Pantau Real Time Performa Penjualan Anda
                </h2>
                <p className="fw-normal fs-5">
                  Pantau kinerja penjualan dan pemasaran tim Anda secara
                  real-time dengan dasbor inovatif Workfrom. Buat keputusan
                  berbasis data untuk tetap unggul dalam persaingan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
