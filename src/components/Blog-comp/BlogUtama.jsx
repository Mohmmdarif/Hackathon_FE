import React from "react";
import "../../custom_style/custom.css";

import { Parallax } from "react-parallax";
import { Card } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import imgBlog from "../../assets/img/parallax-image.jpg";

import NavHeader from "../NavHeader";
import Footer from "../Footer";

const BlogUtama = () => {
  return (
    <>
      <NavHeader />

      <div className="container-fluid gotham-book">
        <Parallax
          blur={2}
          bgImage={require("../../assets/img/parallax-image.jpg")}
          bgImageAlt="office"
          strength={200}
        >
          <div style={{ height: "700px" }} />
        </Parallax>
        <div className="container">
          <div className="row">
            <div className="col-md-8" style={{ marginTop: "-15rem" }}>
              <Card className="shadow-sm">
                <Card.Header>Oktober 5, 2023</Card.Header>
                <Card.Body className="px-4">
                  <blockquote className="blockquote mb-0">
                    <h1 className="fs-1 fw-bold gotham-medium w-75">
                      Diskusi Lebih Nyaman Dengan Interior Ruang Rapat Minimalis
                    </h1>
                    <hr />
                    <Breadcrumb className="fs-6">
                      <Breadcrumb.Item href="/" className="underlined-none">
                        Home
                      </Breadcrumb.Item>
                      <Breadcrumb.Item href="/blog" className="underlined-none">
                        Blog
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>Blog-Utama</Breadcrumb.Item>
                    </Breadcrumb>
                    <hr />
                    <img
                      src={imgBlog}
                      alt=""
                      className="img-fluid rounded-2 mb-3"
                    />
                    <div className="fs-6">
                      <Card.Text>
                        Optimalkan diskusi dalam rapat dengan desain interior
                        ruang rapat minimalis yang nyaman dan fungsional.
                      </Card.Text>
                      <Card.Text>
                        Dalam setiap bidang usaha, selalu ada pertemuan yang
                        dinamakan rapat untuk membahas berbagai hal. Ruang rapat
                        minimalis bisa menjadi solusi tepat untuk menghadirkan
                        kenyamanan dalam berdiskusi. Apalagi kini semakin banyak
                        kantor sewa yang memberikan kemudahan.
                      </Card.Text>
                      <Card.Text>
                        Lain halnya dengan kantor konvensional, kini dengan
                        banyaknya penyedia sewa kantor banyak keuntungan yang
                        bisa didapatkan. Fasilitasnya lebih beragam, seperti
                        meeting room, bilik telepon, teknologi multimedia, area
                        hiburan, keamanan ganda, bahkan pantry.
                      </Card.Text>
                      <Card.Text>
                        Tak dipungkiri, kenyamanan ruangan diskusi berkaitan
                        dengan seperti apa interior dan konsep yang diterapkan.
                        Ini dapat menunjang diskusi yang lebih nyaman untuk
                        berbagi pemikiran. Salah satu yang banyak digunakan pada
                        era modern ini adalah model minimalis.
                      </Card.Text>
                      <Card.Text>
                        Rapat merupakan aspek krusial yang perlu diperhatikan
                        secara khusus. Sebab, pada momen tersebutlah karyawan
                        berkesempatan mengemukakan pikiran, menyampaikan
                        permasalahan, dan banyak lainnya. Sehingga, bisa
                        mengarah pada output yang bermanfaat untuk perusahaan.
                      </Card.Text>
                      <h2 className="fw-bolder gotham-medium">
                        Konsep Interior Ruang Rapat Minimalis
                      </h2>
                      <Card.Text>
                        Membicarakan soal konsep, tidak banyak orang menyadari
                        bahwa ruangan yang terkonsep memiliki dampak cukup
                        signifikan terhadap aktivitas rapat. Pada era modern
                        seperti ini, semakin banyak kalangan muda tertarik
                        dengan konsep minimalis.
                      </Card.Text>
                      <Card.Text>
                        Bukan saja untuk hunian, namun juga ruangan untuk
                        rapat/meeting yang merupakan aktivitas wajib dunia
                        kerja. Karakteristik ruangan yang minimalis menggunakan
                        warna dominan putih. Perpaduan warna putih menghadirkan
                        kesan bersih dan menenangkan.
                      </Card.Text>
                      <Card.Text>
                        Dinding yang berwarna lembut, ditambah perabotan
                        berwarna kontras namun netral seperti coklat, hitam,
                        atau abu-abu menghadirkan kesan adem. Konsepnya adalah
                        menghadirkan suasana ruangan yang lebih luas sehingga
                        orang-orang merasa lebih lapang dan tidak terjebak.
                      </Card.Text>
                      <Card.Text>
                        Dominasi nuansa putih ditambah dekorasi seperti tanaman
                        hias, vas bunga, lukisan sederhana, atau jam dinding.
                        Pengaturan ini bermanfaat untuk membantu banyak orang
                        yang terlibat untuk berpikir lebih jernih.
                      </Card.Text>
                    </div>
                    <footer className="blockquote-footer mt-5">
                      <cite title="Source Title">Riska Fathika</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <div>
                <div className="header mt-4">
                  <h3 className="gotham-medium">Related Posts</h3>
                </div>
                <div className="card-group mb-3">
                  <div className="card d-flex flex-row">
                    <img
                      src={imgBlog}
                      alt=""
                      className="card-img-left w-25 rounded-start-2"
                    />
                    <div className="card-body">
                      <p className="card-title">
                        Diskusi Lebih Nyaman dengan Interior Ruang Rapat
                        Minimalis
                      </p>
                      <p className="card-text fs-6">Oktober 5, 2023</p>
                    </div>
                  </div>
                </div>
                <div className="card-group">
                  <div className="card d-flex flex-row">
                    <img
                      src={imgBlog}
                      alt=""
                      className="card-img-left w-25 rounded-start-2"
                    />
                    <div className="card-body">
                      <p className="card-title">
                        Diskusi Lebih Nyaman dengan Interior Ruang Rapat
                        Minimalis
                      </p>
                      <p className="card-text fs-6">Oktober 5, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogUtama;
