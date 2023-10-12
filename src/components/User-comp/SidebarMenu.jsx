import React from "react";
import "../../custom_style/custom.css";

const SidebarMenu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-light col-auto col-md-3 min-vh-100">
          <a
            href="#/"
            className="text-decoration-none text-black d-flex align-items-center"
          >
            <i className="fs-4 bi bi-speedometer"></i>
            <span className="ms-1 fs-4">Brand</span>
          </a>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-5"
                aria-current="page"
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ms-2">Dashboard</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-5"
                aria-current="page"
              >
                <i className="bi bi-house"></i>
                <span className="ms-2">Produk</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4">
              <a
                href="#/"
                className="nav nav-link text-black fs-5"
                aria-current="page"
              >
                <i className="bi bi-table"></i>
                <span className="ms-2">Pelanggan</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
