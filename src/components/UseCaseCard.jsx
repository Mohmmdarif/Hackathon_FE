import React from "react";
import "../custom_style/custom.css";
import Map from "./Map";
import CardComp from "./CardComp";
import OfficeUseCase from "../assets/img/OfficeUseCase.png";
import OfficeUseCase2 from "../assets/img/OfficeUseCase2.png";

const UseCaseCard = () => {
  return (
    <div className="container-fluid gotham-book">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <CardComp
              title="Ivory"
              image={OfficeUseCase}
              building="Yafurni"
              location="Jl. Iskandar Muda No.7, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153"
              person="20 Person"
              price="
IDR. 1.400.000"
            />
            <br />
            <CardComp
              title="Wilberforce"
              image={OfficeUseCase2}
              building="Clapham"
              location="Komplek Ruko Centre Point Medan, Jl. Timor Blok D No.1, Kesawan, Kec. Medan Bar., Kota Medan, Sumatera Utara 20231"
              person="80 Person"
              price="
IDR. 2.999.000"
            />
          </div>
          <div className="col-md-4">
            <div className="container d-flex flex-column mvh-100 text-center">
              <div className="row flex-grow-1">
                <div className="col-12">
                  <div className="card shadow h-100">
                    <Map />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
