import React from "react";
import Accordion from "react-bootstrap/Accordion";

const SectionEight = () => {
  return (
    <div className="container-fluid my-5 gotham-book">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="w-50 fs-1 fw-semibold gotham-medium">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="col-md-8">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong className="fs-4 gotham-medium">
                    #1 Apa itu Workfrom?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Workfrom merupakan sebuah platform yang menghubungkan penyewa
                  dengan ruang kantor yang tepat di mana saja di berbagai
                  lokasi. Kami dapat membantu menemukan kebutuhan penyewa dan
                  pemilik gedung.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong className="fs-4 gotham-medium">
                    #2 Fasilitas apa saja yang ditawarkan?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Fasilitas mencakup akses internet berkecepatan tinggi, minuman
                  gratis, area hiburan dan area lounge, serta kesempatan untuk
                  memperluas networking.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong className="fs-4 gotham-medium">
                    #3 Apakah buka di akhir pekan dan hari libur?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Private Office tutup selama akhir pekan dan hari libur. Tetapi
                  kedepannya bisa terdapat perubahan pada jam operasional kami.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
