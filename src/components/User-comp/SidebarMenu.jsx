import React from "react";
import "../../custom_style/custom.css";
import Logo from "../../LogoWorkfrom.png";
import LogoDashboard from "../../assets/img/tdesign_dashboard-1.png";
import LogoProduct from "../../assets/img/eos-icons_product-classes-outlined.png";
import LogoCustomer from "../../assets/img/carbon_customer-service.png";
import LogoPartnership from "../../assets/img/mdi_partnership-outline.png";
import LogoOperation from "../../assets/img/carbon_operations-record.png";
import LogoLogout from "../../assets/img/Logout.png";
import NavAdmin from "./NavAdmin";

const SidebarMenu = () => {
  return (
    <div className="container-fluid bg-light gotham-book">
      <div className="row">
        <div className="bg-white col-auto col-md-2 min-vh-100 d-flex flex-column justify-content-start">
          <a
            href="#/"
            className="text-decoration-none text-black d-flex align-items-center"
          >
            <img src={Logo} alt="logo" className="ms-1 my-4" />
          </a>
          <ul className="nav nav-pills flex-column gotham-medium mt-4">
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-6"
                aria-current="page"
              >
                <i className="bi bi-speedometer2">
                  <img src={LogoDashboard} alt="dashboard-logo" />
                </i>
                <span className="ms-2">Dashboard</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-6"
                aria-current="page"
              >
                <i className="bi bi-house">
                  <img src={LogoProduct} alt="product-logo" />
                </i>
                <span className="ms-2">Produk</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-6"
                aria-current="page"
              >
                <i className="bi bi-table">
                  <img src={LogoCustomer} alt="customer-logo" />
                </i>
                <span className="ms-2">Pelanggan</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-6"
                aria-current="page"
              >
                <i className="bi bi-table">
                  <img src={LogoPartnership} alt="partnership-logo" />
                </i>
                <span className="ms-2">Mitra</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-6"
                aria-current="page"
              >
                <i className="bi bi-table">
                  <img src={LogoOperation} alt="operation-logo" />
                </i>
                <span className="ms-2">Operasi</span>
              </a>
            </li>
          </ul>
          <div className="logout px-4 py-3 h-100 d-flex justify-content-start align-items-end">
            <a href="#/" className="text-decoration-none text-black hover">
              <i className="bi bi-box-arrow-right">
                <img src={LogoLogout} alt="logout-logo" />
              </i>
              <span className="ms-2 gotham-medium text-muted">Logout</span>
            </a>
          </div>
        </div>
        <NavAdmin />
      </div>
    </div>
  );
};

export default SidebarMenu;
