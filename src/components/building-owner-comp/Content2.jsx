import React from "react";
import "../../custom_style/custom.css";
import CardPartnership from "./CardPartnership";
import ImageURL from "../../assets/img/colaboration.jpeg";
import ImageURL2 from "../../assets/img/advertisement.png";
import ImageURL3 from "../../assets/img/prospect.png";

const Content2 = () => {
  return (
    <>
      <div className="container-fluid py-5 gotham-book">
        <div className="container my-5">
          <div className="header">
            <h1 className="fs-1 fw-bold gotham-medium fw-bold gotham-medium w-75 text-center mx-auto mb-4">
              How does Workfrom Increase Your Office Occupancy?
            </h1>
            <p className="fs-6 text-center w-75 mx-auto">
              Tim profesional digital marketing kami dapat menciptakan strategi
              khusus untuk menjangkau target pasar & capai tujuan okupansi
              gedung Anda.
            </p>
          </div>
          <div className="content mt-5">
            <div className="row d-flex justify-content-around">
              <div className="col-md-3">
                <CardPartnership
                  image={ImageURL}
                  title="Kami Berkolaborasi Mencapai Target Penjualan Optimal"
                  text="Keuntungan meningkat pesat seiring penaikan tingkat okupansi gedung kantor."
                />
              </div>
              <div className="col-md-3">
                <CardPartnership
                  image={ImageURL2}
                  title="Kami membuat iklan online khusus untuk Anda!"
                  text="Iklan disesuaikan untuk meraih target pasar potensial."
                />
              </div>
              <div className="col-md-3">
                <CardPartnership
                  image={ImageURL3}
                  title="Kami menghasilkan prospek untuk Tim Penjualan Anda."
                  text="Dengan prospek berkualitas, Anda dapat mengoptimalkan pengeluaran pemasaran."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
